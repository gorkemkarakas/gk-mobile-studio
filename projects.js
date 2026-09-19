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
    id: 'evys',
    title: { en: 'EVYS — Electric Vehicle Competition Management System', tr: 'EVYS — Elektrikli Araç Yarış Yönetim Sistemi' },
    coverTitle: 'EVYS', category: 'web', featured: true, coverVariant: 'dashboard', coverImage: 'assets/projects/evys-cover.jpg',
    highlight: {
      en: 'Technical Inspection • Judge Management • Competition Operations',
      tr: 'Teknik Kontrol • Hakem Yönetimi • Yarış Operasyonu'
    },
    description: {
      en: 'A comprehensive web-based competition management platform designed to manage technical inspections, judge evaluations, team operations, announcements and competition workflows for electric vehicle events.',
      tr: 'Elektrikli araç yarışlarının teknik kontrol, hakem değerlendirmeleri, takım yönetimi, duyurular ve yarış operasyonlarını tek bir web tabanlı sistem üzerinde yönetmek amacıyla geliştirilen kapsamlı yarış yönetim platformu.'
    },
    purpose: {
      en: 'Digitize competition workflows between teams, judges and organizers by bringing technical inspections, evaluations and race operations into a centralized and traceable system.',
      tr: 'Takımlar, hakemler ve organizasyon yöneticileri arasındaki yarış süreçlerini dijitalleştirerek teknik kontrol, değerlendirme ve yarış operasyonlarını daha düzenli, takip edilebilir ve merkezi bir yapıya taşımak.'
    },
    features: {
      en: ['Admin panel', 'Judge / Technical Committee panel', 'Team panel', 'Technical / organization panel', 'Technical inspection evaluation screens', 'Eligible / Not Eligible competition decision system', 'Team management', 'Announcement system', 'Messaging / communication infrastructure', 'Competition results management', 'Manual race time entry', 'Best-time based ranking structure', 'Manual handling of disqualification and special competition statuses', 'Electromobile and Hydromobile category support', 'Mobile-responsive interface'],
      tr: ['Admin paneli', 'Hakem / DDK paneli', 'Takım paneli', 'Teknik ekip / organizasyon paneli', 'Teknik kontrol değerlendirme ekranları', 'Yarışabilir / Yarışamaz karar sistemi', 'Takım yönetimi', 'Duyuru sistemi', 'Mesajlaşma / sohbet altyapısı', 'Yarış sonuçları yönetimi', 'Manuel süre girişi', 'En iyi yarış süresini baz alan sonuç sistemi', 'Diskalifiye / yarış dışı gibi özel durumların manuel olarak işlenebilmesi', 'Elektromobil ve Hidromobil kategori desteği', 'Mobil uyumlu arayüz']
    },
    detailSections: [
      {
        title: { en: 'User roles', tr: 'Kullanıcı rolleri' },
        content: {
          en: 'Admin, Judge / Technical Committee, Team and Technical Staff users access only the competition workflows relevant to their responsibilities and permissions.',
          tr: 'Admin, Hakem / DDK, Takım ve Teknik Ekip kullanıcıları yalnızca kendi sorumlulukları ve yetkileriyle ilgili yarış süreçlerine erişir.'
        }
      },
      {
        title: { en: 'Technical inspection', tr: 'Teknik kontrol' },
        content: {
          en: 'Judges or technical inspectors evaluate safety and compliance criteria and determine whether a team is eligible to compete.',
          tr: 'Hakem veya teknik kontrol görevlileri güvenlik ve uygunluk kriterlerini değerlendirerek takımın yarışabilirlik durumunu sistem üzerinden belirleyebilir.'
        },
        items: {
          en: ['Emergency Switch', 'BMS', 'IMD', 'Charging Unit', 'Fuse', 'Safety Belt'],
          tr: ['Acil Şalter', 'BMS', 'IMD', 'Şarj Birimi', 'Sigorta', 'Emniyet Kemeri']
        }
      },
      {
        title: { en: 'Competition results system', tr: 'Yarış sonuç sistemi' },
        items: {
          en: ['Race times can be entered manually', 'The best time can be selected when a team has multiple runs', 'Special statuses such as Disqualified or Did Not Finish can be assigned', 'Results can be published through a centralized competition results page', 'Competition categories can be managed as Electromobile and Hydromobile'],
          tr: ['Yarış süreleri manuel olarak sisteme girilebilir', 'Bir takımın birden fazla koşusu varsa en iyi süre baz alınabilir', 'Diskalifiye, Yarış Dışı veya benzeri özel durumlar tanımlanabilir', 'Sonuçlar merkezi bir yarış sonuç ekranında yayınlanabilir', 'Yarış kategorileri Elektromobil ve Hidromobil olarak yönetilebilir']
        }
      }
    ],
    technologies: ['Web Application', 'Responsive UI'],
    architecture: {
      en: 'A modular web application structured around Admin, Judge / Technical Committee, Team and Technical Staff roles, where each role accesses competition workflows according to its responsibilities and permissions.',
      tr: 'Admin, Hakem / DDK, Takım ve Teknik Ekip rollerine ayrılmış modüler web uygulaması. Her kullanıcı rolü yalnızca kendi yarış operasyonları ve yetkileriyle ilgili ekranlara erişir.'
    },
    screenshots: [], github: '', demo: '', googlePlay: ''
  },
  {
    id: 'aquaquest', title: 'AquaQuest', category: 'apps', featured: true, coverVariant: 'aqua', coverImage: 'assets/projects/aquaquest-cover.png',
    highlight: { en: 'Gamified Hydration Tracker', tr: 'Oyunlaştırılmış Hidrasyon Takibi' },
    description: {
      en: 'A native Android hydration tracking application that turns daily fluid intake into a gamified experience with XP, levels, streaks, achievements and daily quests.',
      tr: 'Günlük sıvı tüketimini XP, seviye, seri, başarımlar ve günlük görevlerle oyunlaştırılmış bir deneyime dönüştüren native Android hidrasyon takip uygulaması.'
    },
    purpose: {
      en: 'Encourage consistent hydration by combining practical fluid tracking with rewarding game mechanics and a visually responsive water tank.',
      tr: 'Pratik sıvı takibini ödüllendirici oyun mekanikleri ve görsel olarak tepki veren su tankı ile birleştirerek düzenli sıvı tüketimini teşvik etmek.'
    },
    features: {
      en: ['Track water, coffee, tea and other beverages', 'Different hydration contribution ratios for beverage types', 'Daily hydration goal', 'Animated glass water tank that fills according to progress', 'XP and level system', 'Streak tracking', 'Daily quests', 'Achievements and titles', 'Level-up and achievement celebration animations', 'Haptic feedback', 'Undo the last beverage action with related state restoration', 'Statistics screen', 'Achievements screen', 'Profile management', 'Reminder and notification settings', 'Android alarm and notification infrastructure', 'Coming Soon leaderboard screen instead of fake online data', 'Persistent local data storage'],
      tr: ['Su, kahve, çay ve diğer içecekleri kaydetme', 'İçecek türlerine göre farklı hidrasyon katkı oranları', 'Günlük hidrasyon hedefi', 'İlerlemeye göre dolan animasyonlu cam su tankı', 'XP ve seviye sistemi', 'Seri takibi', 'Günlük görevler', 'Başarımlar ve unvanlar', 'Seviye ve başarım kutlama animasyonları', 'Haptic feedback', 'Son içecek işlemini ve ilişkili state değişikliklerini geri alma', 'İstatistik ekranı', 'Başarımlar ekranı', 'Profil yönetimi', 'Hatırlatıcı ve bildirim ayarları', 'Android alarm ve bildirim altyapısı', 'Sahte veri yerine Coming Soon lider tablosu', 'Kalıcı yerel veri saklama']
    },
    technicalDetails: {
      en: ['Developed as a native Android application in Java', 'GlassWaterView.java was extracted into a dedicated custom view', 'Hydration, XP, level, streak and SharedPreferences logic was moved into HydrationDataManager.java', 'UI updates were optimized so the entire screen is not recreated after every small action', 'Uses the Android system splash screen', 'Tested on a real Android device for approximately two days', 'The MVP reached a stable state and was being prepared for Google Play'],
      tr: ['Java ile native Android uygulaması olarak geliştirildi', 'GlassWaterView.java özel bir custom view olarak ayrıldı', 'Hidrasyon, XP, seviye, seri ve SharedPreferences yönetiminin önemli bölümü HydrationDataManager.java içine taşındı', 'Her küçük işlemde tüm ekranı yeniden oluşturmak yerine yalnızca değişen UI parçaları güncellenecek şekilde optimize edildi', 'Android sistem splash ekranı kullanılıyor', 'Gerçek Android cihazda yaklaşık iki gün test edildi', 'Stabil MVP seviyesine ulaştı ve Google Play hazırlığına yaklaştı']
    },
    technologies: ['Android', 'Java', 'SharedPreferences', 'Custom View', 'Android Notifications', 'AlarmManager', 'Haptic Feedback'],
    cardTechnologies: ['Android', 'Java', 'Gamification', 'Notifications', 'Custom View'],
    screenshots: [], github: '', demo: '', googlePlay: '', architecture: ''
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
    id: 'arcane-survive', title: 'Arcane Survive', category: 'games', featured: false, coverVariant: 'arcane', coverImage: 'assets/projects/arcane-survive-cover.png',
    highlight: { en: 'Survivor-Like Action Roguelite', tr: 'Survivor-Like Aksiyon Roguelite' },
    description: {
      en: 'A browser-based survivor-like action roguelite focused on automatic combat, enemy waves, progression and build decisions.',
      tr: 'Otomatik savaş, düşman dalgaları, ilerleme ve build seçimlerine odaklanan tarayıcı tabanlı survivor-like aksiyon roguelite oyunu.'
    },
    purpose: {
      en: 'Create a fast and replayable survival experience where character growth and upgrade choices determine how long the player can withstand increasingly dangerous enemies.',
      tr: 'Karakter gelişimi ve yükseltme seçimlerinin oyuncunun giderek zorlaşan düşmanlara ne kadar dayanabileceğini belirlediği hızlı ve tekrar oynanabilir bir hayatta kalma deneyimi oluşturmak.'
    },
    features: {
      en: ['Player movement', 'Automatic attacks', 'XP and level system', 'Three-choice level-up perk system', 'Enemy waves', 'Multiple enemy tiers', 'Progressive enemy scaling', 'Boss encounters', 'Gold system', 'Shop and upgrade structure', 'Loot drops', 'Artifact and collection mechanics', 'Persistent progression', 'Mobile-friendly control direction', 'Modular game logic'],
      tr: ['Oyuncu hareket sistemi', 'Otomatik saldırılar', 'XP ve seviye sistemi', 'Seviye atlandığında üç seçenekli perk sistemi', 'Düşman dalgaları', 'Farklı düşman seviyeleri', 'Kademeli düşman güçlenmesi', 'Boss karşılaşmaları', 'Gold sistemi', 'Mağaza ve yükseltme yapısı', 'Loot sistemi', 'Artifact ve koleksiyon mekanikleri', 'Kalıcı ilerleme', 'Mobil uyumlu kontrol yaklaşımı', 'Modüler oyun mantığı']
    },
    gameDetails: {
      gameplay: { en: 'Movement and automatic attacks create a fast survival loop built around defeating enemy waves, collecting XP and choosing one of three perks at each level.', tr: 'Hareket ve otomatik saldırılar; düşman dalgalarını yenme, XP toplama ve her seviyede üç perk arasından seçim yapma üzerine kurulu hızlı bir hayatta kalma döngüsü oluşturur.' },
      decisionMechanic: { en: 'Perks, shop upgrades, loot and artifacts shape each build while progressive scaling and bosses continually raise the pressure.', tr: 'Perkler, mağaza geliştirmeleri, loot ve artifact seçimleri her buildi şekillendirirken kademeli güçlenme ve bosslar baskıyı sürekli artırır.' },
      visualAtmosphere: { en: 'The browser presentation is designed for readable action and a mobile-friendly control direction as enemy density grows.', tr: 'Tarayıcı sunumu, düşman yoğunluğu arttıkça aksiyonun okunaklı kalmasını ve mobil uyumlu kontrol yaklaşımını destekleyecek şekilde tasarlanmıştır.' },
      technicalStructure: { en: 'Game systems are separated into ES modules, with LocalStorage supporting persistent progression and a structure ready for a future playable site build.', tr: 'Oyun sistemleri ES modüllerine ayrılmıştır; LocalStorage kalıcı ilerlemeyi destekler ve yapı gelecekte siteye bağlanacak oynanabilir bir build için hazırdır.' }
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES Modules', 'LocalStorage'],
    gameType: { en: 'Survivor-Like / Action Roguelite', tr: 'Survivor-Like / Aksiyon Roguelite' }, isPlayable: false, playUrl: '',
    screenshots: [], github: '', demo: '', googlePlay: ''
  },
  {
    id: 'dilek-bahcesi', title: 'Dilek Bahçesi', category: 'games', featured: false, coverVariant: 'garden', coverImage: 'assets/projects/dilek-bahcesi-cover.png',
    highlight: { en: 'Coin Toss • Collection • Idle Progression', tr: 'Jeton Atma • Koleksiyon • Idle İlerleme' },
    description: {
      en: 'A casual collection game where players throw coins into a wishing fountain to discover random items, complete collections and build their economy.',
      tr: 'Oyuncuların dilek kuyusuna jeton atarak rastgele eşyalar keşfettiği, koleksiyon tamamladığı ve oyun ekonomisini geliştirdiği casual koleksiyon oyunu.'
    },
    purpose: {
      en: 'Turn a simple coin toss into a satisfying progression loop built around discovery, rarity, collecting and selling.',
      tr: 'Basit bir jeton atma mekaniğini keşif, nadirlik, koleksiyon ve satış etrafında tatmin edici bir ilerleme döngüsüne dönüştürmek.'
    },
    features: {
      en: ['Coin toss mechanic', 'Random item rewards', 'Large collectible item pool', 'Item rarity system', 'Collection tracking', 'Inventory and bag', 'Item detail modal', 'Selling collected items', 'Coin economy', 'Better coin progression', 'Collection progress', 'New item indicator', 'Persistent save data', 'Responsive web interface', 'Animated background and environmental visuals', 'Expandable structure for new wells and maps'],
      tr: ['Jeton atma mekaniği', 'Rastgele eşya ödülleri', 'Geniş koleksiyon eşya havuzu', 'Nadirlik sistemi', 'Koleksiyon takibi', 'Çanta ve envanter', 'Eşya detay modalı', 'Toplanan eşyaları satma', 'Jeton ekonomisi', 'Geliştirilmiş jeton ilerlemesi', 'Koleksiyon ilerleme göstergesi', 'Yeni eşya göstergesi', 'Kalıcı kayıt sistemi', 'Responsive web arayüzü', 'Hareketli arka plan ve çevresel görseller', 'Yeni kuyu ve haritalara genişletilebilir yapı']
    },
    gameDetails: {
      gameplay: { en: 'Players toss coins into a wishing fountain, reveal random items and grow a collection through a relaxed idle progression loop.', tr: 'Oyuncular dilek kuyusuna jeton atar, rastgele eşyalar keşfeder ve rahat bir idle ilerleme döngüsü içinde koleksiyonlarını büyütür.' },
      decisionMechanic: { en: 'Rarity, selling decisions, better coin progression and collection goals shape how the player develops the in-game economy.', tr: 'Nadirlik, satış kararları, daha iyi jetonlara ilerleme ve koleksiyon hedefleri oyuncunun oyun ekonomisini nasıl geliştireceğini belirler.' },
      visualAtmosphere: { en: 'A responsive interface, animated background and environmental details create a calm wishing-garden atmosphere that can expand to new wells and maps.', tr: 'Responsive arayüz, hareketli arka plan ve çevresel detaylar; yeni kuyu ve haritalara genişleyebilen sakin bir dilek bahçesi atmosferi oluşturur.' },
      technicalStructure: { en: 'A versioned save structure protects persistent progress, while a structured item data model keeps rarity, collection and economy content expandable without exposing raw implementation details.', tr: 'Sürümlendirilmiş kayıt yapısı kalıcı ilerlemeyi korurken düzenli eşya veri modeli; nadirlik, koleksiyon ve ekonomi içeriğinin ham uygulama detaylarını kullanıcıya göstermeden genişletilebilmesini sağlar.' }
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    gameType: { en: 'Casual / Collection / Idle', tr: 'Casual / Koleksiyon / Idle' }, isPlayable: false, playUrl: '',
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
    id: 'mining-tycoon', title: 'Mining Tycoon', category: 'games', featured: false, coverVariant: 'mining', coverImage: 'assets/projects/mining-tycoon-cover.png',
    highlight: { en: 'Idle Mining & Production Management', tr: 'Idle Madencilik ve Üretim Yönetimi' },
    description: {
      en: 'An idle tycoon prototype where workers mine resources, trucks transport them and factories turn production into income.',
      tr: 'İşçilerin kaynak çıkardığı, kamyonların taşıma yaptığı ve fabrikaların üretimi gelire dönüştürdüğü idle tycoon prototipi.'
    },
    purpose: {
      en: 'Build an expandable mining economy through worker, logistics, storage and production upgrades.',
      tr: 'İşçi, lojistik, depo ve üretim yükseltmeleri üzerinden büyüyen bir madencilik ekonomisi oluşturmak.'
    },
    features: {
      en: ['Worker mining loop', 'Resource transport by trucks', 'Factory production', 'Worker count upgrades', 'Tool upgrades', 'Truck count upgrades', 'Storage capacity upgrades', 'Production progression', 'Expandable map', 'Environmental elements such as clouds, birds and ambient objects', 'Idle and tycoon progression structure'],
      tr: ['İşçi kazı döngüsü', 'Kamyonlarla kaynak taşıma', 'Fabrika üretimi', 'İşçi sayısı geliştirmeleri', 'Alet geliştirmeleri', 'Kamyon sayısı geliştirmeleri', 'Depo kapasitesi geliştirmeleri', 'Üretim ilerleme sistemi', 'Genişletilebilir harita', 'Bulut, kuş ve çevresel objeler', 'Idle ve tycoon ilerleme yapısı']
    },
    gameDetails: {
      gameplay: { en: 'Workers extract resources, trucks carry them through the logistics chain and factories convert production into income.', tr: 'İşçiler kaynak çıkarır, kamyonlar bunları lojistik zincirinde taşır ve fabrikalar üretimi gelire dönüştürür.' },
      decisionMechanic: { en: 'Worker, tool, truck, storage and production upgrades determine where bottlenecks form and how quickly the mining economy expands.', tr: 'İşçi, alet, kamyon, depo ve üretim geliştirmeleri darboğazların nerede oluşacağını ve madencilik ekonomisinin ne kadar hızlı büyüyeceğini belirler.' },
      visualAtmosphere: { en: 'An expandable mine map is supported by environmental details including clouds, birds and ambient objects.', tr: 'Genişletilebilir maden haritası; bulutlar, kuşlar ve çevresel objeler gibi atmosfer detaylarıyla desteklenir.' },
      technicalStructure: { en: 'The prototype separates its mining, transport, storage and production loops so the idle tycoon economy and map can grow over time.', tr: 'Prototip; kazı, taşıma, depolama ve üretim döngülerini ayırarak idle tycoon ekonomisinin ve haritanın zamanla büyütülebilmesini sağlar.' }
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    gameType: { en: 'Idle / Tycoon / Management', tr: 'Idle / Tycoon / Yönetim' }, isPlayable: false, playUrl: '',
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
    id: 'restaurant-pos', title: 'Restaurant POS', category: 'web', featured: false, coverVariant: 'pos', coverImage: 'assets/projects/restaurant-pos-cover.png',
    highlight: { en: 'Orders • Tables • Payments', tr: 'Sipariş • Masa • Ödeme' },
    description: { en: 'A restaurant POS system for orders, inventory and sales reporting.', tr: 'Sipariş, stok ve satış raporlaması için bir restoran POS sistemi.' },
    purpose: { en: 'Bring daily restaurant operations together with ordering, inventory and sales tools.', tr: 'Sipariş, stok ve satış araçlarıyla günlük restoran operasyonlarını bir araya getirmek.' },
    features: { en: ['Order management', 'Inventory tracking', 'Sales reporting'], tr: ['Sipariş yönetimi', 'Stok takibi', 'Satış raporlama'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: ''
  }
];
