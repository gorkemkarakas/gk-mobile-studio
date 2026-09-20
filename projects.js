// Central portfolio data. Add verified technology names and URLs here when available.
// Screenshot entries: { src: 'assets/example.png', alt: { en: '...', tr: '...' } }.
window.PORTFOLIO_CATEGORIES = ['games', 'apps', 'web', 'iot', 'desktop', 'other'];

window.PORTFOLIO_PROJECTS = [
  {
    id: 'devicecloud', title: 'DeviceCloud', category: 'iot', featured: true, coverVariant: 'dashboard', coverImage: 'assets/projects/devicecloud-cover.webp', coverThumbnail: 'assets/projects/thumbs/devicecloud-cover.webp', coverFallback: 'assets/projects/fallbacks/devicecloud-cover.jpg',
    highlight: { en: 'Real-time device monitoring', tr: 'Gerçek zamanlı cihaz izleme' },
    status: { en: 'In Development', tr: 'Geliştiriliyor' },
    role: { en: 'Product design and full-stack system design', tr: 'Ürün tasarımı ve full-stack sistem tasarımı' },
    platform: { en: 'Web / IoT', tr: 'Web / IoT' },
    tagline: { en: 'Manage your IoT devices from one place.', tr: 'IoT cihazlarını tek panelden yönetin.' },
    productSummary: {
      en: 'A platform focused on managing IoT device status, telemetry, alarms and configuration data through a single modern dashboard.',
      tr: 'IoT cihaz durumları, telemetri, alarmlar ve yapılandırma bilgilerini tek bir modern dashboard üzerinden yönetmeye odaklanan platform.'
    },
    featureShowcase: {
      en: [
        { title: 'Device monitoring', description: 'Track connected devices and their current operational status.' },
        { title: 'Live telemetry', description: 'View live measurements through clear metrics and charts.' },
        { title: 'Alerts and events', description: 'Follow warnings, alarms and event history in one place.' },
        { title: 'Device list', description: 'Access registered devices from one structured inventory.' },
        { title: 'Remote configuration', description: 'Manage supported device settings from the dashboard.' },
        { title: 'Analytics', description: 'Turn device data into readable operational insights.' }
      ],
      tr: [
        { title: 'Cihaz izleme', description: 'Bağlı cihazları ve anlık çalışma durumlarını takip edin.' },
        { title: 'Canlı telemetri', description: 'Anlık ölçümleri anlaşılır metrikler ve grafiklerle görüntüleyin.' },
        { title: 'Alarmlar ve olaylar', description: 'Uyarıları, alarmları ve olay geçmişini tek yerde izleyin.' },
        { title: 'Cihaz listesi', description: 'Kayıtlı cihazlara düzenli bir envanter üzerinden erişin.' },
        { title: 'Uzaktan yapılandırma', description: 'Desteklenen cihaz ayarlarını panel üzerinden yönetin.' },
        { title: 'Analitik', description: 'Cihaz verilerini anlaşılır operasyon içgörülerine dönüştürün.' }
      ]
    },
    productExperience: {
      en: 'The main dashboard presents overall system health, while detailed device information, charts and event logs are managed in dedicated modules.',
      tr: 'Ana dashboard genel sistem durumunu gösterir. Detaylı cihaz bilgileri, grafikler ve olay kayıtları ayrı modüllerde yönetilir.'
    },
    productFlow: {
      en: [
        { title: 'Connect devices', description: 'Bring supported devices into a shared management environment.' },
        { title: 'Monitor the system', description: 'Follow status, telemetry and alerts from a clear dashboard.' },
        { title: 'Manage with context', description: 'Open device details and apply configuration where needed.' }
      ],
      tr: [
        { title: 'Cihazları bağla', description: 'Desteklenen cihazları ortak bir yönetim ortamına dahil edin.' },
        { title: 'Sistemi izle', description: 'Durum, telemetri ve alarmları sade bir panelden takip edin.' },
        { title: 'Bağlama göre yönet', description: 'Cihaz detaylarını açın ve gereken yapılandırmayı uygulayın.' }
      ]
    },
    valueProposition: {
      en: 'DeviceCloud makes complex data from many devices easier to understand and manage.',
      tr: 'Çok sayıda cihazdan gelen karmaşık veriyi daha sade ve anlaşılır hale getirir.'
    },
    challenge: {
      en: 'Status, telemetry, alarms and configuration data from multiple IoT devices needed to be monitored through one clear interface.',
      tr: 'Farklı IoT cihazlarından gelen durum, telemetri, alarm ve yapılandırma bilgilerinin tek bir panel üzerinden anlaşılır biçimde takip edilmesi gerekiyordu.'
    },
    approach: {
      en: 'The main dashboard was kept intentionally simple for high-level system status, while device details, charts, events and advanced information were separated into dedicated sections.',
      tr: 'Ana ekran yalnızca genel sistem durumunu gösterecek şekilde sade tutuldu. Cihaz detayları, grafikler, olaylar ve gelişmiş bilgiler ayrı sekmelere dağıtıldı.'
    },
    technicalChallenge: {
      en: 'Showing too much information on the main dashboard reduced the usefulness of secondary modules and created unnecessary information density.',
      tr: 'Ana dashboard üzerinde çok fazla bilgiyi aynı anda göstermek diğer modüllerin işlevini azaltıyor ve bilgi yoğunluğu oluşturuyordu.'
    },
    solution: {
      en: 'The information architecture was reorganized to separate high-level monitoring from detailed device management.',
      tr: 'Bilgi mimarisi yeniden düzenlenerek genel durum ile detaylı cihaz yönetimi birbirinden ayrıldı.'
    },
    outcome: {
      en: 'The result was a clearer and more scalable IoT management dashboard structure.',
      tr: 'Daha ölçeklenebilir ve anlaşılır bir IoT yönetim paneli yapısı elde edildi.'
    },
    description: { en: 'An IoT platform for managing devices and monitoring connected systems.', tr: 'Cihazları yönetmek ve bağlı sistemleri izlemek için bir IoT platformu.' },
    purpose: { en: 'Bring device monitoring, metrics and remote configuration into one clear interface.', tr: 'Cihaz izleme, metrikler ve uzaktan yapılandırmayı anlaşılır bir arayüzde bir araya getirmek.' },
    features: { en: ['Device management', 'System and metric monitoring', 'Remote configuration'], tr: ['Cihaz yönetimi', 'Sistem ve metrik takibi', 'Uzaktan yapılandırma'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: '', architecture: ''
  },
  {
    id: 'lmts-04', title: 'LMTS-04 — Lineer Motor Test ve Telemetri Sistemi', coverTitle: 'LMTS-04', category: 'iot', featured: false, coverVariant: 'telemetry', coverImage: 'assets/projects/lmts04-cover.webp', coverThumbnail: 'assets/projects/thumbs/lmts04-cover.webp', coverFallback: 'assets/projects/fallbacks/lmts04-cover.jpg',
    highlight: { en: '8-Channel Telemetry • 50 Hz', tr: '8 Kanal Telemetri • 50 Hz' },
    status: { en: 'Working Prototype', tr: 'Çalışan prototip' },
    role: { en: 'Desktop software and telemetry system development', tr: 'Masaüstü yazılım ve telemetri sistemi geliştirme' },
    platform: { en: 'Windows Desktop / Hardware Integration', tr: 'Windows Desktop / Hardware Integration' },
    tagline: { en: 'Real-time linear motor testing and telemetry.', tr: 'Gerçek zamanlı lineer motor test ve telemetri.' },
    productSummary: {
      en: 'A desktop testing system developed to monitor, analyze and record eight telemetry channels from linear motor tests in real time.',
      tr: 'Lineer motor testlerinden gelen sekiz farklı telemetri kanalını gerçek zamanlı izlemek, analiz etmek ve kayıt altına almak için geliştirilen masaüstü test sistemi.'
    },
    featureShowcase: {
      en: [
        { title: '8 telemetry channels', description: 'Monitor core motor and test measurements together.' },
        { title: 'Real-time charts', description: 'Follow changing measurements through live visualizations.' },
        { title: 'Serial / Modbus TCP', description: 'Connect to supported test hardware over two protocols.' },
        { title: 'WebSocket streaming', description: 'Stream hardware data continuously to the desktop interface.' },
        { title: 'Alarm management', description: 'Track limit conditions with alarm and hysteresis controls.' },
        { title: 'CSV reporting', description: 'Export recorded test data for further analysis.' },
        { title: 'Test profiles', description: 'Prepare repeatable configurations for different test scenarios.' },
        { title: 'Reference comparison', description: 'Compare current measurements with reference test data.' }
      ],
      tr: [
        { title: '8 telemetri kanalı', description: 'Temel motor ve test ölçümlerini birlikte izleyin.' },
        { title: 'Gerçek zamanlı grafikler', description: 'Değişen ölçümleri canlı görselleştirmeler üzerinden takip edin.' },
        { title: 'Seri / Modbus TCP', description: 'Desteklenen test donanımına iki protokol üzerinden bağlanın.' },
        { title: 'WebSocket veri akışı', description: 'Donanım verisini masaüstü arayüzüne kesintisiz aktarın.' },
        { title: 'Alarm yönetimi', description: 'Limit durumlarını alarm ve histerezis kontrolleriyle izleyin.' },
        { title: 'CSV raporlama', description: 'Kaydedilen test verilerini ileri analiz için dışa aktarın.' },
        { title: 'Test profilleri', description: 'Farklı test senaryoları için tekrarlanabilir ayarlar hazırlayın.' },
        { title: 'Referans karşılaştırması', description: 'Güncel ölçümleri referans test verileriyle karşılaştırın.' }
      ]
    },
    productExperience: {
      en: 'Measurements from the hardware pass through a Python hardware bridge and reach the Electron desktop interface over WebSocket, where they are presented in real-time charts.',
      tr: 'Donanımdan gelen ölçüm verileri Python hardware bridge üzerinden WebSocket ile Electron masaüstü arayüzüne aktarılır ve gerçek zamanlı grafiklerle gösterilir.'
    },
    productFlow: {
      en: [
        { title: 'Connect the hardware', description: 'Establish a serial or Modbus TCP connection with the test setup.' },
        { title: 'Run and monitor', description: 'Stream eight measurement channels into real-time charts.' },
        { title: 'Review the test', description: 'Compare results and export recorded data as a CSV report.' }
      ],
      tr: [
        { title: 'Donanımı bağla', description: 'Test düzeneğiyle seri port veya Modbus TCP bağlantısı kurun.' },
        { title: 'Testi çalıştır ve izle', description: 'Sekiz ölçüm kanalını gerçek zamanlı grafiklere aktarın.' },
        { title: 'Sonuçları incele', description: 'Verileri karşılaştırın ve kayıtları CSV raporu olarak dışa aktarın.' }
      ]
    },
    valueProposition: {
      en: 'LMTS-04 replaces scattered measurement tools with a centralized, recorded and comparable testing environment.',
      tr: 'Test sırasında dağınık ölçüm araçları yerine merkezi, kayıtlı ve karşılaştırılabilir bir test ortamı sağlar.'
    },
    challenge: {
      en: 'Multiple telemetry channels from linear motor tests needed to be monitored, analyzed and recorded in real time.',
      tr: 'Lineer motor testlerinden gelen birden fazla telemetri kanalının gerçek zamanlı olarak izlenmesi, analiz edilmesi ve kayıt altına alınması gerekiyordu.'
    },
    approach: {
      en: 'The Electron desktop interface was separated from a Python hardware bridge. Data from serial and Modbus TCP connections was structured to reach the interface through WebSocket streaming.',
      tr: 'Electron masaüstü arayüzü ile Python tabanlı donanım köprüsü birbirinden ayrıldı. Seri port ve Modbus TCP üzerinden gelen veriler WebSocket ile arayüze aktarılacak şekilde yapılandırıldı.'
    },
    technicalChallenge: {
      en: 'Invalid sensor packets, connection interruptions and high-frequency updates had to be handled reliably in a real-time environment.',
      tr: 'Gerçek zamanlı veride geçersiz sensör paketleri, bağlantı kesilmeleri ve yüksek güncelleme frekansı güvenilir biçimde yönetilmeliydi.'
    },
    solution: {
      en: 'Reliability mechanisms were added, including rejecting invalid packets from history, automatically stopping an active test after data interruption, and separating UI refresh frequency from measurement frequency.',
      tr: 'Geçersiz paketlerin geçmişe eklenmemesi, veri akışı kesildiğinde aktif testin otomatik durdurulması ve UI yenileme hızının ölçüm hızından ayrılması gibi güvenlik ve kararlılık mekanizmaları eklendi.'
    },
    outcome: {
      en: 'A desktop testing environment was created that can monitor eight telemetry channels in real time, visualize data, manage alarms and generate CSV reports.',
      tr: 'Sekiz telemetri kanalını gerçek zamanlı izleyebilen, grafikleyebilen, alarm yönetebilen ve CSV raporu üretebilen masaüstü test altyapısı oluşturuldu.'
    },
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
    coverTitle: 'EVYS', category: 'web', featured: true, coverVariant: 'dashboard', coverImage: 'assets/projects/evys-cover.webp', coverThumbnail: 'assets/projects/thumbs/evys-cover.webp', coverFallback: 'assets/projects/fallbacks/evys-cover.jpg',
    highlight: {
      en: 'Technical Inspection • Judge Management • Competition Operations',
      tr: 'Teknik Kontrol • Hakem Yönetimi • Yarış Operasyonu'
    },
    status: { en: 'Active Development', tr: 'Aktif geliştirme' },
    role: { en: 'System design and software development', tr: 'Sistem tasarımı ve yazılım geliştirme' },
    platform: { en: 'Web Application', tr: 'Web Application' },
    tagline: { en: 'Manage competition operations from one platform.', tr: 'Yarış operasyonlarını tek platformda yönetin.' },
    productSummary: {
      en: 'EVYS is a web-based competition management system that brings technical inspections, team management, judge evaluations, announcements and race results into one centralized platform.',
      tr: 'EVYS; elektrikli araç yarışlarında teknik kontrol, takım yönetimi, hakem değerlendirmeleri, duyurular ve yarış sonuçlarını merkezi bir web platformunda birleştiren yarış yönetim sistemidir.'
    },
    featureShowcase: {
      en: [
        { title: 'Role-based dashboards', description: 'Give each user access to workflows that match their responsibilities.' },
        { title: 'Technical inspection', description: 'Evaluate safety and compliance criteria in a structured flow.' },
        { title: 'Judge evaluations', description: 'Support controlled assessment and eligibility decisions.' },
        { title: 'Team management', description: 'Keep team information and competition status organized.' },
        { title: 'Announcements', description: 'Share operational updates from one central channel.' },
        { title: 'Race results', description: 'Manage times, special statuses and published rankings.' }
      ],
      tr: [
        { title: 'Rol tabanlı paneller', description: 'Her kullanıcının sorumluluğuna uygun süreçlere erişmesini sağlayın.' },
        { title: 'Teknik kontrol', description: 'Güvenlik ve uygunluk kriterlerini düzenli bir akışta değerlendirin.' },
        { title: 'Hakem değerlendirmeleri', description: 'Kontrollü değerlendirme ve yarışabilirlik kararlarını destekleyin.' },
        { title: 'Takım yönetimi', description: 'Takım bilgilerini ve yarış durumlarını düzenli tutun.' },
        { title: 'Duyurular', description: 'Operasyonel güncellemeleri merkezi bir kanaldan paylaşın.' },
        { title: 'Yarış sonuçları', description: 'Süreleri, özel durumları ve yayınlanan sıralamaları yönetin.' }
      ]
    },
    productExperience: {
      en: 'Admin, Judge/Technical Committee, Team and Technical Staff users access different modules based on their responsibilities. Technical inspections, eligibility decisions and race results are managed through the same system.',
      tr: 'Admin, Hakem/DDK, Takım ve Teknik Ekip kullanıcıları kendi sorumluluk alanlarına göre farklı modüllere erişir. Teknik kontrol, yarışabilirlik değerlendirmesi ve yarış sonuçları aynı sistem üzerinden yönetilir.'
    },
    productFlow: {
      en: [
        { title: 'Manage the team', description: 'Organize team information and role-specific competition workflows.' },
        { title: 'Complete inspection', description: 'Evaluate technical criteria and record eligibility decisions.' },
        { title: 'Publish results', description: 'Enter race times, handle special statuses and share rankings.' }
      ],
      tr: [
        { title: 'Takımı yönet', description: 'Takım bilgilerini ve role özel yarış süreçlerini düzenleyin.' },
        { title: 'Teknik kontrolü tamamla', description: 'Teknik kriterleri değerlendirin ve yarışabilirlik kararını kaydedin.' },
        { title: 'Yarış sonucunu yayınla', description: 'Süreleri girin, özel durumları yönetin ve sıralamayı paylaşın.' }
      ]
    },
    valueProposition: {
      en: 'EVYS brings scattered competition operations into one traceable structure and enables technical workflows to be managed digitally.',
      tr: 'Dağınık yarış operasyonlarını tek bir takip edilebilir yapı altında toplar ve teknik süreçlerin dijital olarak yönetilmesini sağlar.'
    },
    challenge: {
      en: 'Technical inspections, team management, judge evaluations, announcements and race results can operate as separate workflows in electric vehicle competitions. The goal was to bring these processes into one centralized and traceable system.',
      tr: 'Elektrikli araç yarışlarında teknik kontrol, takım yönetimi, hakem değerlendirmeleri, duyurular ve yarış sonuçları farklı operasyonlar olarak yürütülebiliyor. Amaç bu süreçleri merkezi ve takip edilebilir bir sistem altında birleştirmekti.'
    },
    approach: {
      en: 'A modular web application was structured around Admin, Judge/Technical Committee, Team and Technical Staff roles, with each role accessing workflows relevant to its responsibilities.',
      tr: 'Admin, Hakem/DDK, Takım ve Teknik Ekip rollerine ayrılmış modüler bir web uygulaması tasarlandı. Kullanıcıların yalnızca kendi sorumluluk alanlarıyla ilgili süreçlere erişmesi hedeflendi.'
    },
    technicalChallenge: {
      en: 'Technical inspection and race operations required multiple user roles to work with shared team data while keeping responsibilities and workflows controlled.',
      tr: 'Teknik kontrol ve yarış operasyonlarında farklı kullanıcı rollerinin aynı takım verileri üzerinde kontrollü şekilde işlem yapması ve sonuçların merkezi olarak yönetilmesi gerekiyordu.'
    },
    solution: {
      en: 'Role-based modules, technical inspection criteria, eligibility decisions and centralized race results were introduced. Manual timing and special competition statuses were also supported.',
      tr: 'Rol tabanlı modüller, teknik kontrol kriterleri, Yarışabilir/Yarışamaz değerlendirmesi ve merkezi yarış sonuç yapısı oluşturuldu. Manuel süre girişi ve özel yarış durumları desteklendi.'
    },
    outcome: {
      en: 'The project resulted in an extensible management architecture capable of bringing major technical and operational competition workflows into a single platform.',
      tr: 'Yarış organizasyonundaki temel teknik ve operasyonel süreçleri tek platform altında toplayabilecek genişletilebilir bir yönetim mimarisi ortaya çıktı.'
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
    id: 'aquaquest', title: 'AquaQuest', category: 'apps', featured: true, coverVariant: 'aqua', coverImage: 'assets/projects/aquaquest-cover.webp', coverThumbnail: 'assets/projects/thumbs/aquaquest-cover.webp', coverFallback: 'assets/projects/fallbacks/aquaquest-cover.jpg',
    highlight: { en: 'Gamified Hydration Tracker', tr: 'Oyunlaştırılmış Hidrasyon Takibi' },
    status: { en: 'MVP / Preparing for Google Play', tr: 'MVP / Google Play hazırlığı' },
    role: { en: 'Android development, UI/UX and application architecture', tr: 'Android geliştirme, UI/UX ve uygulama mimarisi' },
    platform: { en: 'Native Android / Java', tr: 'Native Android / Java' },
    tagline: { en: 'Turn hydration into a game.', tr: 'Su takibini bir oyuna dönüştür.' },
    productSummary: {
      en: 'AquaQuest is a gamified native Android hydration app that combines fluid tracking with XP, levels, streaks, daily quests and achievements.',
      tr: 'AquaQuest; su, kahve, çay ve diğer içecekleri takip etmeyi XP, seviye, seri, günlük görevler ve başarımlarla birleştiren oyunlaştırılmış native Android hidrasyon uygulamasıdır.'
    },
    featureShowcase: {
      en: [
        { title: 'Smart hydration tracking', description: 'Log different beverages with hydration-aware contribution ratios.' },
        { title: 'Animated glass water tank', description: 'See daily progress fill a responsive visual water tank.' },
        { title: 'XP and level progression', description: 'Turn consistent hydration actions into visible progression.' },
        { title: 'Daily quests', description: 'Follow focused goals that refresh the daily routine.' },
        { title: 'Streaks and achievements', description: 'Maintain momentum and unlock milestones over time.' },
        { title: 'Reminders and notifications', description: 'Use scheduled prompts to support a consistent habit.' }
      ],
      tr: [
        { title: 'Akıllı hidrasyon takibi', description: 'Farklı içecekleri hidrasyon katkı oranlarına göre kaydedin.' },
        { title: 'Animasyonlu cam su tankı', description: 'Günlük ilerlemenin görsel su tankını doldurmasını izleyin.' },
        { title: 'XP ve seviye sistemi', description: 'Düzenli hidrasyon adımlarını görünür ilerlemeye dönüştürün.' },
        { title: 'Günlük görevler', description: 'Günlük rutini canlı tutan odaklı hedefleri tamamlayın.' },
        { title: 'Seri ve başarımlar', description: 'Devamlılığı koruyun ve zaman içinde yeni kilometre taşları açın.' },
        { title: 'Hatırlatıcılar ve bildirimler', description: 'Planlı bildirimlerle düzenli alışkanlığı destekleyin.' }
      ]
    },
    productExperience: {
      en: 'The user selects a beverage, logs the amount and the daily hydration goal updates based on the beverage type. The animated water tank visualizes progress while the user earns XP, maintains streaks and unlocks achievements.',
      tr: 'Kullanıcı içeceğini seçer, miktarı kaydeder ve içeceğin türüne göre günlük hidrasyon hedefi güncellenir. Su tankı ilerlemeyi görsel olarak gösterirken kullanıcı XP kazanır, serisini korur ve başarımlar açar.'
    },
    productFlow: {
      en: [
        { title: 'Log your beverage', description: 'Choose a beverage and record the amount you consumed.' },
        { title: 'Fill your goal', description: 'Watch the animated water tank reflect daily hydration progress.' },
        { title: 'Earn rewards', description: 'Gain XP, maintain streaks and unlock achievements.' }
      ],
      tr: [
        { title: 'İçeceğini kaydet', description: 'İçecek türünü seçin ve tükettiğiniz miktarı ekleyin.' },
        { title: 'Hedefini doldur', description: 'Animasyonlu su tankında günlük hidrasyon ilerlemenizi görün.' },
        { title: 'XP ve başarımlar kazan', description: 'XP kazanın, serinizi koruyun ve başarımların kilidini açın.' }
      ]
    },
    valueProposition: {
      en: 'AquaQuest is designed not just to log water intake, but to make daily hydration more motivating and sustainable.',
      tr: 'AquaQuest’in amacı yalnızca su tüketimini kaydetmek değil, günlük hidrasyon alışkanlığını daha motive edici ve sürdürülebilir hale getirmektir.'
    },
    challenge: {
      en: 'Traditional hydration trackers can struggle to keep users engaged over time. The goal was to move beyond basic intake logging and create a more engaging experience that encourages consistent hydration.',
      tr: 'Klasik su takip uygulamalarının günlük kullanım motivasyonunu uzun süre korumakta zorlanması. Amaç yalnızca tüketimi kaydetmek yerine kullanıcıyı düzenli hidrasyona teşvik eden daha etkileşimli bir deneyim oluşturmaktı.'
    },
    approach: {
      en: 'Daily fluid tracking was gamified through XP, levels, streaks, quests and achievements. Progress is visualized through an animated glass water tank on the home screen.',
      tr: 'Günlük sıvı takibi XP, seviye, seri, görev ve başarımlarla oyunlaştırıldı. Kullanıcının ilerlemesi ana ekrandaki animasyonlu cam su tankı üzerinden görsel olarak gösterildi.'
    },
    technicalChallenge: {
      en: 'During early development, MainActivity grew to roughly 4,400 lines and significant parts of the screen were being recreated even for small user actions.',
      tr: 'İlk geliştirme sürecinde MainActivity yaklaşık 4.400 satıra ulaşmış ve küçük kullanıcı işlemlerinde bile ekranın önemli bölümleri yeniden oluşturulmaya başlamıştı.'
    },
    solution: {
      en: 'GlassWaterView was extracted into a dedicated custom view, while hydration, XP, level, streak and SharedPreferences logic was moved into HydrationDataManager. UI updates were changed to refresh only affected components instead of rebuilding the entire screen.',
      tr: 'GlassWaterView ayrı bir custom view haline getirildi. Hidrasyon, XP, seviye, streak ve SharedPreferences yönetimi HydrationDataManager sınıfına taşındı. Arayüz, tüm ekranı yeniden oluşturmak yerine yalnızca değişen parçaları güncelleyecek şekilde düzenlendi.'
    },
    outcome: {
      en: 'The application reached a stable MVP stage suitable for real-device daily use testing and moved closer to Google Play preparation.',
      tr: 'Uygulama gerçek Android cihazda günlük kullanım senaryosunda test edilebilir, stabil bir MVP seviyesine ulaştı ve Google Play hazırlığına yaklaştı.'
    },
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
    id: 'tripledger', title: 'TripLedger', category: 'apps', featured: true, coverVariant: 'finance', coverImage: 'assets/projects/tripledger-cover.webp', coverThumbnail: 'assets/projects/thumbs/tripledger-cover.webp', coverFallback: 'assets/projects/fallbacks/tripledger-cover.jpg',
    highlight: { en: 'Travel Expense Tracking', tr: 'Seyahat Harcama Takibi' },
    status: { en: 'Android Testing / Release Preparation', tr: 'Android test / yayın hazırlığı' },
    role: { en: 'Mobile application development and product design', tr: 'Mobil uygulama geliştirme ve ürün tasarımı' },
    platform: { en: 'Android / Capacitor', tr: 'Android / Capacitor' },
    tagline: { en: 'Make shared travel expenses simpler.', tr: 'Seyahat harcamalarını paylaşmayı kolaylaştır.' },
    productSummary: {
      en: 'TripLedger is an Android application for tracking trips, expenses, participant shares and subscriptions in one mobile experience.',
      tr: 'TripLedger; geziler, harcamalar, kişi payları ve abonelikleri tek mobil uygulamada takip etmeyi sağlayan Android uygulamasıdır.'
    },
    featureShowcase: {
      en: [
        { title: 'Trip management', description: 'Keep each journey and its financial activity organized.' },
        { title: 'Expense tracking', description: 'Record travel spending with clear amounts and context.' },
        { title: 'Shared costs', description: 'Distribute common expenses across the group.' },
        { title: 'Participant shares', description: 'See how much of each expense belongs to each traveler.' },
        { title: 'Subscription tracking', description: 'Keep recurring costs visible alongside trip spending.' },
        { title: 'Smart settlement', description: 'Make final balances easier to understand at the end of a trip.' }
      ],
      tr: [
        { title: 'Gezi yönetimi', description: 'Her seyahati ve finansal hareketlerini düzenli tutun.' },
        { title: 'Harcama takibi', description: 'Seyahat giderlerini tutar ve açıklamalarıyla kaydedin.' },
        { title: 'Ortak giderler', description: 'Paylaşılan harcamaları grup üyelerine dağıtın.' },
        { title: 'Katılımcı payları', description: 'Her harcamanın hangi gezgine ne kadar yansıdığını görün.' },
        { title: 'Abonelik takibi', description: 'Tekrarlayan giderleri seyahat harcamalarıyla birlikte izleyin.' },
        { title: 'Akıllı hesaplaşma', description: 'Gezi sonundaki bakiyeleri daha kolay anlaşılır hale getirin.' }
      ]
    },
    productExperience: {
      en: 'The user creates a trip, adds expenses and distributes costs among participants. The goal is to make it easy to understand who owes whom and how much at the end of the journey.',
      tr: 'Kullanıcı yeni bir gezi oluşturur, harcamaları ekler ve katılımcılar arasında gider paylaşımı yapar. Amaç gezi sonunda kimin kime ne kadar ödeme yapacağını kolayca takip etmektir.'
    },
    productFlow: {
      en: [
        { title: 'Create a trip', description: 'Start a journey and add the people traveling together.' },
        { title: 'Add shared expenses', description: 'Record spending and assign the relevant participant shares.' },
        { title: 'Review balances', description: 'See the final distribution and understand who needs to pay whom.' }
      ],
      tr: [
        { title: 'Gezi oluştur', description: 'Yeni bir seyahat başlatın ve birlikte gezen kişileri ekleyin.' },
        { title: 'Ortak giderleri ekle', description: 'Harcamaları kaydedin ve ilgili katılımcı paylarını belirleyin.' },
        { title: 'Bakiyeleri incele', description: 'Son dağılımı görün ve kimin kime ödeme yapacağını takip edin.' }
      ]
    },
    valueProposition: {
      en: 'TripLedger brings calculations spread across spreadsheets, notes and chats into one place for group travel.',
      tr: 'Grup seyahatlerinde Excel, not uygulaması veya mesajlaşma üzerinden yapılan karmaşık hesapları tek yerde toplar.'
    },
    challenge: {
      en: 'The project aimed to make personal expenses, shared travel costs, participant shares and subscriptions easy to manage from one mobile application.',
      tr: 'Seyahatlerde kişisel ve ortak harcamaların, kişi paylarının ve aboneliklerin tek bir mobil uygulamada kolayca takip edilmesi hedeflendi.'
    },
    approach: {
      en: 'Trips, expense entries and participant shares were combined into a simple mobile workflow. The application was designed to operate locally without requiring a backend.',
      tr: 'Geziler, harcama kalemleri ve kişi payları basit bir mobil akış altında birleştirildi. Uygulama backend gerektirmeden localStorage tabanlı çalışacak şekilde tasarlandı.'
    },
    technicalChallenge: {
      en: 'Permission checks for Local Notifications caused startup crashes on some Android devices.',
      tr: 'Android tarafındaki Local Notifications izin kontrolü bazı cihazlarda uygulamanın açılışında crash oluşturuyordu.'
    },
    solution: {
      en: 'The notification permission check was moved away from application startup toward the relevant Settings flow. ErrorBoundary handling and required Android permissions were also added.',
      tr: 'Notification izin kontrolünün uygulama açılışından çıkarılıp ihtiyaç duyulan Ayarlar akışına taşınması planlandı. ErrorBoundary ve gerekli Android izinleri de uygulamaya eklendi.'
    },
    outcome: {
      en: 'The application progressed through Google Play Console setup, reached internal testing and entered the final bug-fixing phase before production release.',
      tr: 'Uygulama Google Play Console süreçlerine kadar ilerledi, dahili test sürümü oluşturuldu ve üretim yayını öncesindeki hata düzeltme aşamasına ulaştı.'
    },
    description: { en: 'Keep travel expenses, budgets and shared costs in one place.', tr: 'Seyahat harcamalarını, bütçeleri ve ortak giderleri tek yerde takip edin.' },
    purpose: { en: 'Keep personal and shared expenses organized, making travel budgets easier to follow.', tr: 'Kişisel ve ortak harcamaları düzenleyerek seyahat bütçesini takip etmeyi kolaylaştırmak.' },
    features: { en: ['Expense tracking and travel budgets', 'Shared expense records', 'Subscription management'], tr: ['Harcama takibi ve seyahat bütçeleri', 'Ortak gider kayıtları', 'Abonelik yönetimi'] },
    technologies: [], image: 'assets/tripledger-phone-cutout.webp', imageFallback: 'assets/tripledger-phone-cutout.png',
    screenshots: [{ src: 'assets/tripledger-phone-cutout.webp', fallback: 'assets/tripledger-phone-cutout.png', width: 960, height: 1442, alt: { en: 'TripLedger application preview', tr: 'TripLedger uygulama önizlemesi' } }],
    github: '', demo: '', googlePlay: '', privacy: 'privacy/tripledger.html', terms: 'terms/tripledger.html'
  },
  {
    id: 'tinynotes', title: 'TinyNotes', category: 'apps', featured: true, coverVariant: 'notes', coverImage: 'assets/projects/tinynotes-cover.webp', coverThumbnail: 'assets/projects/thumbs/tinynotes-cover.webp', coverFallback: 'assets/projects/fallbacks/tinynotes-cover.jpg',
    highlight: { en: 'Notes • Tasks • Reminders', tr: 'Notlar • Görevler • Hatırlatıcılar' },
    description: { en: 'A simple place to capture notes and organize everyday ideas.', tr: 'Not almak ve günlük fikirleri düzenlemek için sade bir uygulama.' },
    purpose: { en: 'Offer a focused writing space that makes creating and finding notes straightforward.', tr: 'Not oluşturmayı ve bulmayı kolaylaştıran, yazmaya odaklı bir alan sunmak.' },
    features: { en: ['Create and view notes', 'Organize written content', 'Minimal writing experience'], tr: ['Not oluşturma ve görüntüleme', 'Yazılı içerikleri düzenleme', 'Sade yazma deneyimi'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: '', privacy: 'privacy/tinynotes.html', terms: 'terms/tinynotes.html'
  },
  {
    id: 'arcane-survive', title: 'Arcane Survive', category: 'games', featured: false, coverVariant: 'arcane', coverImage: 'assets/projects/arcane-survive-cover.webp', coverThumbnail: 'assets/projects/thumbs/arcane-survive-cover.webp', coverFallback: 'assets/projects/fallbacks/arcane-survive-cover.jpg',
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
    id: 'dilek-bahcesi', title: 'Dilek Bahçesi', category: 'games', featured: false, coverVariant: 'garden', coverImage: 'assets/projects/dilek-bahcesi-cover.webp', coverThumbnail: 'assets/projects/thumbs/dilek-bahcesi-cover.webp', coverFallback: 'assets/projects/fallbacks/dilek-bahcesi-cover.jpg',
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
    id: 'kingdoms-choice', title: "Kingdom's Choice", category: 'games', featured: false, coverVariant: 'medieval', coverImage: 'assets/projects/kingdoms-choice-cover.webp', coverThumbnail: 'assets/projects/thumbs/kingdoms-choice-cover.webp', coverFallback: 'assets/projects/fallbacks/kingdoms-choice-cover.jpg',
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
    id: 'mining-tycoon', title: 'Mining Tycoon', category: 'games', featured: false, coverVariant: 'mining', coverImage: 'assets/projects/mining-tycoon-cover.webp', coverThumbnail: 'assets/projects/thumbs/mining-tycoon-cover.webp', coverFallback: 'assets/projects/fallbacks/mining-tycoon-cover.jpg',
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
    id: 'pulsechat', title: 'PulseChat', category: 'web', featured: true, coverVariant: 'chat', coverImage: 'assets/projects/pulsechat-cover.webp', coverThumbnail: 'assets/projects/thumbs/pulsechat-cover.webp', coverFallback: 'assets/projects/fallbacks/pulsechat-cover.jpg',
    highlight: { en: 'Real-time messaging', tr: 'Gerçek zamanlı mesajlaşma' },
    description: { en: 'A real-time chat application for conversations on the web.', tr: 'Web üzerinde anlık iletişim için gerçek zamanlı bir sohbet uygulaması.' },
    purpose: { en: 'Make real-time conversations accessible through a simple web experience.', tr: 'Gerçek zamanlı sohbeti sade bir web deneyimiyle erişilebilir kılmak.' },
    features: { en: ['Real-time messaging', 'Web-based conversations'], tr: ['Gerçek zamanlı mesajlaşma', 'Web üzerinden sohbet'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: ''
  },
  {
    id: 'restaurant-pos', title: 'Restaurant POS', category: 'web', featured: false, coverVariant: 'pos', coverImage: 'assets/projects/restaurant-pos-cover.webp', coverThumbnail: 'assets/projects/thumbs/restaurant-pos-cover.webp', coverFallback: 'assets/projects/fallbacks/restaurant-pos-cover.jpg',
    highlight: { en: 'Orders • Tables • Payments', tr: 'Sipariş • Masa • Ödeme' },
    description: { en: 'A restaurant POS system for orders, inventory and sales reporting.', tr: 'Sipariş, stok ve satış raporlaması için bir restoran POS sistemi.' },
    purpose: { en: 'Bring daily restaurant operations together with ordering, inventory and sales tools.', tr: 'Sipariş, stok ve satış araçlarıyla günlük restoran operasyonlarını bir araya getirmek.' },
    features: { en: ['Order management', 'Inventory tracking', 'Sales reporting'], tr: ['Sipariş yönetimi', 'Stok takibi', 'Satış raporlama'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: ''
  }
];
