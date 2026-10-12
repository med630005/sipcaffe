// Bilingual site content. Each text field is { en, mk }.
// Edit this file to change the menu, team, blog posts or FAQ.

const SERVICES = [
  {
    title: { en: 'Specialty coffee', mk: 'Специјално кафе' },
    text: {
      en: 'Espresso classics, milk drinks with latte art, iced coffees and a full matcha line-up — made with freshly roasted Italian beans.',
      mk: 'Класично еспресо, млечни кафиња со лате арт, ладни кафиња и цела матча селекција — од свежо пржено италијанско кафе.',
    },
  },
  {
    title: { en: 'Cocktail & wine bar', mk: 'Коктел и вински бар' },
    text: {
      en: 'From 17:00 the bar takes over: spritzes, signature cocktails, Macedonian wines by the glass and boards to share.',
      mk: 'Од 17:00 барот ја презема сцената: шприцери, коктели, македонски вина на чаша и плати за споделување.',
    },
  },
  {
    title: { en: 'Private events', mk: 'Приватни настани' },
    text: {
      en: 'Birthdays, team drinks, engagement toasts — book part of the venue or the terrace for up to 40 guests.',
      mk: 'Родендени, тимски дружења, свршувачки — резервирајте дел од локалот или терасата за до 40 гости.',
    },
  },
  {
    title: { en: 'Gift vouchers', mk: 'Подарок ваучери' },
    text: {
      en: 'Give someone a coffee date or a cocktail night. Vouchers from 500 ден, valid for 6 months.',
      mk: 'Подарете некому кафе-средба или коктел вечер. Ваучери од 500 ден, важат 6 месеци.',
    },
  },
  {
    title: { en: 'Coffee to go', mk: 'Кафе за носење' },
    text: {
      en: 'In a hurry? Every coffee and matcha on the menu is available to take away in recyclable cups.',
      mk: 'Брзате? Секое кафе и матча од менито е достапно за носење во чаши што се рециклираат.',
    },
  },
  {
    title: { en: 'Terrace & Wi-Fi', mk: 'Тераса и Wi-Fi' },
    text: {
      en: 'A green terrace for sunny days and warm summer nights, plus free Wi-Fi and sockets for laptop mornings.',
      mk: 'Зелена тераса за сончеви денови и топли летни ноќи, со бесплатен Wi-Fi и штекери за работа на лаптоп.',
    },
  },
];

const MENU = [
  {
    id: 'coffee',
    name: { en: 'Coffee', mk: 'Кафе' },
    items: [
      { name: { en: 'Espresso', mk: 'Еспресо' }, desc: { en: 'Single shot, the old-time favourite', mk: 'Единечно, старата омилена класика' }, price: 80 },
      { name: { en: 'Macchiato', mk: 'Макијато' }, desc: { en: 'Espresso with a dash of milk foam', mk: 'Еспресо со малку млечна пена' }, price: 90 },
      { name: { en: 'Cappuccino', mk: 'Капучино' }, desc: { en: 'Espresso, steamed milk, silky foam', mk: 'Еспресо, загреано млеко, свилена пена' }, price: 110 },
      { name: { en: 'Flat White', mk: 'Флет вајт' }, desc: { en: 'Double shot, velvety micro-foam', mk: 'Двојно еспресо, кадифена микропена' }, price: 130 },
      { name: { en: 'Caffe Latte', mk: 'Кафе лате' }, desc: { en: 'Mild & milky, with latte art', mk: 'Благо и млечно, со лате арт' }, price: 120 },
      { name: { en: 'Hot Chocolate', mk: 'Топло чоколадо' }, desc: { en: 'Rich, with whipped cream on request', mk: 'Густо, со шлаг по желба' }, price: 130 },
    ],
  },
  {
    id: 'matcha',
    name: { en: 'Matcha & Cold', mk: 'Матча и ладни' },
    items: [
      { name: { en: 'Iced Matcha Latte', mk: 'Ледено матча лате' }, desc: { en: 'Ceremonial matcha over milk & ice', mk: 'Церемонијална матча со млеко и мраз' }, price: 180 },
      { name: { en: 'Matcha Vanilla', mk: 'Матча ванила' }, desc: { en: 'Layered with vanilla milk', mk: 'Во слоеви со млеко од ванила' }, price: 190 },
      { name: { en: 'Matcha White Chocolate', mk: 'Матча бело чоколадо' }, desc: { en: 'Sweet, creamy, green', mk: 'Слатко, кремасто, зелено' }, price: 200 },
      { name: { en: 'Espresso Tonic', mk: 'Еспресо тоник' }, desc: { en: 'Double shot over tonic & citrus', mk: 'Двојно еспресо со тоник и цитрус' }, price: 160 },
      { name: { en: 'Iced Latte', mk: 'Ледено лате' }, desc: { en: 'Cold milk, espresso, ice', mk: 'Ладно млеко, еспресо, мраз' }, price: 140 },
      { name: { en: 'Fresh Lemonade', mk: 'Свежа лимонада' }, desc: { en: 'Lemon, mint, a little sweetness', mk: 'Лимон, нане и малку сладост' }, price: 150 },
    ],
  },
  {
    id: 'cocktails',
    name: { en: 'Cocktails', mk: 'Коктели' },
    items: [
      { name: { en: 'Aperol Spritz', mk: 'Аперол шприц' }, desc: { en: 'Aperol, prosecco, soda, orange', mk: 'Аперол, просеко, сода, портокал' }, price: 280 },
      { name: { en: 'Strawberry Mojito', mk: 'Мохито со јагода' }, desc: { en: 'Rum, fresh strawberry, lime, mint', mk: 'Рум, свежа јагода, лимета, нане' }, price: 300 },
      { name: { en: 'Espresso Martini', mk: 'Еспресо мартини' }, desc: { en: 'Vodka, coffee liqueur, fresh espresso', mk: 'Вотка, ликер од кафе, свежо еспресо' }, price: 320 },
      { name: { en: 'Negroni', mk: 'Негрони' }, desc: { en: 'Gin, Campari, sweet vermouth', mk: 'Џин, Кампари, сладок вермут' }, price: 320 },
      { name: { en: 'Hugo', mk: 'Хуго' }, desc: { en: 'Elderflower, prosecco, mint, lime', mk: 'Бозел, просеко, нане, лимета' }, price: 280 },
      { name: { en: 'Sip Signature', mk: 'Sip Signature' }, desc: { en: 'Ask the bartender — it changes with the season', mk: 'Прашајте го барменот — се менува со сезоната' }, price: 340 },
    ],
  },
  {
    id: 'wine',
    name: { en: 'Wine & Spirits', mk: 'Вино и жестоки' },
    items: [
      { name: { en: 'Red wine, glass', mk: 'Црно вино, чаша' }, desc: { en: 'Macedonian Vranec & selected reds', mk: 'Македонски вранец и избрани црни вина' }, price: 220 },
      { name: { en: 'White wine, glass', mk: 'Бело вино, чаша' }, desc: { en: 'Smederevka, Chardonnay & more', mk: 'Смедеревка, шардоне и повеќе' }, price: 220 },
      { name: { en: 'Rosé, glass', mk: 'Розе, чаша' }, desc: { en: 'Light, dry, perfect for the terrace', mk: 'Лесно, суво, идеално за тераса' }, price: 220 },
      { name: { en: 'Prosecco', mk: 'Просеко' }, desc: { en: 'By the glass', mk: 'На чаша' }, price: 240 },
      { name: { en: 'Rakija', mk: 'Ракија' }, desc: { en: 'Homemade grape or plum', mk: 'Домашна гроздова или сливова' }, price: 120 },
      { name: { en: 'Charcuterie board', mk: 'Плата со пршута и сирење' }, desc: { en: 'Prosciutto, cheese & grissini to share', mk: 'Пршута, сирење и гризини за споделување' }, price: 590 },
    ],
  },
];

// Placeholder team — replace with the real staff.
const TEAM = [
  {
    name: 'Ana Petrovska',
    role: { en: 'Founder & Manager', mk: 'Основачка и менаџерка' },
    bio: {
      en: 'Opened Sip with one idea: a place that feels as good at 8 am as it does at 11 pm.',
      mk: 'Го отвори Sip со една идеја: место што е подеднакво пријатно во 8 наутро и во 11 навечер.',
    },
    fav: { en: 'Flat White', mk: 'Флет вајт' },
    color: 'var(--orange)',
  },
  {
    name: 'Marko Stojanovski',
    role: { en: 'Head Barista', mk: 'Главен бариста' },
    bio: {
      en: 'Dials in the espresso every morning and is behind every rosetta you see on Instagram.',
      mk: 'Секое утро го штима еспресото и стои зад секоја розета што ја гледате на Instagram.',
    },
    fav: { en: 'Espresso Tonic', mk: 'Еспресо тоник' },
    color: 'var(--green)',
  },
  {
    name: 'Elena Trajkovska',
    role: { en: 'Bar Manager', mk: 'Менаџерка на бар' },
    bio: {
      en: 'Creates the seasonal cocktail list and knows a Macedonian wine for every mood.',
      mk: 'Ја креира сезонската листа на коктели и знае македонско вино за секое расположение.',
    },
    fav: { en: 'Negroni', mk: 'Негрони' },
    color: 'var(--red)',
  },
  {
    name: 'Darko Nikolovski',
    role: { en: 'Host & Events', mk: 'Домаќин и настани' },
    bio: {
      en: 'Your first smile at the door and the person to talk to about birthdays and private events.',
      mk: 'Првата насмевка на влезот и личноста со која зборувате за родендени и приватни настани.',
    },
    fav: { en: 'Aperol Spritz', mk: 'Аперол шприц' },
    color: 'var(--wood)',
  },
];

const POSTS = [
  {
    id: 'autumn-menu',
    date: '2026-09-22',
    tag: { en: 'Menu', mk: 'Мени' },
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Hello Autumn: our seasonal menu is here', mk: 'Здраво есен: сезонското мени е тука' },
    excerpt: {
      en: 'Pumpkin spice lattes, chai and warm spiced cocktails are back for the cosy season.',
      mk: 'Лате со тиква и зачини, чај лате и топли коктели се враќаат за пријатната сезона.',
    },
    body: {
      en: [
        'The sofas have their autumn cushions on and the orange cups are out — the seasonal menu is officially here.',
        'Our pumpkin spice latte is made with real pumpkin purée, cinnamon, nutmeg and clove, topped with a little foam art. Prefer something lighter? Try the chai latte with oat milk.',
        'In the evening, the bar brings back the hot apple & cinnamon toddy and a spiced pear spritz. The autumn menu runs until the end of November.',
      ],
      mk: [
        'Каучите ги добија есенските перничиња, а портокаловите шолји се на маса — сезонското мени официјално стигна.',
        'Нашето лате со тиква е направено со вистинско пире од тиква, цимет, морско оревче и каранфилче. Сакате нешто полесно? Пробајте го чај латето со овесно млеко.',
        'Навечер барот го враќа топлиот пунч со јаболко и цимет и шприцерот со круша и зачини. Есенското мени трае до крајот на ноември.',
      ],
    },
  },
  {
    id: 'matcha',
    date: '2026-08-10',
    tag: { en: 'Drinks', mk: 'Пијалоци' },
    img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Matcha, three ways', mk: 'Матча на три начини' },
    excerpt: {
      en: 'Vanilla, white chocolate or classic — how we make the green drink everyone asks about.',
      mk: 'Ванила, бело чоколадо или класична — како ја правиме зелената пијалка за која сите прашуваат.',
    },
    body: {
      en: [
        'Matcha has quickly become one of our most-ordered drinks, so here is how we make it.',
        'We whisk ceremonial-grade matcha with a little water until smooth, then pour it over cold milk and ice so you get those green-and-white layers.',
        'Choose classic, vanilla or white chocolate — and if you can\'t decide, order the old-time favourite espresso on the side, like many of our regulars do.',
      ],
      mk: [
        'Матчата брзо стана една од најпорачуваните пијалки кај нас, па еве како ја правиме.',
        'Церемонијалната матча ја матиме со малку вода додека не стане мазна, а потоа ја истураме врз ладно млеко и мраз за да ги добиете зелено-белите слоеви.',
        'Изберете класична, со ванила или со бело чоколадо — а ако не можете да одлучите, порачајте и едно старо добро еспресо, како што прават многу наши редовни гости.',
      ],
    },
  },
  {
    id: 'vouchers',
    date: '2026-06-05',
    tag: { en: 'News', mk: 'Новости' },
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    title: { en: 'Gift a sip: vouchers now available', mk: 'Подари голтка: ваучерите се достапни' },
    excerpt: {
      en: 'The easiest present for coffee lovers and cocktail fans — pick one up at the bar.',
      mk: 'Најлесниот подарок за љубителите на кафе и коктели — подигнете го на шанкот.',
    },
    body: {
      en: [
        'Looking for a birthday, wedding or thank-you present? Sip gift vouchers are now available at the bar.',
        'Vouchers start at 500 ден and can be used for anything on the menu — from a morning flat white to a cocktail night for two. They are valid for six months.',
        'You can also order one through the contact form below and we\'ll have it ready for pick-up.',
      ],
      mk: [
        'Барате подарок за роденден, свадба или благодарност? Подарок ваучерите на Sip сега се достапни на шанкот.',
        'Ваучерите се од 500 ден и важат за сè од менито — од утринско флет вајт до коктел вечер за двајца. Важат шест месеци.',
        'Можете да нарачате ваучер и преку формата за контакт подолу и ќе ви го подготвиме за подигнување.',
      ],
    },
  },
];

const FAQ = [
  {
    q: { en: 'Do you take reservations?', mk: 'Дали примате резервации?' },
    a: {
      en: 'Yes — use the form below or call us. On weekend evenings the terrace is first-come, first-served, but we always keep a few tables for bookings.',
      mk: 'Да — користете ја формата подолу или јавете ни се. За викенд вечерите терасата е по редослед на доаѓање, но секогаш чуваме неколку маси за резервации.',
    },
  },
  {
    q: { en: 'Can I book Sip for a private event?', mk: 'Може ли да го резервирам Sip за приватен настан?' },
    a: {
      en: 'Absolutely. We host birthdays, team gatherings and small celebrations for up to 40 guests. Choose “Private event” in the contact form and tell us what you have in mind.',
      mk: 'Секако. Организираме родендени, тимски дружења и мали прослави за до 40 гости. Изберете „Приватен настан“ во формата и кажете ни што планирате.',
    },
  },
  {
    q: { en: 'Do you have plant-based milk?', mk: 'Дали имате растително млеко?' },
    a: {
      en: 'Yes — oat, almond and soy milk are available for every coffee and matcha drink.',
      mk: 'Да — овесно, бадемово и сојино млеко се достапни за секое кафе и матча.',
    },
  },
  {
    q: { en: 'Can I work from the café?', mk: 'Може ли да работам од кафулето?' },
    a: {
      en: 'Laptops are welcome until 17:00. We have free Wi-Fi and sockets along the sofa side.',
      mk: 'Лаптопите се добредојдени до 17:00. Имаме бесплатен Wi-Fi и штекери покрај каучите.',
    },
  },
  {
    q: { en: 'Are pets allowed?', mk: 'Дали се дозволени миленичиња?' },
    a: {
      en: 'Well-behaved dogs are very welcome on the terrace — we\'ll even bring a bowl of water.',
      mk: 'Мирните кучиња се многу добредојдени на терасата — ќе донесеме и сад со вода.',
    },
  },
  {
    q: { en: 'Where can I park?', mk: 'Каде може да паркирам?' },
    a: {
      en: 'There is street parking around Hipodrom. Evenings get busy, so we recommend coming a few minutes early.',
      mk: 'Има паркинг на улиците околу Хиподром. Навечер е гужва, па препорачуваме да дојдете неколку минути порано.',
    },
  },
];
