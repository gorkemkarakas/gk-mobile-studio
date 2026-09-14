(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS;
  const categories = window.PORTFOLIO_CATEGORIES;
  const copy = {
    en: {
      overview: 'Overview', gameplay: 'Gameplay', decisionMechanic: 'Decision mechanic', visualAtmosphere: 'Visual / Atmosphere design', technicalStructure: 'Technical structure', usedTechnologies: 'Technologies used', play: 'Play',
      darkTheme: 'Dark theme', lightTheme: 'Light theme', heroImage: 'Mobile and web dashboard interfaces on a phone and laptop', skip: 'Skip to content', portfolio: 'Developer portfolio', menu: 'Menu', navigation: 'Main navigation', language: 'Language', legal: 'Legal pages', home: 'Home', projects: 'Projects', projectsTitle: 'Our Projects', about: 'About', intro: 'Independent developer · Görkem Karakaş', heroText: 'Building practical software, interactive products and connected systems.', viewProjects: 'View projects', aboutMe: 'About me', approach: 'Useful ideas. Thoughtful engineering. Simple experiences.', selected: 'Selected work', featured: 'Featured projects', allProjects: 'All projects', footerText: 'Practical software, built with care.', contact: 'Get in touch ↗', privacy: 'Privacy', terms: 'Terms', details: 'View project', all: 'All', filter: 'Filter', apps: 'Mobile Apps', web: 'Web', games: 'Games', iot: 'IoT / Hardware', desktop: 'Desktop', other: 'Other', collection: 'The portfolio', projectsIntro: 'Building practical products with thoughtful solutions.', count: 'projects', empty: 'No projects in this category yet. Explore the other categories.', back: '← All projects', purpose: 'The idea', technologies: 'Technologies', features: 'Key features', technicalDetails: 'Technical details', screenshots: 'Project preview', architecture: 'Architecture', profile: 'Behind the projects', aboutTitle: 'Hi, I’m Görkem.', aboutText: 'I’m an independent developer working on frontend experiences, mobile applications and IoT systems. GK Mobile Studio is where I share my software projects, from practical everyday tools to interactive products and technical experiments.', aboutApproach: 'I focus on useful features, clear interfaces and systems that are easy to understand.', tools: 'Tools', notFound: 'Project not found', notFoundText: 'This project link is unavailable. You can find the current projects in the portfolio.', meta: 'GK Mobile Studio | Software Portfolio', metaDescription: 'Görkem Karakaş’s software portfolio: mobile apps, web experiences, games and IoT systems.'
    },
    tr: {
      overview: 'Genel Bakış', gameplay: 'Oynanış', decisionMechanic: 'Karar Mekaniği', visualAtmosphere: 'Görsel / Atmosfer Tasarımı', technicalStructure: 'Teknik Yapı', usedTechnologies: 'Kullanılan Teknolojiler', play: 'Oyna',
      darkTheme: "Koyu Tema", lightTheme: "A\u00e7\u0131k Tema", heroImage: "Telefon ve diz\u00fcst\u00fc bilgisayarda mobil ve web paneli aray\u00fczleri",
      skip: 'İçeriğe geç', portfolio: 'Yazılım portföyü', menu: 'Menü', navigation: 'Ana menü', language: 'Dil', legal: 'Yasal sayfalar', home: 'Ana Sayfa', projects: 'Projeler', projectsTitle: 'Projelerimiz', about: 'Hakkımda', intro: 'Bağımsız geliştirici · Görkem Karakaş', heroText: 'Günlük hayata değer katan yazılımlar, etkileşimli ürünler ve bağlı sistemler geliştiriyorum.', viewProjects: 'Projeleri gör', aboutMe: 'Hakkımda', approach: 'Faydalı fikirler. Özenli geliştirme. Sade deneyimler.', selected: 'Seçili çalışmalar', featured: 'Öne çıkan projeler', allProjects: 'Tüm projeler', footerText: 'Özenle geliştirilen, fayda sağlayan yazılımlar.', contact: 'İletişime geç ↗', privacy: 'Gizlilik', terms: 'Koşullar', details: 'Projeyi gör', all: 'Tümü', filter: 'Filtre', apps: 'Mobil Uygulamalar', web: 'Web', games: 'Oyunlar', iot: 'IoT / Donanım', desktop: 'Masaüstü', other: 'Diğer', collection: 'Portföy', projectsIntro: 'Yenilikçi çözümlerle geleceği şekillendiriyoruz.', count: 'proje', empty: 'Bu kategoride henüz proje bulunmuyor. Diğer kategorileri keşfedebilirsiniz.', back: '← Tüm projeler', purpose: 'Projenin amacı', technologies: 'Teknolojiler', features: 'Öne çıkan özellikler', technicalDetails: 'Teknik detaylar', screenshots: 'Proje önizlemesi', architecture: 'Mimari', profile: 'Projelerin arkasında', aboutTitle: 'Merhaba, ben Görkem.', aboutText: 'Frontend, mobil uygulama geliştirme ve IoT sistemlerine ilgi duyan bağımsız bir geliştiriciyim. GK Mobile Studio; günlük hayatı kolaylaştıran araçlardan etkileşimli ürünlere ve teknik denemelere kadar yazılım projelerimi paylaştığım kişisel portföyüm.', aboutApproach: 'Faydalı özelliklere, anlaşılır arayüzlere ve kolay kavranabilen sistemlere odaklanıyorum.', tools: 'Araçlar', notFound: 'Proje bulunamadı', notFoundText: 'Bu proje bağlantısı mevcut değil. Güncel çalışmaları portföyde bulabilirsiniz.', meta: 'GK Mobile Studio | Yazılım Portföyü', metaDescription: 'Görkem Karakaş’ın yazılım portföyü: mobil uygulamalar, web deneyimleri, oyunlar ve IoT sistemleri.'
    }
  };
  let lang = 'en';
  try { if (localStorage.getItem('gk-lang') === 'tr') lang = 'tr'; } catch { /* Language still works when storage is unavailable. */ }
  let category = 'all';
  let filtersOpen = false;
  const main = document.getElementById('page-content');
  const homeTemplate = main.innerHTML;
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const t = key => copy[lang][key] || key;
  const local = value => typeof value === 'string' ? value : value?.[lang] || value?.en || '';
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const tags = values => values.length ? `<ul class="tags">${values.map(value => `<li>${escape(value)}</li>`).join('')}</ul>` : '';
  const coverMockups = {
    dashboard: `<div class="cover-mockup dashboard-mockup"><div class="mock-sidebar"><i></i><i></i><i></i><i></i></div><div class="mock-workspace"><div class="mock-toolbar"><span></span><b>4 ONLINE</b></div><div class="mock-stats"><span><b>24</b><i></i></span><span><b>98%</b><i></i></span><span><b>12ms</b><i></i></span></div><div class="mock-chart"><i></i></div></div></div>`,
    telemetry: `<div class="cover-mockup telemetry-mockup"><div class="telemetry-bar"><span>LMTS-04</span><b>50 Hz</b></div><div class="telemetry-values"><span><small>RPM</small><b>2840</b></span><span><small>VOLT</small><b>48.2</b></span><span><small>AMP</small><b>12.6</b></span></div><div class="telemetry-chart"><i></i><i></i></div></div>`,
    medieval: `<div class="cover-mockup medieval-mockup"><span class="medieval-sigil">♜</span><div class="decision-card"><i></i><b>KINGDOM</b><span>II</span></div><span class="choice-arrow choice-left">←</span><span class="choice-arrow choice-right">→</span></div>`,
    chat: `<div class="cover-mockup chat-mockup"><div class="chat-sidebar"><b></b><i></i><i></i><i></i></div><div class="chat-window"><span class="chat-status">3 ONLINE</span><i class="bubble incoming"></i><i class="bubble outgoing"></i><i class="bubble incoming short"></i><div class="chat-input"></div></div></div>`,
    notes: `<div class="cover-mockup notes-mockup"><div class="note-sheet note-back"><i></i><i></i><i></i></div><div class="note-sheet note-front"><b>TODAY</b><span><i></i></span><span><i></i></span><span><i></i></span></div><div class="note-pin"></div></div>`,
    pos: `<div class="cover-mockup pos-mockup"><div class="pos-orders"><b>ORDERS</b><span><i>01</i><em></em></span><span><i>02</i><em></em></span><span><i>03</i><em></em></span></div><div class="pos-tables"><i>01</i><i>04</i><i>07</i><strong>TOTAL</strong><b>$248</b></div></div>`
  };
  function coverContent(project) {
    if (project.coverImage) {
      return `<img class="cover-image" src="${escape(project.coverImage)}" alt="${escape(project.title + ' — ' + t(project.category))}" loading="lazy" width="1672" height="941">`;
    }
    if (project.image) {
      return `<div class="cover-mockup finance-mockup"><span class="finance-stat finance-budget" aria-hidden="true"><small>BUDGET</small><b>72%</b></span><span class="finance-stat finance-total" aria-hidden="true"><small>TOTAL</small><b>€248</b></span><i class="finance-chart" aria-hidden="true"></i><img src="${escape(project.image)}" alt="${escape(local(project.screenshots[0]?.alt))}" loading="lazy" width="1023" height="1537"></div>`;
    }
    return coverMockups[project.coverVariant] || `<span class="cover-word">${escape(project.coverTitle || project.title)}</span>`;
  }
  function card(project) {
    const playAction = project.isPlayable === true && project.playUrl
      ? `<a class="case-link" href="${escape(project.playUrl)}" aria-label="${escape(t('play') + ': ' + project.title)}"><span>${t('play')}</span><span aria-hidden="true">↗</span></a>`
      : '';
    return `<article class="project-card"><div class="project-cover cover-${project.id}${project.coverImage ? ' has-cover-image' : ''}" ${project.image || project.coverImage ? '' : 'aria-hidden="true"'}><span class="cover-index">${String(projects.indexOf(project) + 1).padStart(2, '0')} / GK</span>${coverContent(project)}<span class="cover-label">${t(project.category)}</span></div><div class="project-body"><div class="project-category">${t(project.category)}</div><h3>${escape(project.title)}</h3><p>${escape(local(project.description))}</p>${tags(project.cardTechnologies || project.technologies)}${project.highlight ? `<div class="project-highlight"><span aria-hidden="true"></span>${escape(local(project.highlight))}</div>` : ''}${playAction}<a class="case-link" href="#project/${project.id}" aria-label="${escape(t('details') + ': ' + project.title)}"><span>${t('details')}</span><span aria-hidden="true">↗</span></a></div></article>`;
  }
  const themeButton = document.querySelector('.theme-toggle');
  function updateThemeControl() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const label = t(isDark ? 'lightTheme' : 'darkTheme');
    themeButton.setAttribute('aria-label', label);
    themeButton.setAttribute('title', label);
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#101316' : '#ffffff';
  }
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('gk-theme', theme); } catch { /* Manual switching still works. */ }
    updateThemeControl();
  });
  function translate() {
    updateThemeControl();
    document.querySelectorAll('[data-alt]').forEach(el => el.setAttribute('alt', t(el.dataset.alt)));
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-copy]').forEach(el => { el.textContent = t(el.dataset.copy); });
    document.querySelectorAll('[data-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.label)); });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
  }
  function renderGrid() {
    const filtered = projects.filter(p => category === 'all' || p.category === category);
    document.getElementById('project-grid').innerHTML = filtered.length ? filtered.map(card).join('') : `<p class="empty-state">${t('empty')}</p>`;
    document.getElementById('result-count').textContent = `${filtered.length} ${t('count')}`;
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    const allButton = document.querySelector('[data-show-all]');
    if (allButton) allButton.setAttribute('aria-pressed', String(category === 'all'));
  }
  function setFiltersOpen(open) {
    filtersOpen = open;
    const toggle = document.querySelector('[data-filter-toggle]');
    const list = document.getElementById('category-filters');
    if (!toggle || !list) return;
    toggle.setAttribute('aria-expanded', String(open));
    list.hidden = !open;
  }
  function projectDetails(project) {
    if (project.gameDetails) {
      const sections = [
        ['gameplay', project.gameDetails.gameplay],
        ['decisionMechanic', project.gameDetails.decisionMechanic],
        ['visualAtmosphere', project.gameDetails.visualAtmosphere],
        ['technicalStructure', project.gameDetails.technicalStructure]
      ];
      const detailSection = ([title, content]) => `<section class="detail-section"><h2>${t(title)}</h2><p>${escape(local(content))}</p></section>`;
      return `<div class="detail-layout"><div><section class="detail-section"><h2>${t('overview')}</h2><p>${escape(local(project.purpose))}</p><ul class="feature-list">${project.features[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section>${sections.slice(0,2).map(detailSection).join('')}</div><div>${sections.slice(2).map(detailSection).join('')}</div></div>`;
    }
    return `<div class="detail-layout"><div><section class="detail-section"><h2>${t('purpose')}</h2><p>${escape(local(project.purpose))}</p></section><section class="detail-section"><h2>${t('features')}</h2><ul class="feature-list">${project.features[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section>${project.technicalDetails?.[lang]?.length ? `<section class="detail-section"><h2>${t('technicalDetails')}</h2><ul class="feature-list">${project.technicalDetails[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section>` : ''}</div><div>${project.architecture ? `<section class="detail-section"><h2>${t('architecture')}</h2><div class="architecture">${escape(local(project.architecture))}</div></section>` : ''}${project.privacy ? `<nav class="detail-legal" aria-label="${t('legal')}"><a href="${project.privacy}">${t('privacy')}</a><a href="${project.terms}">${t('terms')}</a></nav>` : ''}</div></div>`;
  }
  function projectPage(project) {
    const heroImage = project.detailImage || project.coverImage;
    const links = [
      ...(project.isPlayable === true && project.playUrl ? [['playUrl', t('play')]] : []),
      ...[['demo', 'Live Demo'], ['github', 'GitHub'], ['googlePlay', 'Google Play']]
    ].filter(([key]) => project[key]);
    return `<section class="page section-shell project-detail-page"><a class="back-link" href="#projects">${t('back')}</a>${heroImage ? `<figure class="project-detail-hero"><img src="${escape(heroImage)}" alt="${escape(project.title + ' — ' + t(project.category))}" width="1672" height="941" decoding="async"></figure>` : ''}<p class="eyebrow">${t(project.category)}${project.gameType ? ` · ${escape(local(project.gameType))}` : ''}</p><h1>${escape(project.title)}</h1><p class="page-intro">${escape(local(project.description))}</p>${project.technologies.length ? `<section class="project-detail-technologies"><h2>${t(project.gameDetails ? 'usedTechnologies' : 'technologies')}</h2>${tags(project.technologies)}</section>` : ''}${links.length ? `<div class="hero-actions">${links.map(([key,label]) => `<a class="button" href="${escape(project[key])}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}</div>` : ''}${projectDetails(project)}${project.screenshots.length ? `<section class="detail-section"><h2>${t('screenshots')}</h2><div class="gallery">${project.screenshots.map(s => `<figure><img src="${escape(s.src)}" alt="${escape(local(s.alt))}" loading="lazy"><figcaption>${escape(local(s.alt))}</figcaption></figure>`).join('')}</div></section>` : ''}</section>`;
  }
  function render(focus = false) {
    const [hash, query = ''] = location.hash.slice(1).split('?');
    const params = new URLSearchParams(query);
    let page = 'home';
    let title = t('meta');
    let description = t('metaDescription');
    if (['projects','applications','services'].includes(hash)) {
      page = 'projects';
      const requestedCategory = hash === 'applications' ? 'apps' : params.get('category');
      category = categories.includes(requestedCategory) ? requestedCategory : 'all';
      if (focus) filtersOpen = category !== 'all';
      main.innerHTML = `<section class="page section-shell projects-page"><div class="projects-heading"><h1>${t('projectsTitle')}</h1><p class="page-intro">${t('projectsIntro')}</p></div><div class="filter-controls" role="group" aria-label="${t('projects')}"><button type="button" data-show-all aria-pressed="${category === 'all'}">${t('all')}</button><button type="button" data-filter-toggle aria-expanded="${filtersOpen}" aria-controls="category-filters"><svg class="filter-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>${t('filter')}<span class="filter-chevron" aria-hidden="true">▾</span></button></div><div class="category-filters" id="category-filters" role="group" aria-label="${t('filter')}" ${filtersOpen ? '' : 'hidden'}>${categories.map(key => `<button type="button" data-filter="${key}" aria-pressed="${category === key}">${t(key)}</button>`).join('')}</div><p class="result-count" id="result-count" role="status" aria-live="polite"></p><div class="project-grid" id="project-grid"></div></section>`;
      renderGrid();
      title = `${t('projects')} | GK Mobile Studio`;
    } else if (hash === 'about') {
      page = 'about';
      const skills = [['Frontend',['React','TypeScript','JavaScript']],['Backend',['Python','FastAPI','REST API']],['Mobile',['Android','Capacitor']],['IoT',['ESP32','MQTT','WebSocket']],[t('tools'),['Git','GitHub','VS Code']]];
      main.innerHTML = `<section class="page section-shell"><p class="eyebrow">${t('profile')}</p><h1>${t('aboutTitle')}</h1><p class="about-copy">${t('aboutText')}</p><p class="page-intro">${t('aboutApproach')}</p><div class="skills-grid">${skills.map(([title,items]) => `<section><h2>${title}</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></section>`).join('')}</div><div class="about-links"><a class="button primary" href="https://github.com/gorkemkarakas" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a class="button" href="mailto:asilzade.1999@gmail.com">${t('contact')}</a></div></section>`;
      title = `${t('about')} | GK Mobile Studio`;
    } else if (hash.startsWith('project/')) {
      page = 'projects';
      const project = projects.find(p => p.id === hash.slice(8));
      main.innerHTML = project ? projectPage(project) : `<section class="page section-shell"><h1>${t('notFound')}</h1><p class="page-intro">${t('notFoundText')}</p><a class="button" href="#projects">${t('back')}</a></section>`;
      title = `${project?.title || t('notFound')} | GK Mobile Studio`;
      if (project) description = local(project.description);
    } else {
      main.innerHTML = homeTemplate;
      document.getElementById('featured-grid').innerHTML = projects.filter(p => p.featured).slice(0,4).map(card).join('');
    }
    translate();
    document.body.classList.toggle('projects-view', page === 'projects' && hash === 'projects');
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelectorAll('.nav-links a').forEach(link => {
      const target = link.getAttribute('href');
      const active = page === 'projects'
        ? target === (category === 'games' && hash === 'projects' ? '#projects?category=games' : '#projects')
        : target === ({home:'#top',about:'#about'})[page];
      if (active) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
    });
    if (focus) {
      document.getElementById('main-content').focus({preventScroll:true});
      if (hash === 'contact') document.getElementById('contact').scrollIntoView();
      else if (hash === 'whats-new') document.querySelector('.featured').scrollIntoView();
      else window.scrollTo(0,0);
    }
  }
  function closeMenu() { header.classList.remove('menu-open'); menu.setAttribute('aria-expanded','false'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; header.classList.toggle('menu-open',open); menu.setAttribute('aria-expanded',String(open)); });
  document.querySelector('.header-menu').addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
    const filter = event.target.closest('[data-filter]');
    if (filter) {
      const nextHash = `projects?category=${encodeURIComponent(filter.dataset.filter)}`;
      if (location.hash.slice(1) === nextHash) {
        category = filter.dataset.filter;
        renderGrid();
      } else location.hash = nextHash;
    }
    const showAll = event.target.closest('[data-show-all]');
    if (showAll) {
      filtersOpen = false;
      if (location.hash.slice(1) === 'projects') {
        category = 'all';
        renderGrid();
        setFiltersOpen(false);
      } else location.hash = 'projects';
    }
    const filterToggle = event.target.closest('[data-filter-toggle]');
    if (filterToggle) setFiltersOpen(!filtersOpen);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    lang = button.dataset.lang;
    try { localStorage.setItem('gk-lang',lang); } catch { /* Keep the in-memory preference. */ }
    render();
  }));
  window.addEventListener('hashchange', () => render(true));
  document.getElementById('year').textContent = new Date().getFullYear();
  render(Boolean(location.hash));
})();
