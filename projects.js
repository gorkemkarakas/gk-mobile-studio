// Central portfolio data. Add verified technology names and URLs here when available.
// Screenshot entries: { src: 'assets/example.png', alt: { en: '...', tr: '...' } }.
window.PORTFOLIO_PROJECTS = [
  {
    id: 'devicecloud', title: 'DeviceCloud', category: 'iot', featured: true,
    description: { en: 'An IoT platform for managing devices and monitoring connected systems.', tr: 'Cihazları yönetmek ve bağlı sistemleri izlemek için bir IoT platformu.' },
    purpose: { en: 'Bring device monitoring, metrics and remote configuration into one clear interface.', tr: 'Cihaz izleme, metrikler ve uzaktan yapılandırmayı anlaşılır bir arayüzde bir araya getirmek.' },
    features: { en: ['Device management', 'System and metric monitoring', 'Remote configuration'], tr: ['Cihaz yönetimi', 'Sistem ve metrik takibi', 'Uzaktan yapılandırma'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: '', architecture: ''
  },
  {
    id: 'pulsechat', title: 'PulseChat', category: 'web', featured: true,
    description: { en: 'A real-time chat application for conversations on the web.', tr: 'Web üzerinde anlık iletişim için gerçek zamanlı bir sohbet uygulaması.' },
    purpose: { en: 'Make real-time conversations accessible through a simple web experience.', tr: 'Gerçek zamanlı sohbeti sade bir web deneyimiyle erişilebilir kılmak.' },
    features: { en: ['Real-time messaging', 'Web-based conversations'], tr: ['Gerçek zamanlı mesajlaşma', 'Web üzerinden sohbet'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: ''
  },
  {
    id: 'tripledger', title: 'TripLedger', category: 'apps', featured: true,
    description: { en: 'Keep travel expenses, budgets and shared costs in one place.', tr: 'Seyahat harcamalarını, bütçeleri ve ortak giderleri tek yerde takip edin.' },
    purpose: { en: 'Keep personal and shared expenses organized, making travel budgets easier to follow.', tr: 'Kişisel ve ortak harcamaları düzenleyerek seyahat bütçesini takip etmeyi kolaylaştırmak.' },
    features: { en: ['Expense tracking and travel budgets', 'Shared expense records', 'Subscription management'], tr: ['Harcama takibi ve seyahat bütçeleri', 'Ortak gider kayıtları', 'Abonelik yönetimi'] },
    technologies: [], image: 'assets/tripledger-phone-cutout.png',
    screenshots: [{ src: 'assets/tripledger-phone-cutout.png', alt: { en: 'TripLedger application preview', tr: 'TripLedger uygulama önizlemesi' } }],
    github: '', demo: '', googlePlay: '', privacy: 'privacy/tripledger.html', terms: 'terms/tripledger.html'
  },
  {
    id: 'tinynotes', title: 'TinyNotes', category: 'apps', featured: true,
    description: { en: 'A simple place to capture notes and organize everyday ideas.', tr: 'Not almak ve günlük fikirleri düzenlemek için sade bir uygulama.' },
    purpose: { en: 'Offer a focused writing space that makes creating and finding notes straightforward.', tr: 'Not oluşturmayı ve bulmayı kolaylaştıran, yazmaya odaklı bir alan sunmak.' },
    features: { en: ['Create and view notes', 'Organize written content', 'Minimal writing experience'], tr: ['Not oluşturma ve görüntüleme', 'Yazılı içerikleri düzenleme', 'Sade yazma deneyimi'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: '', privacy: 'privacy/tinynotes.html', terms: 'terms/tinynotes.html'
  },
  {
    id: 'restaurant-pos', title: 'Restaurant POS', category: 'web', featured: false,
    description: { en: 'A restaurant POS system for orders, inventory and sales reporting.', tr: 'Sipariş, stok ve satış raporlaması için bir restoran POS sistemi.' },
    purpose: { en: 'Bring daily restaurant operations together with ordering, inventory and sales tools.', tr: 'Sipariş, stok ve satış araçlarıyla günlük restoran operasyonlarını bir araya getirmek.' },
    features: { en: ['Order management', 'Inventory tracking', 'Sales reporting'], tr: ['Sipariş yönetimi', 'Stok takibi', 'Satış raporlama'] },
    technologies: [], screenshots: [], github: '', demo: '', googlePlay: ''
  }
];
