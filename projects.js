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
    status: { en: 'Available on Google Play', tr: "Google Play'de Yayında" },
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
        { title: 'Subscription tracking', description: 'Keep recurring costs visible alongside trip spending.' }
      ],
      tr: [
        { title: 'Gezi yönetimi', description: 'Her seyahati ve finansal hareketlerini düzenli tutun.' },
        { title: 'Harcama takibi', description: 'Seyahat giderlerini tutar ve açıklamalarıyla kaydedin.' },
        { title: 'Ortak giderler', description: 'Paylaşılan harcamaları grup üyelerine dağıtın.' },
        { title: 'Katılımcı payları', description: 'Her harcamanın hangi gezgine ne kadar yansıdığını görün.' },
        { title: 'Abonelik takibi', description: 'Tekrarlayan giderleri seyahat harcamalarıyla birlikte izleyin.' }
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
      en: 'Trips, expense entries, participants and shares are combined in a React interface built with Vite and Tailwind CSS, packaged for Android with Capacitor.',
      tr: 'Geziler, harcama kalemleri, katılımcılar ve kişi payları; Vite ve Tailwind CSS ile geliştirilen React arayüzünde bir araya getirilir ve Capacitor ile Android uygulaması olarak paketlenir.'
    },
    technicalChallenge: {
      en: 'Trip expenses, participants, individual shares and recurring subscriptions need to remain understandable within one mobile workflow.',
      tr: 'Gezi harcamalarının, katılımcıların, kişi paylarının ve tekrarlayan aboneliklerin tek bir mobil akışta anlaşılır tutulması gerekir.'
    },
    solution: {
      en: 'Trip management, expense tracking, participant shares and subscription tracking are brought together in an Android application.',
      tr: 'Gezi yönetimi, harcama takibi, katılımcı payları ve abonelik takibi bir Android uygulamasında bir araya getirilir.'
    },
    outcome: {
      en: 'TripLedger is available on Google Play as an Android application for managing trips, expenses, participant shares and subscriptions.',
      tr: 'TripLedger; gezileri, harcamaları, katılımcı paylarını ve abonelikleri yönetmek için Google Play\'de yayınlanan bir Android uygulamasıdır.'
    },
    description: { en: 'Track trips, expenses, participant shares and subscriptions in one Android app.', tr: 'Gezileri, harcamaları, katılımcı paylarını ve abonelikleri tek Android uygulamasında takip edin.' },
    purpose: { en: 'Keep personal and shared expenses organized, making travel budgets easier to follow.', tr: 'Kişisel ve ortak harcamaları düzenleyerek seyahat bütçesini takip etmeyi kolaylaştırmak.' },
    features: { en: ['Expense tracking and travel budgets', 'Shared expense records', 'Subscription management'], tr: ['Harcama takibi ve seyahat bütçeleri', 'Ortak gider kayıtları', 'Abonelik yönetimi'] },
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Capacitor'], image: 'assets/tripledger-phone-cutout.webp', imageFallback: 'assets/tripledger-phone-cutout.png',
    screenshots: [{ src: 'assets/tripledger-phone-cutout.webp', fallback: 'assets/tripledger-phone-cutout.png', width: 960, height: 1442, alt: { en: 'TripLedger application preview', tr: 'TripLedger uygulama önizlemesi' } }],
    github: '', demo: '', googlePlay: 'https://play.google.com/store/apps/details?id=com.gorkemkarakas.tripledger',
    googlePlayLabel: { en: 'View on Google Play', tr: "Google Play'de Görüntüle" },
    privacy: 'privacy/tripledger.html', terms: 'terms/tripledger.html'
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
    "id": "dilek-bahcesi",
    "title": "Dilek Bahçesi",
    "category": "games",
    "featured": false,
    "coverVariant": "garden",
    "coverImage": "assets/projects/dilek-bahcesi-cover.webp",
    "coverThumbnail": "assets/projects/thumbs/dilek-bahcesi-cover.webp",
    "coverFallback": "assets/projects/fallbacks/dilek-bahcesi-cover.jpg",
    "coverAlt": {
      "tr": "Dilek Bahçesi temsili tanıtım illüstrasyonu: bahçede jeton atışı ve koleksiyon eşyaları.",
      "en": "Dilek Bahçesi promotional illustration: a coin toss and collectible items in a garden."
    },
    "highlight": {
      "en": "Coin Toss • Collection • Discovery",
      "tr": "Jeton Atma • Koleksiyon • Keşif"
    },
    "tagline": {
      "tr": "Bir jeton at, yeni bir hazine keşfet.",
      "en": "Toss a coin. Discover a new treasure."
    },
    "status": {
      "tr": "Oynanabilir Prototip / Geliştiriliyor",
      "en": "Playable Prototype / In Development"
    },
    "platform": {
      "tr": "Web — Masaüstü ve Mobil Tarayıcı",
      "en": "Web — Desktop and Mobile Browser"
    },
    "description": {
      "tr": "Dilek kuyusuna jeton atarak 30 farklı eşyayı keşfettiğin, koleksiyonunu tamamlamaya çalıştığın ve çantanı yönettiğin tek oyunculu casual web oyunu prototipi.",
      "en": "A single-player casual web game prototype where you toss coins into a wishing well, discover 30 different items, work toward completing your collection and manage your inventory."
    },
    "productSummary": {
      "tr": "Eski Taş Kuyusu’nda jetonunu seç, atış yap ve dört nadirlik seviyesindeki hazineleri keşfet. Keşiflerin albümünde kalırken çantandaki eşyaları satabilir, oyun içi altınla yeni jetonlar edinebilir ve şans ile satış değeri geliştirmelerine ilerleyebilirsin. Mevcut prototipte tek oynanabilir alan Eski Taş Kuyusu’dur; ilerleme aynı tarayıcıda yerel olarak saklanır.",
      "en": "Choose a coin at the Old Stone Well, make a toss and discover treasures across four rarity tiers. Discoveries stay in your album while inventory items can be sold for in-game gold. Acquire more coin types and work toward luck and sale-value upgrades. The Old Stone Well is the only playable area in the current prototype; progress is saved locally in the same browser."
    },
    "featureShowcase": {
      "tr": [
        {
          "title": "30 eşya, 4 nadirlik seviyesi",
          "description": "Sıradan, Nadir, Epik ve Efsanevi eşyaları keşfet, albümündeki eksikleri tamamla. Eşyaları satsan da keşifleri albümünde kalır."
        },
        {
          "title": "9 farklı jeton",
          "description": "Başlangıç jetonuyla keşfe çık, oyun içi altın ve açılma koşullarıyla yeni jetonlar edin. Bazı jetonların keşfe veya ödüllere katkı sağlayan özel etkilerini deneyimle."
        },
        {
          "title": "Envanter ve favoriler",
          "description": "Çantandaki miktarları ve eşya detaylarını incele. Favorilerini işaretle, satmak istemediğin eşyaları satış kilidiyle koru."
        },
        {
          "title": "Koleksiyon filtreleri",
          "description": "Albümünde ve çantanda arama yap; nadirlik ve durum filtreleriyle aradığını bul, farklı sıralamalarla koleksiyonunu düzenle."
        },
        {
          "title": "Sat ve geliştir",
          "description": "Satış önizlemesiyle miktarı ve kazancı kontrol et; tekli, miktarlı veya toplu satış yap. Kazandığın altını jetonlara, şans ve satış değeri geliştirmelerine ayır."
        },
        {
          "title": "Yerel kayıtla devam et",
          "description": "Keşiflerini, envanterini ve ilerlemeni aynı tarayıcıda otomatik kaydet. Ses ve titreşim tercihlerini cihazının desteğine göre ayarla."
        }
      ],
      "en": [
        {
          "title": "30 items, 4 rarity tiers",
          "description": "Discover Common, Rare, Epic and Legendary items and fill the gaps in your album. Discoveries stay recorded even after you sell an item."
        },
        {
          "title": "9 different coins",
          "description": "Begin with the starter coin and acquire more types through in-game gold and unlock requirements. Explore the special effects of selected coins that support discovery or rewards."
        },
        {
          "title": "Inventory and favorites",
          "description": "Review quantities and item details in your inventory. Mark favorites and use sale locks to protect items you want to keep."
        },
        {
          "title": "Collection filters",
          "description": "Search your album and inventory, find items with rarity and status filters, and organize your collection with different sorting options."
        },
        {
          "title": "Sell and progress",
          "description": "Preview quantities and earnings before individual, quantity-based or bulk sales. Spend earned gold on coin types, luck upgrades and sale-value upgrades."
        },
        {
          "title": "Continue with local saves",
          "description": "Automatically save discoveries, inventory and progress in the same browser. Adjust sound and vibration preferences where supported by your device."
        }
      ]
    },
    "productExperience": {
      "tr": "Kuyu, Hazineler, Market ve Geliştirmeler ekranları arasında geçiş yap. Her atışla yeni bir keşfin peşine düş; albümünü tamamlarken çantanı ve satış kararlarını yönet. Eski Taş Kuyusu’ndaki keşif yüzdesini, ustalık aşamalarını ve özel kalıntılarını takip et.",
      "en": "Move between the Well, Treasures, Market and Upgrades screens. Pursue a new discovery with each toss, working toward a complete album while managing your inventory and sales. Track discovery progress, mastery milestones and special relics at the Old Stone Well."
    },
    "productFlow": {
      "tr": [
        {
          "title": "Jetonunu seç",
          "description": "Jetonunu seç ve Eski Taş Kuyusu’na atış yap."
        },
        {
          "title": "Hazineni keşfet",
          "description": "Yeni eşyayı incele, albümündeki keşifleri takip et ve çantanı düzenle."
        },
        {
          "title": "Koleksiyonunu büyüt",
          "description": "Satışlarını planla; oyun içi altınla yeni jetonlar ve geliştirmeler edinerek keşfe devam et."
        }
      ],
      "en": [
        {
          "title": "Choose your coin",
          "description": "Select a coin and toss it into the Old Stone Well."
        },
        {
          "title": "Discover a treasure",
          "description": "Review your new item, track discoveries in your album and organize your inventory."
        },
        {
          "title": "Grow your collection",
          "description": "Plan sales and spend in-game gold on more coin types and upgrades to keep exploring."
        }
      ]
    },
    "valueProposition": {
      "tr": "Tek dokunuşla başlayan keşif döngüsünü, keşifleri saklayan bir albüm ve kontrollü envanter kararlarıyla birleştiren sakin bir koleksiyon deneyimi.",
      "en": "A relaxed collecting experience that combines a simple tap-to-discover loop with an album that remembers discoveries and deliberate inventory choices."
    },
    "technicalDetails": {
      "tr": [
        "HTML, CSS ve JavaScript ile geliştirilen web prototipi; Canvas 2D efektleri ve hareketli kuyu medyasıyla desteklenir.",
        "İlerleme ve tercihler aynı tarayıcıda yerel olarak saklanır.",
        "Mevcut prototipte yalnızca Eski Taş Kuyusu oynanabilir. Mercan Bahçesi henüz oynanabilir değildir.",
        "Mevcut kapak temsili tanıtım illüstrasyonudur."
      ],
      "en": [
        "A web prototype built with HTML, CSS and JavaScript, supported by Canvas 2D effects and animated well media.",
        "Progress and preferences are stored locally in the same browser.",
        "Only the Old Stone Well is playable in the current prototype. Coral Garden is not yet playable.",
        "The current cover is a promotional illustration."
      ]
    },
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Canvas 2D",
      "LocalStorage"
    ],
    "gameType": {
      "en": "Casual / Collection / Discovery",
      "tr": "Casual / Koleksiyon / Keşif"
    },
    "isPlayable": false,
    "playUrl": "",
    "screenshots": [],
    "github": "",
    "demo": "",
    "googlePlay": ""
  },
  {
    "id": "kingdoms-choice",
    "title": "Tahtın Gölgesi",
    "category": "games",
    "featured": false,
    "coverImage": "assets/projects/tahtin-golgesi/sunlit-forest-path.webp",
    "coverAlt": {
      "tr": "Tahtın Gölgesi oyun içi orman sahnesi illüstrasyonu: ağaçların arasından geçen güneşli patika.",
      "en": "Forest scene illustration used in Tahtın Gölgesi: a sunlit path between the trees."
    },
    "highlight": {
      "tr": "Hikâye • Seçimler • Hayatta Kalma",
      "en": "Story • Choices • Survival"
    },
    "status": {
      "tr": "Oynanabilir Prototip / Geliştiriliyor",
      "en": "Playable Prototype / In Development"
    },
    "platform": {
      "tr": "Web — Masaüstü ve Mobil Tarayıcı",
      "en": "Web — Desktop and Mobile Browser"
    },
    "gameType": {
      "tr": "Hikâye / Karar Kartları / Hayatta Kalma",
      "en": "Narrative / Decision Cards / Survival"
    },
    "tagline": {
      "tr": "Gece olmadan bir sığınak bul. Seçimlerinin izini sür.",
      "en": "Find shelter before nightfall. Follow the traces of your choices."
    },
    "description": {
      "tr": "Ormanda uyanan bir gencin iki günlük yolculuğunu yönettiğin; ihtiyaçlarını, eşyalarını ve insanlarla kurduğun güveni seçimlerle şekillendirdiğin tek oyunculu hikâye oyunu prototipi.",
      "en": "A single-player narrative game prototype about guiding a young traveler through two days, shaping survival needs, belongings and trust through choices."
    },
    "productSummary": {
      "tr": "İlk gece için güvenli bir barınak ara; ertesi gün verdiğin sözlerin ve taşıdığın eşyaların açtığı yolları keşfet. Hikâye kartlarını oku, kararlarını sağa/sola kaydırarak veya düğmelerle ver; sağlık, tokluk, dayanıklılık ve moralini gözet. Günlüğün, ilişkilerin ve ipuçların yolculuğunun izini tutar.",
      "en": "Seek shelter for the first night, then explore paths opened by your promises and belongings the next day. Read story cards and make choices with left/right swipes or buttons while watching health, satiety, stamina and morale. Your journal records relationships, clues and the traces of your journey."
    },
    "featureShowcase": {
      "tr": [
        {
          "title": "İki günlük hikâye",
          "description": "İlk gün gece olmadan barınak bul; ikinci gün önceki kararlarının açtığı yolları keşfet. Seçimlerin ve yanındaki eşyalar günler arasında taşınır."
        },
        {
          "title": "İhtiyaçlarını gözet",
          "description": "Sağlık, tokluk, dayanıklılık ve moralin yolculuğunu etkiler. Zor anlarda karar ver, ihtiyaçların tükenmeden yolunu bul."
        },
        {
          "title": "Eşyalar ve güven",
          "description": "Yiyecek, mektup ve diğer eşyaları ilgili kartlarda kullan. Arın, Mira ve Deren ile kurduğun güven farklı sahnelere yön verir."
        },
        {
          "title": "Sözler ve ipuçları",
          "description": "Günlüğünde borçlarını, verdiğin sözleri, ilişkilerini ve bulduğun ipuçlarını takip et."
        },
        {
          "title": "Tanıştığın yüzler",
          "description": "Karşılaştığın karakterlerin portrelerini koleksiyonda aç. Açılan portreler yeni yolculuklarda da korunur."
        },
        {
          "title": "Kaldığın yerden devam",
          "description": "Aktif yolculuğunu aynı tarayıcıdaki yerel kayıttan sürdür. İlk günün sonunda yolculuğunu ikinci güne taşı."
        }
      ],
      "en": [
        {
          "title": "A two-day story",
          "description": "Find shelter before the first night, then explore paths shaped by earlier decisions on the second day. Your choices and belongings carry between days."
        },
        {
          "title": "Watch your needs",
          "description": "Health, satiety, stamina and morale shape your journey. Make decisions in difficult moments and find a path before your needs run out."
        },
        {
          "title": "Belongings and trust",
          "description": "Use food, a letter and other items on relevant cards. Trust built with Arın, Mira and Deren leads to different scenes."
        },
        {
          "title": "Promises and clues",
          "description": "Track debts, promises, relationships and discoveries in your journal."
        },
        {
          "title": "Familiar faces",
          "description": "Unlock portraits of encountered characters in the collection. Unlocked portraits remain available in later journeys."
        },
        {
          "title": "Continue your journey",
          "description": "Resume an active journey from a local save in the same browser. Carry your journey into the second day after the first night."
        }
      ]
    },
    "productExperience": {
      "tr": "Hikâye kartlarına dokunarak veya Enter ile ilerle. Karar kartlarında sağa/sola kaydır, seçeneklere dokun ya da yön tuşlarını kullan. Eşyalarının ve insanlara verdiğin sözlerin sonuçlarını gör; günlüğünü açarak yolculuğunda bıraktığın izleri takip et.",
      "en": "Advance story cards with a tap or Enter. On decision cards, swipe left or right, select a button or use the arrow keys. Follow the consequences of your belongings and promises, then open the journal to review the traces of your journey."
    },
    "productFlow": {
      "tr": [
        {
          "title": "Hikâyeyi oku",
          "description": "Ormanda başlayan yolculuğu takip et ve ilk gece için barınak ara."
        },
        {
          "title": "Kararını ver",
          "description": "İhtiyaçlarını, eşyalarını ve insanlarla kurduğun güveni gözeterek seçim yap."
        },
        {
          "title": "İzlerini takip et",
          "description": "Günlüğündeki sözleri ve ipuçlarını incele; ilk günün sonuçlarıyla ikinci güne geç."
        }
      ],
      "en": [
        {
          "title": "Read the story",
          "description": "Follow a journey that begins in a forest and seek shelter for the first night."
        },
        {
          "title": "Make a choice",
          "description": "Consider your needs, belongings and trust in others as you decide."
        },
        {
          "title": "Follow the traces",
          "description": "Review promises and clues in your journal and enter the second day with the consequences of the first."
        }
      ]
    },
    "valueProposition": {
      "tr": "Kısa bir yolculukta hayatta kalma kararlarını, karakter ilişkilerini ve tutulmuş sözlerin sonuçlarını birleştiren hikâye deneyimi.",
      "en": "A compact narrative experience combining survival decisions, character relationships and the consequences of promises."
    },
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES Modules",
      "LocalStorage",
      "Web Audio API",
      "PWA"
    ],
    "cardTechnologies": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "PWA"
    ],
    "technicalDetails": {
      "tr": [
        "HTML, CSS ve JavaScript ile geliştirilmiş, tarayıcıda çalışan tek oyunculu prototip.",
        "Mevcut kapsam iki gündür; üçüncü gün henüz oynanabilir değildir.",
        "Oyun içi arayüz Türkçedir. Aktif yolculuk ve tercihler aynı tarayıcıda yerel olarak saklanır.",
        "Müzik, ses seviyesi ve büyük yazı tercihleri bulunur; dokunma titreşimi cihaz desteğine bağlıdır.",
        "Kapak, oyunda kullanılan mevcut orman sahnesi illüstrasyonudur."
      ],
      "en": [
        "A single-player browser prototype built with HTML, CSS and JavaScript.",
        "The current scope covers two days; a third day is not yet playable.",
        "The in-game interface is in Turkish. Active journeys and preferences are stored locally in the same browser.",
        "Music, volume and large-text preferences are available; touch vibration depends on device support.",
        "The cover is an existing forest scene illustration used in the game."
      ]
    },
    "screenshots": [],
    "isPlayable": false,
    "playUrl": "",
    "github": "",
    "demo": "",
    "googlePlay": ""
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
  },
  {
    "id": "parkmate",
    "title": "ParkMate",
    "category": "apps",
    "featured": false,
    "coverImage": "assets/projects/parkmate-cover.webp",
    "coverThumbnail": "assets/projects/thumbs/parkmate-cover.webp",
    "coverFallback": "assets/projects/fallbacks/parkmate-cover.jpg",
    "coverAlt": {
      "tr": "ParkMate temsili tanıtım görseli: park edilmiş araç, yönlendirme yolu ve telefon maketi.",
      "en": "ParkMate promotional illustration: a parked car, a navigation path and a phone mockup."
    },
    "status": {
      "en": "Working MVP / In Development",
      "tr": "Çalışan MVP / Geliştiriliyor"
    },
    "role": {
      "en": "Android application and interface development",
      "tr": "Android uygulaması ve arayüz geliştirme"
    },
    "platform": {
      "en": "Android",
      "tr": "Android"
    },
    "tagline": {
      "en": "Save your parking spot and find your way back.",
      "tr": "Park yerini kaydet, aracına daha kolay dön."
    },
    "productSummary": {
      "en": "ParkMate is an Android app that stores your parking location, floor and section details, notes and photos on your device. It tracks parking duration, schedules local reminders and opens Google Maps walking navigation to your saved GPS location.",
      "tr": "ParkMate; park konumunu, kat ve bölüm bilgilerini, notlarını ve fotoğraflarını cihazında saklayan bir Android uygulamasıdır. Park süresini takip eder, yerel hatırlatıcılar planlar ve kayıtlı GPS konumuna dönmek için Google Maps yürüyüş navigasyonunu açar."
    },
    "featureShowcase": {
      "en": [
        {
          "title": "Parking location and details",
          "description": "Save GPS coordinates and add a floor, section, space number and notes. You can still save parking details when GPS is unavailable."
        },
        {
          "title": "Go to My Car",
          "description": "Open Google Maps walking navigation to your saved coordinates."
        },
        {
          "title": "Duration and reminders",
          "description": "Review elapsed parking time and set a local reminder. Notifications depend on device permission and Android operating conditions."
        },
        {
          "title": "Photo clues",
          "description": "Add up to three photos from your camera or gallery and view them full screen in parking details."
        },
        {
          "title": "History and favorites",
          "description": "Search completed sessions, filter by type and save frequently used place details as favorites."
        },
        {
          "title": "Personal appearance",
          "description": "Save Turkish/English, light/dark/system theme and reduced-motion preferences on your device."
        },
        {
          "title": "On-device records",
          "description": "Keep parking records, drafts, favorites and photos on your device. Core parking records and history require no account or backend."
        }
      ],
      "tr": [
        {
          "title": "Park konumu ve detayları",
          "description": "GPS konumunu kaydet; kat, bölüm, park numarası ve not ekle. GPS kullanılamadığında detaylarla kayıt oluşturabilirsin."
        },
        {
          "title": "Arabama Git",
          "description": "Kaydettiğin koordinata yürüyüş yönlendirmesi için Google Maps'i aç."
        },
        {
          "title": "Süre ve hatırlatıcılar",
          "description": "Park süresini görüntüle ve yerel hatırlatıcı ayarla. Bildirimler cihaz iznine ve Android'in çalışma koşullarına bağlıdır."
        },
        {
          "title": "Fotoğraflı park ipuçları",
          "description": "Kamera veya galeriden en fazla üç fotoğraf ekle; park detayında tam ekran incele."
        },
        {
          "title": "Geçmiş ve favoriler",
          "description": "Tamamlanan parkları ara, türüne göre filtrele ve sık kullandığın yer detaylarını favorilere al."
        },
        {
          "title": "Sana uygun görünüm",
          "description": "Türkçe/İngilizce, açık/koyu/sistem teması ve azaltılmış hareket tercihlerini cihazında sakla."
        },
        {
          "title": "Cihazında saklanan kayıtlar",
          "description": "Park kayıtlarını, taslaklarını, favorilerini ve fotoğraflarını cihazında sakla. Temel kayıt ve geçmiş akışları hesap veya backend gerektirmez."
        }
      ]
    },
    "productExperience": {
      "en": "Open the parking form with I parked and save your GPS location and any details you need. Review duration and reminder status on the active parking screen. Use Go to My Car to open external Google Maps navigation, then confirm the end of your parking session and review it in history.",
      "tr": "Park Ettim ile kayıt formunu aç, GPS konumunu ve ihtiyacın olan park ipuçlarını kaydet. Aktif park ekranından süreyi ve hatırlatma durumunu takip et. Arabama Git ile harici Google Maps navigasyonunu aç; aracına döndüğünde parkı onaylayarak bitir ve geçmişte görüntüle."
    },
    "productFlow": {
      "en": [
        {
          "title": "Save your parking spot",
          "description": "Open the form, capture your location and save any notes, floor, section or photos you need."
        },
        {
          "title": "Review your location and parking duration",
          "description": "Check elapsed time and reminder status, and edit active parking details when needed."
        },
        {
          "title": "Return to your car",
          "description": "When coordinates are available, open Google Maps with Go to My Car. Confirm the end of the session when you return; the record moves to history."
        }
      ],
      "tr": [
        {
          "title": "Park yerini kaydet",
          "description": "Park Ettim ile formu aç; konumunu ve gerekirse not, kat, bölüm veya fotoğraf ekleyerek kaydet."
        },
        {
          "title": "Konumunu ve park süreni takip et",
          "description": "Geçen süreyi ve hatırlatma durumunu incele; gerekirse aktif park bilgilerini düzenle."
        },
        {
          "title": "Arabana geri dön",
          "description": "Konum varsa Arabama Git ile Google Maps'i aç. Döndüğünde parkı onaylayarak bitir; kayıt geçmişine taşınır."
        }
      ]
    },
    "valueProposition": {
      "en": "Keep the location and visual clues you need to return to your car in one place, especially where floor, section and space numbers matter. Core parking records and history require no account or backend.",
      "tr": "Özellikle kat, bölüm ve park numarasının önemli olduğu otoparklarda, aracına dönüş için gereken konum ve görsel ipuçlarını tek yerde tutar. Temel kayıt ve geçmiş akışları hesap veya backend gerektirmez."
    },
    "technicalDetails": {
      "en": [
        "The React and TypeScript interface is built with Vite and packaged for Android with Capacitor.",
        "Active parking, history, drafts and favorites use a versioned state snapshot in Capacitor Preferences with serialized writes.",
        "Photos are stored in the app's local data directory; cleanup targets files no longer referenced by retained records.",
        "GPS and camera operations use their respective permission flows. A missing GPS fix does not necessarily block saving a parking record.",
        "The local notification service manages regular reminders, a twelve-hour long-parking check and a fifteen-minute return check after navigation; the return phase replaces the other two checks.",
        "Navigation opens in external Google Maps. Core records stay local; cloud backup and account synchronization are not implemented."
      ],
      "tr": [
        "React ve TypeScript arayüzü Vite ile derlenir; Capacitor ile Android uygulaması olarak paketlenir.",
        "Aktif park, geçmiş, taslaklar ve favoriler Capacitor Preferences içinde sürümlü bir state snapshot'ında saklanır; yazımlar sıraya alınır.",
        "Fotoğraflar uygulamanın yerel veri dizininde tutulur; yalnızca artık kullanılmayan dosyalar güvenli temizlik akışına alınır.",
        "GPS ve kamera işlemleri ilgili izin akışlarıyla çalışır. Konum alınamaması park kaydını zorunlu olarak engellemez.",
        "Normal hatırlatma, 12 saatlik uzun park kontrolü ve navigasyon sonrası 15 dakikalık dönüş kontrolü yerel bildirim servisinde yönetilir; dönüş aşaması diğer iki kontrolün yerini alır.",
        "Navigasyon harici Google Maps'te açılır. Temel kayıtlar yereldir; bulut yedekleme veya hesap senkronizasyonu uygulanmamıştır."
      ]
    },
    "description": {
      "en": "Keep your parking location, photos and parking duration together in one Android app.",
      "tr": "Park yerini, fotoğraflarını ve park süreni tek Android uygulamasında takip et."
    },
    "purpose": {
      "en": "Keep the location and visual clues you need to return to your car in one place, especially where floor, section and space numbers matter. Core parking records and history require no account or backend.",
      "tr": "Özellikle kat, bölüm ve park numarasının önemli olduğu otoparklarda, aracına dönüş için gereken konum ve görsel ipuçlarını tek yerde tutar. Temel kayıt ve geçmiş akışları hesap veya backend gerektirmez."
    },
    "features": {
      "tr": [
        "GPS ile park konumu kaydetme",
        "Google Maps üzerinden yürüyüş yönlendirmesi",
        "Park süresi takibi",
        "Yerel hatırlatıcılar",
        "En fazla üç park fotoğrafı",
        "Park geçmişi",
        "Favoriler",
        "Uygulama ayarları",
        "Cihaz üzerinde yerel veri saklama"
      ],
      "en": [
        "GPS parking location saving",
        "Google Maps walking directions",
        "Parking duration tracking",
        "Local reminders",
        "Up to three parking photos",
        "Parking history",
        "Favorites",
        "App settings",
        "On-device data storage"
      ]
    },
    "technologies": [
      "React",
      "TypeScript",
      "Vite",
      "Capacitor",
      "CSS Modules",
      "Capacitor Geolocation",
      "Camera",
      "Filesystem",
      "Preferences",
      "Local Notifications",
      "App Launcher",
      "Share",
      "Haptics",
      "Lucide React"
    ],
    "cardTechnologies": [
      "React",
      "TypeScript",
      "Capacitor",
      "Geolocation"
    ],
    "screenshots": [],
    "github": "",
    "demo": "",
    "googlePlay": ""
  },
  {
    "id": "teamops",
    "title": "TeamOps",
    "category": "web",
    "featured": false,
    "coverTitle": "TeamOps",
    "coverImage": "assets/projects/teamops-cover.webp",
    "coverThumbnail": "assets/projects/thumbs/teamops-cover.webp",
    "coverFallback": "assets/projects/fallbacks/teamops-cover.jpg",
    "coverAlt": {
      "tr": "TeamOps temsili ürün tanıtım kapağı: görev listesi, durumlar, ilerleme çubukları ve görev notları.",
      "en": "TeamOps conceptual product cover: a task list, statuses, progress bars and task notes."
    },
    "status": {
      "tr": "Geliştiriliyor / Çalışan Prototip",
      "en": "In Development / Working Prototype"
    },
    "platform": {
      "tr": "Web",
      "en": "Web"
    },
    "role": {
      "tr": "Web uygulaması ve full-stack geliştirme",
      "en": "Web application and full-stack development"
    },
    "tagline": {
      "en": "Track tasks, progress and blockers in one place.",
      "tr": "Görevleri, ilerlemeyi ve engelleri tek yerde takip et."
    },
    "description": {
      "tr": "Görevleri ve göreve bağlı ilerleme notlarını takip etmeye odaklanan web prototipi.",
      "en": "A web prototype focused on tracking tasks and task-linked progress updates."
    },
    "productSummary": {
      "en": "TeamOps is a task and progress tracking prototype. It combines task creation and editing, status and progress updates, and task-linked notes and blocker reports through a React interface, an Express API and MySQL storage.",
      "tr": "TeamOps, bir görev ve ilerleme takip prototipidir. Görev oluşturma ve düzenleme, durum ve ilerleme yüzdesi güncelleme, göreve bağlı not ve engel kaydı akışlarını React arayüzü, Express API ve MySQL veri katmanında birleştirir."
    },
    "featureShowcase": {
      "en": [
        {
          "title": "Task creation and editing",
          "description": "Manage a title, project name, description, priority and due date in one form."
        },
        {
          "title": "Status and progress",
          "description": "Update to-do, in-progress, blocked and completed task states and progress percentages."
        },
        {
          "title": "Progress updates",
          "description": "Add a short update to a task and review earlier notes in chronological order."
        },
        {
          "title": "Blocker reports",
          "description": "Mark a task-linked update as a blocker to make it visible."
        },
        {
          "title": "Search and filters",
          "description": "Filter tasks by status and search by title or project name."
        },
        {
          "title": "Task summaries",
          "description": "Review counts calculated from current records in the daily view and task list."
        }
      ],
      "tr": [
        {
          "title": "Görev oluşturma ve düzenleme",
          "description": "Başlık, proje adı, açıklama, öncelik ve son tarihi tek formda yönet."
        },
        {
          "title": "Durum ve ilerleme",
          "description": "Yapılacak, devam eden, engelli ve tamamlanan görev durumlarını ve ilerleme yüzdesini güncelle."
        },
        {
          "title": "İlerleme notları",
          "description": "Göreve kısa bir güncelleme ekle ve önceki notları tarih sırasıyla incele."
        },
        {
          "title": "Engel bildirimi",
          "description": "Göreve bağlı bir notu engel olarak işaretleyerek görünür hale getir."
        },
        {
          "title": "Arama ve filtreler",
          "description": "Görevleri durumlarına göre filtrele; başlık veya proje adına göre ara."
        },
        {
          "title": "Görev özeti",
          "description": "Günlük görünümde ve görev listesinde mevcut kayıtlardan hesaplanan sayaçları incele."
        }
      ]
    },
    "productExperience": {
      "en": "Review tasks in the daily view, then narrow the My Tasks list by status or search. Create or edit a task, update its progress and add a short note or blocker report to the relevant task. Changes are sent through the API to the MySQL data layer.",
      "tr": "Günlük görünümden görevlerini gözden geçir, Görevlerim ekranında durum veya aramayla listeyi daralt. Görev oluşturup düzenle, ilerleme yüzdesini güncelle ve ilgili göreve kısa bir not ya da engel bildirimi ekle. Değişiklikler API üzerinden MySQL veri katmanına iletilir."
    },
    "productFlow": {
      "en": [
        {
          "title": "Define the task",
          "description": "Create a task with a title, project, priority and optional due date."
        },
        {
          "title": "Update progress",
          "description": "Change the task status and percentage, then add a short progress update or blocker report."
        },
        {
          "title": "Review the work",
          "description": "Find records with search and filters, then review their states and update history."
        }
      ],
      "tr": [
        {
          "title": "Görevi tanımla",
          "description": "Başlık, proje, öncelik ve varsa son tarihi girerek yeni görev oluştur."
        },
        {
          "title": "İlerlemeyi güncelle",
          "description": "Görev durumunu ve yüzdesini düzenle; kısa bir ilerleme notu veya engel bildirimi ekle."
        },
        {
          "title": "İşleri gözden geçir",
          "description": "Görev listesinde arama ve filtrelerle kayıtları bul; durumları ve not geçmişini incele."
        }
      ]
    },
    "valueProposition": {
      "en": "Keep task status and the notes explaining progress or blockers in the same context. The current prototype brings task tracking and progress communication into one interface.",
      "tr": "Görev durumu ile işin neden ilerlediğini veya takıldığını anlatan notları aynı bağlamda tutar. Mevcut prototip, görev takibi ve ilerleme iletişimini tek arayüzde denemeyi sağlar."
    },
    "technicalDetails": {
      "en": [
        "The React/JSX client is built with Vite, with plain CSS styles and responsive breakpoints.",
        "The Express API separates task and progress-update operations into route, controller, service and model layers.",
        "Tasks and task-linked updates are stored in MySQL tables using parameterized SQL through mysql2/promise.",
        "The server validates task priority, status, progress range and update content. Calendar validation and some state transitions still need improvement.",
        "The interface stores the Turkish/English preference in localStorage and uses a translation dictionary for core screens.",
        "Authentication, role-based authorization and employee evaluation modules are not implemented in the current prototype.",
        "Moving a task from TODO to 5% progress can return 10% in the current prototype. Validation to reject invalid calendar dates still needs improvement."
      ],
      "tr": [
        "React/JSX istemcisi Vite ile derlenir; arayüz stilleri düz CSS ve responsive breakpoint'lerle tanımlanır.",
        "Express API, route/controller/service/model katmanlarıyla görev ve ilerleme güncellemesi işlemlerini ayırır.",
        "Görevler ve göreve bağlı notlar MySQL tablolarında tutulur; mysql2/promise üzerinden parametreli SQL kullanılır.",
        "Görev önceliği, durumu, yüzde aralığı ve not içeriği için sunucu tarafında doğrulamalar bulunur. Tarih doğrulaması ve bazı durum geçişleri geliştirme gerektirir.",
        "Arayüz Türkçe/İngilizce seçimini localStorage içinde saklar; temel ekranlar çeviri sözlüğü kullanır.",
        "Kimlik doğrulama, rol bazlı yetkilendirme ve çalışan değerlendirme modülleri mevcut prototip kapsamında uygulanmamıştır.",
        "TODO durumundan %5 ilerlemeye geçiş mevcut prototipte %10 döndürebilir. Takvim dışı tarihleri reddetme doğrulaması geliştirme gerektirir."
      ]
    },
    "purpose": {
      "en": "Keep task status and the notes explaining progress or blockers in the same context. The current prototype brings task tracking and progress communication into one interface.",
      "tr": "Görev durumu ile işin neden ilerlediğini veya takıldığını anlatan notları aynı bağlamda tutar. Mevcut prototip, görev takibi ve ilerleme iletişimini tek arayüzde denemeyi sağlar."
    },
    "features": {
      "tr": [
        "Görev oluşturma",
        "Görev düzenleme",
        "Durum takibi",
        "İlerleme yüzdesi",
        "Görev notları",
        "Engel bildirimleri",
        "Arama ve filtreleme"
      ],
      "en": [
        "Task creation",
        "Task editing",
        "Status tracking",
        "Progress percentages",
        "Task notes",
        "Blocker reports",
        "Search and filtering"
      ]
    },
    "technologies": [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
      "Node.js",
      "Express",
      "MySQL",
      "mysql2",
      "REST API"
    ],
    "cardTechnologies": [
      "React",
      "Node.js",
      "Express",
      "MySQL"
    ],
    "screenshots": [],
    "github": "",
    "demo": "",
    "googlePlay": ""
  },
  {
    id: 'light-spirit', title: 'Light Spirit', category: 'games', featured: false, coverTitle: 'Light Spirit',
    coverImage: 'assets/projects/light-spirit-cover.webp',
    coverThumbnail: 'assets/projects/thumbs/light-spirit-cover.webp',
    coverFallback: 'assets/projects/fallbacks/light-spirit-cover.jpg',
    coverAlt: { tr: 'Light Spirit oyunundan ışık ruhu ve karanlık labirent görünümü.', en: 'The light spirit and dark maze in Light Spirit gameplay.' },
    status: { tr: 'Oynanabilir Prototip / Geliştiriliyor', en: 'Playable Prototype / In Development' },
    platform: { tr: 'Masaüstü / Mobil Web', en: 'Desktop / Mobile Web' },
    role: { tr: 'Oyun ve web arayüzü geliştirme', en: 'Game and web interface development' },
    gameType: { tr: '2D Arcade / Labirent', en: '2D Arcade / Maze' },
    tagline: { tr: 'Işığını koru, karanlıktan çıkış yolunu bul.', en: 'Keep your light alive and find a way out of the dark.' },
    description: {
      tr: 'Enerjini yönetip ışıkları toplayarak üç karanlık labirentten çıkmaya çalıştığın tek oyunculu 2D arcade oyunu.',
      en: 'A single-player 2D arcade game about managing energy, collecting light and escaping three dark mazes.'
    },
    productSummary: {
      tr: 'Light Spirit, küçük bir ışık ruhunu karanlık labirentlerde yönlendirdiğin özgün bir web oyunu prototipidir. Zamanla azalan enerjini ışık toplayarak yenile, daralan görüş alanında yolunu bul ve üç bölümün çıkış portallarına ulaş. Kapılar, kristaller ve ışığa tepki veren Shadow, bölümlere farklı kararlar ekler.',
      en: 'Light Spirit is an original web game prototype in which you guide a small spirit through dark mazes. Replenish fading energy by collecting light, navigate a shrinking field of view and reach the exit portals across three levels. Doors, crystals and a light-sensitive Shadow introduce different decisions along the way.'
    },
    featureShowcase: {
      tr: [
        { title: 'Enerji ve görüş alanı', description: 'Enerjin zamanla azalır; görüş alanın enerjiye göre değişir. Işıkları toplayarak enerjini yenile.' },
        { title: 'Üç bölümlük yolculuk', description: 'İlk Kıvılcım, Işığın Bedeli ve Karanlıktaki Gözler bölümlerini sırayla aç; çıkış portalına ulaşarak ilerle.' },
        { title: 'Kapılar ve kristaller', description: 'İkinci bölümde enerji harcayan kapı kestirmesini veya uzun yolu seç; iki kristali etkinleştirerek portalı aç.' },
        { title: 'Işığa tepki veren Shadow', description: 'Üçüncü bölümde güçlü ışığın uzaklaştırdığı Shadow’dan kaç. Temas enerji kaybettirir ve kısa bir koruma süresi başlatır.' },
        { title: 'Klavye ve dokunmatik kontrol', description: 'WASD veya yön tuşlarıyla hareket et; mobilde yön ve etkileşim düğmelerini kullan.' },
        { title: 'Bölüm ilerlemesi', description: 'Tamamladığın bölümler tarayıcıda saklanır ve sıradaki bölümü açar. Kayıt, devam eden koşunun konumunu veya enerjisini içermez.' },
        { title: 'Duraklat ve yeniden dene', description: 'Oyunu duraklat veya bölümü yeniden başlat. Sekme odağı kaybolduğunda oyun otomatik duraklar.' }
      ],
      en: [
        { title: 'Energy and visibility', description: 'Energy fades over time and determines your field of view. Collect lights to replenish it.' },
        { title: 'A three-level journey', description: 'Unlock First Spark, The Cost of Light and Eyes in the Dark in sequence, progressing by reaching each exit portal.' },
        { title: 'Doors and crystals', description: 'In the second level, choose an energy-costing door shortcut or the longer route, then activate two crystals to unlock the portal.' },
        { title: 'A light-sensitive Shadow', description: 'Evade the third level’s Shadow, which retreats from strong light. Contact drains energy and starts a short protection period.' },
        { title: 'Keyboard and touch controls', description: 'Move with WASD or arrow keys, or use directional and interaction buttons on mobile.' },
        { title: 'Level progression', description: 'Completed levels are stored in your browser and unlock the next level. Saves do not include the position or energy of an ongoing run.' },
        { title: 'Pause and retry', description: 'Pause the game or restart a level. The game automatically pauses when the tab loses focus.' }
      ]
    },
    productExperience: {
      tr: 'Menüden açık bir bölüm seç, ışık ruhunu koridorlarda yönlendir ve enerjini takip et. İkinci bölümde kapı ve kristallerle etkileşime gir; üçüncü bölümde Shadow’dan kaç. Enerjin bitmeden portala ulaşarak sonraki bölümü aç veya tamamladığın bölümleri yeniden oyna.',
      en: 'Choose an unlocked level from the menu, guide the spirit through corridors and watch your energy. Interact with doors and crystals in the second level and evade the Shadow in the third. Reach the portal before your energy runs out to unlock the next level, or replay completed levels.'
    },
    productFlow: {
      tr: [
        { title: 'Bölümünü seç', description: 'İlk bölümden başla veya daha önce açtığın bir bölümü menüden seç.' },
        { title: 'Işığını koru', description: 'Işıkları topla, yolunu planla ve bölümün kapı, kristal veya Shadow mekaniğine göre ilerle.' },
        { title: 'Portala ulaş', description: 'Bölümün hedefini tamamlayıp çıkışa ulaş; ilerlemeni sakla ve sonraki bölüme geç.' }
      ],
      en: [
        { title: 'Choose a level', description: 'Start with the first level or select one you have already unlocked from the menu.' },
        { title: 'Keep your light alive', description: 'Collect lights, plan your route and adapt to the level’s doors, crystals or Shadow.' },
        { title: 'Reach the portal', description: 'Complete the level objective and reach the exit, saving progression and moving on to the next level.' }
      ]
    },
    valueProposition: {
      tr: 'Basit labirent hareketini, zamanla azalan enerji ve değişen görüş alanıyla birleştirir. Üç kısa bölüm, rota planlama ve ışık yönetimini farklı etkileşimlerle keşfetmeni sağlar.',
      en: 'Combines simple maze movement with fading energy and changing visibility. Three short levels let you explore route planning and light management through different interactions.'
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES Modules', 'Phaser 3', 'Canvas 2D', 'Vite', 'LocalStorage'],
    cardTechnologies: ['Phaser 3', 'JavaScript', 'Vite', 'Canvas 2D'],
    technicalDetails: {
      tr: [
        'Phaser ve JavaScript ile geliştirilen web tabanlı 2D oyun prototipi.',
        'Masaüstü klavyesi ve mobil dokunmatik kontroller için hazırlanmıştır.',
        'Mevcut sürüm tek oyunculu üç bölüm içerir; tamamlanan bölümlere ait ilerleme tarayıcıda saklanır.'
      ],
      en: [
        'A web-based 2D game prototype built with Phaser and JavaScript.',
        'Designed for desktop keyboard and mobile touch controls.',
        'The current version contains three single-player levels and stores completed-level progression in the browser.'
      ]
    },
    screenshots: [
      { src: 'assets/projects/light-spirit/desktop-gameplay.png', width: 1280, height: 980, alt: { tr: 'Light Spirit üçüncü bölüm: labirent ve görüş alanı — masaüstü oyun ekranı.', en: 'Light Spirit level three: maze and field of view — desktop gameplay.' } },
      { src: 'assets/projects/light-spirit/mobile-gameplay.png', width: 390, height: 648, alt: { tr: 'Light Spirit düşük enerji ve dokunmatik kontroller — mobil oyun ekranı.', en: 'Light Spirit low energy and touch controls — mobile gameplay.' } }
    ],
    isPlayable: false, playUrl: '', github: '', demo: '', googlePlay: ''
  },
  {
    "id": "the-line",
    "title": "THE LINE",
    "category": "games",
    "featured": false,
    "coverImage": "assets/projects/the-line-cover.webp",
    "coverThumbnail": "assets/projects/thumbs/the-line-cover.webp",
    "coverFallback": "assets/projects/fallbacks/the-line-cover.jpg",
    "coverAlt": {
      "tr": "THE LINE gerçek ana menü ekranı: üs savunma oyununun başlangıç görünümü.",
      "en": "THE LINE actual main menu screen: the starting view of the base defense game."
    },
    "status": {
      "tr": "Oynanabilir Prototip / Geliştiriliyor",
      "en": "Playable Prototype / In Development"
    },
    "platform": {
      "tr": "Web",
      "en": "Web"
    },
    "role": {
      "tr": "Oyun ve web arayüzü geliştirme",
      "en": "Game and web interface development"
    },
    "gameType": {
      "tr": "2D Üs Savunma / Taktik",
      "en": "2D Base Defense / Tactics"
    },
    "tagline": {
      "tr": "Birliklerini sahaya sür, savunmanı güçlendir, hattı koru.",
      "en": "Deploy your units, strengthen your defenses and hold the line."
    },
    "description": {
      "tr": "Birlikler ve savunma geliştirmeleriyle düşman dalgalarına karşı üssünü koruduğun tek oyunculu web oyunu prototipi.",
      "en": "A single-player web game prototype about defending your base against enemy waves with units and defensive upgrades."
    },
    "productSummary": {
      "tr": "THE LINE, yan görünüşlü bir üs savunma oyunu prototipidir. Birliklerini sahaya sür, duvarını ve taretini destekle, düşman saldırılarından kazandığın parayı yeni birliklere veya savunma geliştirmelerine ayır. Amaç, dalgalar halinde gelen düşmanlara karşı üssünü ayakta tutmaktır.",
      "en": "THE LINE is a side-view base defense game prototype. Deploy units, support your wall and turret, and spend money earned from defeating enemies on more units or defensive upgrades. Keep your base standing against successive enemy waves."
    },
    "featureShowcase": {
      "tr": [
        {
          "title": "Üs ve savunma hattı",
          "description": "Üssünü, duvarını ve otomatik ateş eden taretini düşman saldırılarına karşı koru."
        },
        {
          "title": "İki birlik türü",
          "description": "Piyade ve ağır nişancı birliklerini sahaya sür; birliklerin düşmanlarla otomatik savaşır."
        },
        {
          "title": "Düşman dalgaları",
          "description": "Farklı özelliklere sahip düşmanlarla karşılaş ve sonraki saldırı dalgasına hazırlan."
        },
        {
          "title": "Savunma geliştirmeleri",
          "description": "Kazandığın parayla duvar, taret ve üs geliştirmeleri satın al."
        },
        {
          "title": "Kaynak kararları",
          "description": "Düşmanları yenerek para kazan; yeni birliklerle kalıcı olmayan koşu içi savunma geliştirmeleri arasında seçim yap."
        },
        {
          "title": "Duraklat ve yeniden başlat",
          "description": "Savunmaya ara ver, kaldığın koşuya dön veya yeniden başla. Üs dayanıklılığı tükendiğinde yeni bir deneme yap."
        }
      ],
      "en": [
        {
          "title": "Base and defensive line",
          "description": "Protect your base, wall and automatically firing turret against enemy attacks."
        },
        {
          "title": "Two unit types",
          "description": "Deploy riflemen and heavy gunners; your units engage enemies automatically."
        },
        {
          "title": "Enemy waves",
          "description": "Face enemies with different traits and prepare for the next wave of attacks."
        },
        {
          "title": "Defensive upgrades",
          "description": "Spend earned money on wall, turret and base upgrades."
        },
        {
          "title": "Resource decisions",
          "description": "Earn money by defeating enemies, then choose between new units and defensive upgrades that last for the current run."
        },
        {
          "title": "Pause and restart",
          "description": "Take a break, return to your current run or restart. Try again when your base runs out of durability."
        }
      ]
    },
    "productExperience": {
      "tr": "Ana menüden savunmayı başlat, mevcut bütçenle birlik topla ve savaş alanını takip et. Birliklerin ve taretin otomatik savaşırken kazandığın parayı yeni destek veya savunma geliştirmeleri için kullan. Üssün düştüğünde yeniden başlayarak farklı bir harcama planı dene.",
      "en": "Start the defense from the main menu, recruit units within your budget and watch the battlefield. While your units and turret fight automatically, use earned money for reinforcements or defensive upgrades. When your base falls, restart and try a different spending plan."
    },
    "productFlow": {
      "tr": [
        {
          "title": "Savunmayı başlat",
          "description": "Ana menüden oyuna gir ve üssünün savunma durumunu gözden geçir."
        },
        {
          "title": "Birliklerini planla",
          "description": "Bütçeni piyade, ağır nişancı ve savunma geliştirmeleri arasında paylaştır."
        },
        {
          "title": "Hattı koru",
          "description": "Düşman dalgalarına dayan, kazandığın parayla savunmanı destekle ve gerekirse yeniden dene."
        }
      ],
      "en": [
        {
          "title": "Start the defense",
          "description": "Enter from the main menu and review the state of your defenses."
        },
        {
          "title": "Plan your units",
          "description": "Divide your budget between riflemen, heavy gunners and defensive upgrades."
        },
        {
          "title": "Hold the line",
          "description": "Withstand enemy waves, support your defenses with earned money and retry when needed."
        }
      ]
    },
    "valueProposition": {
      "tr": "Otomatik savaşı, sınırlı bütçeyle verilen birlik ve geliştirme kararlarıyla birleştirir. Savunma hattını ayakta tutmak için ne zaman destek çağıracağına ve neyi güçlendireceğine karar verirsin.",
      "en": "Combines automatic combat with unit and upgrade decisions made on a limited budget. Decide when to bring in reinforcements and which defenses to strengthen to keep the line standing."
    },
    "technologies": [
      "Phaser 3",
      "TypeScript",
      "Vite",
      "HTML5",
      "CSS3"
    ],
    "cardTechnologies": [
      "Phaser 3",
      "TypeScript",
      "Vite"
    ],
    "technicalDetails": {
      "tr": [
        "Phaser ve TypeScript ile geliştirilen web tabanlı 2D oyun prototipi.",
        "Mevcut sürüm tek oyunculudur; tarayıcı arayüzünden birlik ve geliştirme kararları verilir.",
        "İlerleme mevcut koşuyla sınırlıdır; kalıcı kayıt veya çevrim içi çok oyunculu özellik sunulmaz."
      ],
      "en": [
        "A web-based 2D game prototype built with Phaser and TypeScript.",
        "The current version is single-player, with unit and upgrade decisions made through the browser interface.",
        "Progress is limited to the current run; persistent saves and online multiplayer are not provided."
      ]
    },
    "screenshots": [],
    "isPlayable": false,
    "playUrl": "",
    "github": "",
    "demo": "",
    "googlePlay": ""
  },
  {
    "id": "click-master",
    "title": "Click Master",
    "category": "games",
    "featured": false,
    "coverImage": "assets/projects/click-master-cover.webp",
    "coverThumbnail": "assets/projects/thumbs/click-master-cover.webp",
    "coverFallback": "assets/projects/fallbacks/click-master-cover.jpg",
    "coverAlt": {
      "tr": "Click Master ana menü illüstrasyonundan hazırlanan kapak: kahraman ve yeşil slime, gün batımındaki kale manzarası.",
      "en": "Cover adapted from Click Master’s main menu illustration: a hero and green slime against a castle at sunset."
    },
    "status": {
      "tr": "Oynanabilir Prototip / Geliştiriliyor",
      "en": "Playable Prototype / In Development"
    },
    "platform": {
      "tr": "Web — Masaüstü ve Mobil Tarayıcı",
      "en": "Web — Desktop and Mobile Browser"
    },
    "role": {
      "tr": "Oyun ve web arayüzü geliştirme",
      "en": "Game and web interface development"
    },
    "gameType": {
      "tr": "2D Clicker / Otomatik Savaş",
      "en": "2D Clicker / Auto Battle"
    },
    "tagline": {
      "tr": "Tıkla, sandığını aç, kahramanını güçlendir.",
      "en": "Tap, open a chest and strengthen your hero."
    },
    "highlight": {
      "tr": "Tıklama • Sandık • Ekipman",
      "en": "Tapping • Chests • Equipment"
    },
    "description": {
      "tr": "Tıklayarak para kazandığın, sandıklardan ekipman edindiğin ve otomatik savaşlarla seviye ilerlettiğin tek oyunculu 2D web oyunu prototipi.",
      "en": "A single-player 2D web game prototype where you earn coins by tapping, obtain equipment from chests and gain levels through automatic battles."
    },
    "productSummary": {
      "tr": "Green Plains’te kahramanının otomatik saldırılarını takip et, tıklamalarla para kazan ve sandık ödüllerini takma ya da satma arasında seçim yap. Silahlarla saldırı gücünü artır, XP kazanarak seviye atla ve Giant Boar karşılaşmasına ulaş. Mevcut prototip, tek bölgede tekrar eden bir savaş ve ekipman ilerlemesi sunar.",
      "en": "Follow your hero’s automatic attacks in Green Plains, earn coins through tapping and choose whether to equip or sell chest rewards. Increase attack power with weapons, gain XP and levels, and reach the Giant Boar encounter. The current prototype offers a repeating battle and equipment progression loop in one region."
    },
    "featureShowcase": {
      "tr": [
        {
          "title": "Tıklayarak kazan",
          "description": "Oyun alanına dokun veya tıkla; kazandığın parayı sandık açmak için biriktir."
        },
        {
          "title": "Otomatik savaş",
          "description": "Kahramanın düşmanlara otomatik saldırır. Düşmanları yenerek para ve XP kazan, seviyeni takip et."
        },
        {
          "title": "Beş nadirlikte ödüller",
          "description": "Sandıkları aç, farklı nadirliklerdeki silah ve gövde zırhı ödüllerini keşfet."
        },
        {
          "title": "Tak veya sat",
          "description": "Ödülünü mevcut ekipmanınla karşılaştır. Silah takarak saldırı gücünü artır veya ödülü satıp para kazan."
        },
        {
          "title": "Green Plains yolculuğu",
          "description": "Slime, Wild Rat, Boar ve Wolf aşamalarını geç, Giant Boar boss ile karşılaş. Boss sonrasında aynı bölgedeki döngü yeniden başlar."
        },
        {
          "title": "Yerel ilerleme kaydı",
          "description": "Para, seviye, aşama ve takılı ekipmanların aynı tarayıcıda saklanır. Seçimini bekleyen sandık ödülüne oyuna döndüğünde devam edebilirsin."
        }
      ],
      "en": [
        {
          "title": "Earn by tapping",
          "description": "Tap or click the playfield and save earned coins to open chests."
        },
        {
          "title": "Automatic battles",
          "description": "Your hero attacks enemies automatically. Defeat them for coins and XP and follow your level progression."
        },
        {
          "title": "Five reward rarities",
          "description": "Open chests and discover weapon and chest armor rewards across five rarity tiers."
        },
        {
          "title": "Equip or sell",
          "description": "Compare a reward with your current equipment. Equip a weapon to increase attack power or sell the reward for coins."
        },
        {
          "title": "A Green Plains journey",
          "description": "Progress through Slime, Wild Rat, Boar and Wolf stages and face the Giant Boar boss. The loop restarts in the same region after the boss."
        },
        {
          "title": "Local progress saves",
          "description": "Coins, levels, stages and equipped items are stored in the same browser. Return to a pending chest reward and continue your choice."
        }
      ]
    },
    "productExperience": {
      "tr": "Oyun alanına tıklayarak para biriktirirken otomatik savaşları takip et. Sandığını açtığında ödülün özelliklerini ve o slottaki mevcut ekipmanını incele; tak veya sat kararını ver. Kazandığın XP ile seviye atla, silahlarını değiştir ve Green Plains döngüsüne devam et.",
      "en": "Build up coins by tapping the playfield while following automatic battles. When you open a chest, review the reward’s stats and your current equipment for that slot, then choose to equip or sell. Gain levels through XP, change weapons and continue the Green Plains loop."
    },
    "productFlow": {
      "tr": [
        {
          "title": "Tıkla ve kazan",
          "description": "Oyun alanına dokun; tıklamalar ve yenilen düşmanlarla para biriktir."
        },
        {
          "title": "Sandığını aç",
          "description": "Ödülünü mevcut ekipmanınla karşılaştır, tak veya sat."
        },
        {
          "title": "Güçlen ve ilerle",
          "description": "XP ile seviye atla, silahlarla saldırını güçlendir ve boss karşılaşmasına ulaş."
        }
      ],
      "en": [
        {
          "title": "Tap and earn",
          "description": "Tap the playfield and collect coins from taps and defeated enemies."
        },
        {
          "title": "Open a chest",
          "description": "Compare the reward with your current equipment, then equip or sell it."
        },
        {
          "title": "Grow and progress",
          "description": "Gain levels through XP, increase attack power with weapons and reach the boss encounter."
        }
      ]
    },
    "valueProposition": {
      "tr": "Basit tıklama etkileşimini otomatik savaş ve ekipman kararlarıyla birleştiren kısa bir gelişim döngüsü. Her sandık, kazancını nasıl değerlendireceğine dair yeni bir seçim sunar.",
      "en": "A compact progression loop combining simple tapping with automatic battles and equipment decisions. Each chest offers a new choice about how to use your earnings."
    },
    "technologies": [
      "Phaser 3",
      "TypeScript",
      "Vite",
      "HTML5",
      "CSS3",
      "WebGL",
      "LocalStorage"
    ],
    "cardTechnologies": [
      "Phaser 3",
      "TypeScript",
      "Vite"
    ],
    "technicalDetails": {
      "tr": [
        "Phaser ve TypeScript ile geliştirilen, WebGL kullanan tek oyunculu web prototipi.",
        "Dikey oyun alanı, masaüstü fare ve mobil dokunmatik girdileri için hazırlanmıştır.",
        "İlerleme aynı tarayıcıda yerel olarak saklanır; kayıt başarısızlıkları oyun içinde bildirilir.",
        "Mevcut kapak oyunun ana menü illüstrasyonundan hazırlanmıştır."
      ],
      "en": [
        "A single-player web prototype built with Phaser and TypeScript, using WebGL.",
        "The portrait playfield is designed for desktop mouse and mobile touch input.",
        "Progress is saved locally in the same browser, with in-game feedback when saving fails.",
        "The current cover is adapted from the game’s main menu illustration."
      ]
    },
    "screenshots": [],
    "isPlayable": false,
    "playUrl": "",
    "github": "",
    "demo": "",
    "googlePlay": ""
  }
];
