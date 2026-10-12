// Home page: renders content from data.js and wires up the form, map and status.

const pad = (n) => String(n).padStart(2, '0');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ===================== SERVICES ===================== */
function renderServices() {
  document.getElementById('servicesGrid').innerHTML = SERVICES.map(
    (s, i) => `
      <article class="service reveal is-visible">
        <span class="service__num">${pad(i + 1)}</span>
        <h3>${esc(tr(s.title))}</h3>
        <p>${esc(tr(s.text))}</p>
      </article>`
  ).join('');
}

/* ===================== MENU ===================== */
let activeTab = MENU[0].id;
function renderMenu() {
  document.getElementById('menuTabs').innerHTML = MENU.map(
    (c) => `<button class="tab ${c.id === activeTab ? 'is-active' : ''}" role="tab"
              aria-selected="${c.id === activeTab}" data-tab="${c.id}">${esc(tr(c.name))}</button>`
  ).join('');

  const cat = MENU.find((c) => c.id === activeTab);
  document.getElementById('menuPanels').innerHTML = `
    <ul class="items" role="tabpanel">
      ${cat.items
        .map(
          (it) => `
        <li>
          <div><h4>${esc(tr(it.name))}</h4><p>${esc(tr(it.desc))}</p></div>
          <span class="price">${it.price}<small>${t('menu.currency')}</small></span>
        </li>`
        )
        .join('')}
    </ul>`;
}
document.getElementById('menuTabs').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-tab]');
  if (!btn) return;
  activeTab = btn.dataset.tab;
  renderMenu();
});

/* ===================== TEAM ===================== */
function renderTeam() {
  document.getElementById('teamGrid').innerHTML = TEAM.map((m) => {
    const initials = m.name.split(' ').map((p) => p[0]).join('');
    return `
      <article class="member reveal is-visible">
        <div class="member__avatar" style="--c:${m.color}"><span>${initials}</span></div>
        <h3>${esc(m.name)}</h3>
        <p class="member__role">${esc(tr(m.role))}</p>
        <p class="member__bio">${esc(tr(m.bio))}</p>
        <p class="member__fav"><span>${t('team.fav')}:</span> ${esc(tr(m.fav))}</p>
      </article>`;
  }).join('');
}

/* ===================== NEWS ===================== */
// Month names written out: not every browser ships Macedonian locale data.
const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  mk: ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември'],
};
const fmtDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${(MONTHS[lang] || MONTHS.en)[m - 1]} ${y}`;
};

function renderNews() {
  document.getElementById('newsGrid').innerHTML = POSTS.map(
    (p) => `
      <article class="post reveal is-visible">
        <button class="post__link" data-post="${p.id}">
          <div class="post__img"><img src="${p.img}" alt="" loading="lazy" /></div>
          <div class="post__body">
            <p class="post__meta"><span>${esc(tr(p.tag))}</span> · ${fmtDate(p.date)}</p>
            <h3>${esc(tr(p.title))}</h3>
            <p>${esc(tr(p.excerpt))}</p>
            <span class="post__more">${t('news.more')}</span>
          </div>
        </button>
      </article>`
  ).join('');
}

const articleModal = document.getElementById('articleModal');
let openPost = null;
function fillArticle(p) {
  document.getElementById('articleImg').src = p.img;
  document.getElementById('articleMeta').textContent = `${tr(p.tag)} · ${fmtDate(p.date)}`;
  document.getElementById('articleTitle').textContent = tr(p.title);
  document.getElementById('articleBody').innerHTML = tr(p.body).map((para) => `<p>${esc(para)}</p>`).join('');
}
document.getElementById('newsGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-post]');
  if (!btn) return;
  openPost = POSTS.find((p) => p.id === btn.dataset.post);
  fillArticle(openPost);
  openModal(articleModal);
});

/* ===================== FAQ ===================== */
function renderFaq() {
  const openIdx = [...document.querySelectorAll('#faqList details')].map((d) => d.open);
  document.getElementById('faqList').innerHTML = FAQ.map(
    (f, i) => `
      <details class="qa" ${openIdx[i] ? 'open' : ''}>
        <summary>${esc(tr(f.q))}<span aria-hidden="true">+</span></summary>
        <p>${esc(tr(f.a))}</p>
      </details>`
  ).join('');
}

/* ===================== OPEN NOW ===================== */
// Minutes from midnight; a close value past 1440 runs into the next day.
const HOURS = { 0: [540, 1440], 1: [450, 1440], 2: [450, 1440], 3: [450, 1440], 4: [450, 1440], 5: [450, 1440], 6: [480, 1500] };
const fmtMin = (m) => `${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}`;

function renderStatus() {
  const el = document.getElementById('openStatus');
  const now = new Date();
  const day = now.getDay();
  const m = now.getHours() * 60 + now.getMinutes();
  const [open, close] = HOURS[day];
  const [, prevClose] = HOURS[(day + 6) % 7];

  let isOpen = false, label;
  if (m >= open && m < close) { isOpen = true; label = fmtMin(close); }
  else if (prevClose > 1440 && m < prevClose - 1440) { isOpen = true; label = fmtMin(prevClose); }
  else label = fmtMin(m < open ? open : HOURS[(day + 1) % 7][0]);

  el.className = `status ${isOpen ? 'status--open' : 'status--closed'}`;
  el.textContent = t(isOpen ? 'status.open' : 'status.closed', { t: label });
}
setInterval(renderStatus, 60_000);

/* ===================== MAP (only with third-party consent) ===================== */
const MAP_SRC = 'https://www.google.com/maps?q=Sip+Caffe+Bar+Hipodrom+Skopje&output=embed';
function loadMap() {
  const map = document.getElementById('map');
  if (map.querySelector('iframe')) return;
  map.innerHTML = `<iframe title="Sip Caffe Bar location" src="${MAP_SRC}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}
document.getElementById('loadMap').addEventListener('click', () => {
  saveConsent({ ...(getConsent() || { analytics: false }), thirdParty: true });
});
const syncMap = (c) => c?.thirdParty && loadMap();
onConsent(syncMap);
syncMap(getConsent());

/* ===================== CONTACT FORM ===================== */
const form = document.getElementById('contactForm');
const reason = document.getElementById('reason');
const bookingFields = document.getElementById('bookingFields');
const success = document.getElementById('formSuccess');
const needsBooking = () => ['reservation', 'event'].includes(reason.value);

reason.addEventListener('change', () => (bookingFields.hidden = !needsBooking()));

const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
form.date.min = todayISO();

function setError(input, key) {
  const err = input.type === 'checkbox' ? document.getElementById('consentErr') : input.closest('.field').querySelector('.field__err');
  err.dataset.err = key || '';
  err.textContent = key ? t(key) : '';
  input.classList.toggle('is-invalid', !!key);
}

function validate() {
  const f = form.elements;
  const checks = [
    [f.name, !f.name.value.trim() && 'err.required'],
    [f.email, !f.email.value.trim() ? 'err.required' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim()) && 'err.email'],
    [f.phone, f.phone.value.trim() && !/^\+?[\d\s/-]{6,}$/.test(f.phone.value.trim()) && 'err.phone'],
    [f.message, !f.message.value.trim() && 'err.required'],
    [f.consent, !f.consent.checked && 'err.consent'],
  ];
  if (needsBooking()) {
    checks.push(
      [f.date, !f.date.value ? 'err.required' : f.date.value < todayISO() && 'err.date'],
      [f.time, !f.time.value && 'err.required'],
      [f.guests, !(+f.guests.value >= 1 && +f.guests.value <= 60) && 'err.guests']
    );
  } else {
    [f.date, f.time, f.guests].forEach((i) => setError(i, null));
  }
  checks.forEach(([input, key]) => setError(input, key || null));
  return checks.find(([, key]) => key)?.[0] ?? null;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  success.hidden = true;
  const firstInvalid = validate();
  if (firstInvalid) return firstInvalid.focus();

  // Front-end only: there is no server, so we just confirm and reset.
  const name = form.elements.name.value.trim().split(' ')[0];
  success.dataset.name = name;
  success.textContent = t('form.success', { name });
  success.hidden = false;
  form.reset();
  form.date.min = todayISO();
  bookingFields.hidden = !needsBooking();
});

// Clear an error as soon as the field is fixed.
form.addEventListener('input', (e) => {
  if (e.target.classList.contains('is-invalid')) validate();
});

/* ===================== INIT ===================== */
function renderAll() {
  renderServices();
  renderMenu();
  renderTeam();
  renderNews();
  renderFaq();
  renderStatus();
  document.querySelectorAll('.field__err[data-err]').forEach((el) => (el.textContent = el.dataset.err ? t(el.dataset.err) : ''));
  if (!success.hidden) success.textContent = t('form.success', { name: success.dataset.name });
  if (openPost && !articleModal.hidden) fillArticle(openPost);
}
onLangChange(renderAll);
applyLang();
observeReveals();
