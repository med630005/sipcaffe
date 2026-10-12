// Shared behaviour for every page: language, cookie consent, nav, modals, reveal.

const store = {
  get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
  set(key, val) { try { localStorage.setItem(key, val); } catch (_) {} },
};

/* ===================== LANGUAGE ===================== */
const LANGS = Object.keys(I18N);
let lang = LANGS.includes(store.get('sip-lang')) ? store.get('sip-lang') : 'en';
const langListeners = [];

// t('key', { name: 'Ana' }) → translated interface string
function t(key, vars = {}) {
  const str = I18N[lang][key] ?? I18N.en[key] ?? key;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}
// tr({ en, mk }) → value for the current language
const tr = (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.en : obj);

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll('[data-i18n-html]').forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  document.querySelectorAll('[data-lang]').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
    b.setAttribute('aria-pressed', b.dataset.lang === lang);
  });
  langListeners.forEach((fn) => fn(lang));
}

function setLang(next) {
  lang = next;
  store.set('sip-lang', lang);
  applyLang();
}
const onLangChange = (fn) => langListeners.push(fn);

document.querySelectorAll('[data-lang]').forEach((b) =>
  b.addEventListener('click', () => setLang(b.dataset.lang))
);

/* ===================== MODALS ===================== */
let lastFocus = null;
function openModal(modal) {
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('no-scroll');
  requestAnimationFrame(() => modal.classList.add('is-open'));
  modal.querySelector('.modal__close')?.focus();
}
function closeModal(modal) {
  modal.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  setTimeout(() => (modal.hidden = true), 250);
  lastFocus?.focus();
}
document.querySelectorAll('.modal').forEach((m) =>
  m.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', () => closeModal(m)))
);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal.is-open').forEach(closeModal);
});

/* ===================== COOKIES ===================== */
// Stored as JSON: { analytics: bool, thirdParty: bool, date: ISO }
const consentListeners = [];
function getConsent() {
  try { return JSON.parse(store.get('sip-cookies')); } catch (_) { return null; }
}
function saveConsent(c) {
  store.set('sip-cookies', JSON.stringify({ ...c, date: new Date().toISOString() }));
  cookieBar.hidden = true;
  consentListeners.forEach((fn) => fn(getConsent()));
}
const onConsent = (fn) => consentListeners.push(fn);

const cookieBar = document.getElementById('cookieBar');
const cookieModal = document.getElementById('cookieModal');
const ckAnalytics = document.getElementById('ckAnalytics');
const ckThird = document.getElementById('ckThird');

if (!getConsent()) setTimeout(() => (cookieBar.hidden = false), 600);

document.getElementById('cookieAccept').addEventListener('click', () => saveConsent({ analytics: true, thirdParty: true }));
document.getElementById('cookieReject').addEventListener('click', () => saveConsent({ analytics: false, thirdParty: false }));
document.querySelectorAll('[data-open-cookies]').forEach((b) =>
  b.addEventListener('click', () => {
    const c = getConsent() || {};
    ckAnalytics.checked = !!c.analytics;
    ckThird.checked = !!c.thirdParty;
    openModal(cookieModal);
  })
);
document.getElementById('cookieSave').addEventListener('click', () => {
  saveConsent({ analytics: ckAnalytics.checked, thirdParty: ckThird.checked });
  closeModal(cookieModal);
});

/* ===================== NAV ===================== */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const toTop = document.getElementById('toTop');

const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
  toTop?.classList.toggle('is-visible', window.scrollY > 700);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function closeNav() {
  nav.classList.remove('is-open');
  burger?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
}
burger?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open);
  document.body.classList.toggle('no-scroll', open);
});
document.querySelectorAll('#navLinks a, .nav__cta').forEach((a) => a.addEventListener('click', closeNav));

/* ===================== REVEAL ===================== */
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObserver.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
const observeReveals = (root = document) =>
  root.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => revealObserver.observe(el));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
