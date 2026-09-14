// Central portfolio data. Add verified technology names and URLs here when available.
// Screenshot entries: { src: 'assets/example.png', alt: { en: '...', tr: '...' } }.
window.PORTFOLIO_CATEGORIES = ['games', 'apps', 'web', 'iot', 'desktop', 'other'];

window.PORTFOLIO_PROJECTS = [
  {
    id: 'devicecloud', title: 'DeviceCloud', category: 'iot', featured: true, coverVariant: 'dashboard', coverImage: 'assets/projects/devicecloud-cover.png',
    highlight: { en: 'Real-time device monitoring', tr: 'Gerçek zamanlı cihaz izleme' },
    description: { en: 'An IoT platform for managing devices and monitoring connected systems.', tr: 'Cihazları yönetmek ve bağlı sistemleri izlemek için bir IoT platformu.' },
    purpose: { en: 'Bring device monitoring, metrics and remote configuration into one clear interface.', tr: 'Cihaz izleme, metrikler ve uzaktan yapılandırmayı anlaşılır bir arayüzde bir araya getirmek.' },
    features: { en: ['Device management', 'System and metric monitoring', 'Remote configuration'], tr: ['Cihaz yönetimi', 'Sistem ve metrik takibi', 'Uzaktan yapılandırma'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: '', architecture: ''
  },
  {
    id: 'lmts-04', title: 'LMTS-04 — Lineer Motor Test ve Telemetri Sistemi', coverTitle: 'LMTS-04', category: 'iot', featured: false, coverVariant: 'telemetry', coverImage: 'assets/projects/lmts04-cover.png',
    highlight: { en: '8-Channel Telemetry • 50 Hz', tr: '8 Kanal Telemetri • 50 Hz' },
    description: {
      en: 'Electron and Python based desktop test system developed to monitor, analyze and record real-time linear motor telemetry including RPM, current, voltage, power, thrust force, temperature, position and efficiency.',
      tr: 'Lineer motor testlerinden alınan devir, akım, gerilim, güç, itki kuvveti, sıcaklık, konum ve verim verilerini gerçek zamanlı izlemek, analiz etmek ve kayıt altına almak için geliştirilmiş Electron ve Python tabanlı masaüstü test sistemi.'
    },
    purpose: {
      en: 'Provide a single desktop environment for observing, analyzing and recording linear motor test telemetry. It was developed for real hardware integration and supports serial and Modbus connections.',
      tr: 'Lineer motor test telemetrisini izlemek, analiz etmek ve kaydetmek için tek bir masaüstü ortamı sunmak. Gerçek donanım entegrasyonu için geliştirildi ve seri/Modbus bağlantılarını destekliyor.'
    },
    features: {
      en: ['8 real-time telemetry channels', 'Serial port and Modbus TCP support', 'Python hardware bridge', 'WebSocket-based live data streaming', 'Dynamic charts', 'Alarm and hysteresis management', 'Test profiles', 'Reference test comparison', 'CSV reporting', 'Offline Windows desktop operation'],
      tr: ['8 gerçek zamanlı telemetri kanalı', 'Seri port ve Modbus TCP desteği', 'Python donanım köprüsü', 'WebSocket tabanlı canlı veri aktarımı', 'Dinamik grafikler', 'Alarm ve histerezis yönetimi', 'Test profilleri', 'Referans test karşılaştırması', 'CSV raporlama', 'Çevrim dışı Windows masaüstü kullanımı']
    },
    technicalDetails: {
      en: ['Target measurement rate: 50 Hz', 'UI refresh interval: 200 ms', 'Invalid sensor packets are not added to the data history', 'The active test stops automatically if the data stream is interrupted for longer than 8 seconds', 'Electron security uses contextIsolation, sandboxing, disabled Node.js integration and a Content Security Policy'],
      tr: ['Hedef ölçüm hızı: 50 Hz', 'UI yenileme aralığı: 200 ms', 'Geçersiz sensör paketleri veri geçmişine eklenmez', 'Veri akışı 8 saniyeden uzun kesilirse aktif test otomatik durdurulur', 'Electron güvenlik ayarlarında contextIsolation, sandbox, kapalı Node.js entegrasyonu ve CSP kullanılır']
    },
    technologies: ['Electron', 'JavaScript', 'Python', 'WebSocket', 'Chart.js', 'PySerial', 'PyModbus', 'Modbus TCP', 'Node.js'],
    cardTechnologies: ['Electron', 'Python', 'WebSocket', 'Modbus TCP', 'Chart.js'],
    architecture: {
      en: 'Sensors / PLC / Microcontroller → Serial Port or Modbus TCP → Python Hardware Bridge → Local WebSocket Server → Electron Desktop Application',
      tr: 'Sensörler / PLC / Mikrodenetleyici → Seri Port veya Modbus TCP → Python Donanım Köprüsü → Yerel WebSocket Sunucusu → Electron Masaüstü Uygulaması'
    },
    screenshots: [], github: '', demo: '', googlePlay: ''
  },
  {
    id: 'kingdoms-choice', title: "Kingdom's Choice", category: 'games', featured: false, coverVariant: 'medieval', coverImage: 'assets/projects/kingdoms-choice-cover.png',
    highlight: { en: 'Card-Based Decision Game', tr: 'Kart Tabanlı Karar Oyunu' },
    description: {
      en: 'A medieval card-based decision game where the player responds to characters and events. Each choice affects the kingdom’s resources, population, military strength and the overall direction of the story.',
      tr: 'Ortaçağ temalı, kart tabanlı bir karar verme oyunu. Oyuncu karşısına çıkan karakterler ve olaylar için seçimler yapar; bu kararlar krallığın kaynaklarını, halkın durumunu, askerî gücü ve hikâyenin gidişatını etkiler.'
    },
    purpose: {
      en: 'A medieval card and decision game built around keeping a kingdom alive through balanced choices.',
      tr: 'Dengeli kararlarla bir krallığı ayakta tutma fikri etrafında geliştirilen ortaçağ temalı kart ve karar oyunu.'
    },
    features: {
      en: ['Card-based decision system', 'Left/right choice mechanic', 'Kingdom resources change with decisions', 'Different character and event cards', 'Poor decisions can lead to an early game over', 'Main menu and game start screen', 'Visual direction suited to a medieval atmosphere', 'Architecture suitable for future sound effects, regions and event chains'],
      tr: ['Kart tabanlı karar verme sistemi', 'Sağ/sol seçim mantığı', 'Krallık kaynaklarının kararlarla değişmesi', 'Farklı karakter ve olay kartları', 'Kötü kararların erken oyun sonuna yol açabilmesi', 'Ana menü ve oyun başlangıç ekranı', 'Ortaçağ atmosferine uygun görsel yapı', 'İleride ses efektleri, farklı bölgeler ve olay zincirleri eklenmeye uygun mimari']
    },
    gameDetails: {
      gameplay: {
        en: 'The player interacts with events or characters presented on cards. Each card offers two different decisions. Choices increase or decrease specific resources, and the game can end when one reaches a critical level. The goal is to keep the kingdom standing for as long as possible through balanced decisions.',
        tr: 'Oyuncu karşısına çıkan kartlardaki olay veya karakterlerle etkileşime girer. Her kartta iki farklı karar seçeneği bulunur. Verilen kararlar belirli kaynakları artırır veya azaltır. Kaynaklardan biri kritik seviyeye geldiğinde oyun sona erebilir. Amaç mümkün olduğunca uzun süre krallığı ayakta tutmak ve dengeli kararlar vermektir.'
      },
      decisionMechanic: {
        en: 'Every card presents a left and right choice. Each response changes multiple kingdom resources, so short-term gains can create longer-term risks and poor decisions may bring the reign to an early end.',
        tr: 'Her kart bir sağ ve bir sol seçim sunar. Her yanıt birden fazla krallık kaynağını değiştirir; bu nedenle kısa vadeli kazançlar uzun vadeli riskler yaratabilir ve kötü kararlar saltanatı erken sona erdirebilir.'
      },
      visualAtmosphere: {
        en: 'The interface is designed around character and event cards, with a visual language intended to support a focused medieval and fantasy atmosphere.',
        tr: 'Arayüz, karakter ve olay kartlarını merkeze alan; ortaçağ ve fantastik atmosferi destekleyecek bir görsel dil etrafında tasarlanıyor.'
      },
      technicalStructure: {
        en: 'The game is being developed for the web. Logic, card data, resource management, game state and UI are kept in separate modules wherever possible. The structure can later be extended so a built, playable version opens directly within the site.',
        tr: 'Oyun web tabanlı olarak geliştiriliyor. Mantık, kart verileri, kaynak yönetimi, oyun durumu ve UI mümkün olduğunca ayrı modüller halinde tutuluyor. Yapı, ileride oyunun build edilmiş oynanabilir sürümünün site içinde açılabileceği şekilde genişletilebilir.'
      }
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    gameType: { en: 'Medieval Card / Decision Game', tr: 'Ortaçağ Kart / Karar Oyunu' }, isPlayable: false, playUrl: '',
    screenshots: [], github: '', demo: '', googlePlay: ''
  },
  {
    id: 'pulsechat', title: 'PulseChat', category: 'web', featured: true, coverVariant: 'chat', coverImage: 'assets/projects/pulsechat-cover.png',
    highlight: { en: 'Real-time messaging', tr: 'Gerçek zamanlı mesajlaşma' },
    description: { en: 'A real-time chat application for conversations on the web.', tr: 'Web üzerinde anlık iletişim için gerçek zamanlı bir sohbet uygulaması.' },
    purpose: { en: 'Make real-time conversations accessible through a simple web experience.', tr: 'Gerçek zamanlı sohbeti sade bir web deneyimiyle erişilebilir kılmak.' },
    features: { en: ['Real-time messaging', 'Web-based conversations'], tr: ['Gerçek zamanlı mesajlaşma', 'Web üzerinden sohbet'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: ''
  },
  {
    id: 'tripledger', title: 'TripLedger', category: 'apps', featured: true, coverVariant: 'finance', coverImage: 'assets/projects/tripledger-cover.png',
    highlight: { en: 'Travel Expense Tracking', tr: 'Seyahat Harcama Takibi' },
    description: { en: 'Keep travel expenses, budgets and shared costs in one place.', tr: 'Seyahat harcamalarını, bütçeleri ve ortak giderleri tek yerde takip edin.' },
    purpose: { en: 'Keep personal and shared expenses organized, making travel budgets easier to follow.', tr: 'Kişisel ve ortak harcamaları düzenleyerek seyahat bütçesini takip etmeyi kolaylaştırmak.' },
    features: { en: ['Expense tracking and travel budgets', 'Shared expense records', 'Subscription management'], tr: ['Harcama takibi ve seyahat bütçeleri', 'Ortak gider kayıtları', 'Abonelik yönetimi'] },
    technologies: [], image: 'assets/tripledger-phone-cutout.png',
    screenshots: [{ src: 'assets/tripledger-phone-cutout.png', alt: { en: 'TripLedger application preview', tr: 'TripLedger uygulama önizlemesi' } }],
    github: '', demo: '', googlePlay: '', privacy: 'privacy/tripledger.html', terms: 'terms/tripledger.html'
  },
  {
    id: 'tinynotes', title: 'TinyNotes', category: 'apps', featured: true, coverVariant: 'notes', coverImage: 'assets/projects/tinynotes-cover.png',
    highlight: { en: 'Notes • Tasks • Reminders', tr: 'Notlar • Görevler • Hatırlatıcılar' },
    description: { en: 'A simple place to capture notes and organize everyday ideas.', tr: 'Not almak ve günlük fikirleri düzenlemek için sade bir uygulama.' },
    purpose: { en: 'Offer a focused writing space that makes creating and finding notes straightforward.', tr: 'Not oluşturmayı ve bulmayı kolaylaştıran, yazmaya odaklı bir alan sunmak.' },
    features: { en: ['Create and view notes', 'Organize written content', 'Minimal writing experience'], tr: ['Not oluşturma ve görüntüleme', 'Yazılı içerikleri düzenleme', 'Sade yazma deneyimi'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: '', privacy: 'privacy/tinynotes.html', terms: 'terms/tinynotes.html'
  },
  {
    id: 'restaurant-pos', title: 'Restaurant POS', category: 'web', featured: false, coverVariant: 'pos', coverImage: 'assets/projects/restaurant-pos-cover.png',
    highlight: { en: 'Orders • Tables • Payments', tr: 'Sipariş • Masa • Ödeme' },
    description: { en: 'A restaurant POS system for orders, inventory and sales reporting.', tr: 'Sipariş, stok ve satış raporlaması için bir restoran POS sistemi.' },
    purpose: { en: 'Bring daily restaurant operations together with ordering, inventory and sales tools.', tr: 'Sipariş, stok ve satış araçlarıyla günlük restoran operasyonlarını bir araya getirmek.' },
    features: { en: ['Order management', 'Inventory tracking', 'Sales reporting'], tr: ['Sipariş yönetimi', 'Stok takibi', 'Satış raporlama'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: ''
  }
];
