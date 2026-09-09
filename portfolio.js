(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS;
  const copy = {
    en: {
      darkTheme: 'Dark theme', lightTheme: 'Light theme', heroImage: 'Mobile and web dashboard interfaces on a phone and laptop', skip: 'Skip to content', portfolio: 'Developer portfolio', menu: 'Menu', navigation: 'Main navigation', language: 'Language', legal: 'Legal pages', home: 'Home', projects: 'Projects', about: 'About', intro: 'Independent developer · Görkem Karakaş', heroText: 'Building practical software, interactive products and connected systems.', viewProjects: 'View projects', aboutMe: 'About me', approach: 'Useful ideas. Thoughtful engineering. Simple experiences.', selected: 'Selected work', featured: 'Featured projects', allProjects: 'All projects', footerText: 'Practical software, built with care.', contact: 'Get in touch ↗', privacy: 'Privacy', terms: 'Terms', details: 'View project', all: 'All', apps: 'Apps', web: 'Web', games: 'Games', iot: 'IoT / Systems', collection: 'The portfolio', projectsIntro: 'Mobile apps, web experiences and connected systems. Explore the work by category.', count: 'projects', empty: 'No projects in this category yet. Explore the other categories.', back: '← All projects', purpose: 'The idea', technologies: 'Technologies', features: 'Key features', screenshots: 'Project preview', architecture: 'Architecture', profile: 'Behind the projects', aboutTitle: 'Hi, I’m Görkem.', aboutText: 'I’m an independent developer working on frontend experiences, mobile applications and IoT systems. GK Mobile Studio is where I share my software projects, from practical everyday tools to interactive products and technical experiments.', aboutApproach: 'I focus on useful features, clear interfaces and systems that are easy to understand.', tools: 'Tools', notFound: 'Project not found', notFoundText: 'This project link is unavailable. You can find the current projects in the portfolio.', meta: 'GK Mobile Studio | Software Portfolio', metaDescription: 'Görkem Karakaş’s software portfolio: mobile apps, web experiences, games and IoT systems.'
    },
    tr: {
      darkTheme: "Koyu Tema", lightTheme: "A\u00e7\u0131k Tema", heroImage: "Telefon ve diz\u00fcst\u00fc bilgisayarda mobil ve web paneli aray\u00fczleri",
      skip: 'İçeriğe geç', portfolio: 'Yazılım portföyü', menu: 'Menü', navigation: 'Ana menü', language: 'Dil', legal: 'Yasal sayfalar', home: 'Ana Sayfa', projects: 'Projeler', about: 'Hakkımda', intro: 'Bağımsız geliştirici · Görkem Karakaş', heroText: 'Günlük hayata değer katan yazılımlar, etkileşimli ürünler ve bağlı sistemler geliştiriyorum.', viewProjects: 'Projeleri gör', aboutMe: 'Hakkımda', approach: 'Faydalı fikirler. Özenli geliştirme. Sade deneyimler.', selected: 'Seçili çalışmalar', featured: 'Öne çıkan projeler', allProjects: 'Tüm projeler', footerText: 'Özenle geliştirilen, fayda sağlayan yazılımlar.', contact: 'İletişime geç ↗', privacy: 'Gizlilik', terms: 'Koşullar', details: 'Projeyi gör', all: 'Tümü', apps: 'Uygulamalar', web: 'Web', games: 'Oyunlar', iot: 'IoT / Sistem', collection: 'Portföy', projectsIntro: 'Mobil uygulamalar, web deneyimleri ve bağlı sistemler. Çalışmalarımı kategorilere göre keşfedin.', count: 'proje', empty: 'Bu kategoride henüz proje bulunmuyor. Diğer kategorileri keşfedebilirsiniz.', back: '← Tüm projeler', purpose: 'Projenin amacı', technologies: 'Teknolojiler', features: 'Öne çıkan özellikler', screenshots: 'Proje önizlemesi', architecture: 'Mimari', profile: 'Projelerin arkasında', aboutTitle: 'Merhaba, ben Görkem.', aboutText: 'Frontend, mobil uygulama geliştirme ve IoT sistemlerine ilgi duyan bağımsız bir geliştiriciyim. GK Mobile Studio; günlük hayatı kolaylaştıran araçlardan etkileşimli ürünlere ve teknik denemelere kadar yazılım projelerimi paylaştığım kişisel portföyüm.', aboutApproach: 'Faydalı özelliklere, anlaşılır arayüzlere ve kolay kavranabilen sistemlere odaklanıyorum.', tools: 'Araçlar', notFound: 'Proje bulunamadı', notFoundText: 'Bu proje bağlantısı mevcut değil. Güncel çalışmaları portföyde bulabilirsiniz.', meta: 'GK Mobile Studio | Yazılım Portföyü', metaDescription: 'Görkem Karakaş’ın yazılım portföyü: mobil uygulamalar, web deneyimleri, oyunlar ve IoT sistemleri.'
    }
  };
  let lang = 'en';
  try { if (localStorage.getItem('gk-lang') === 'tr') lang = 'tr'; } catch { /* Language still works when storage is unavailable. */ }
  let category = 'all';
  const main = document.getElementById('page-content');
  const homeTemplate = main.innerHTML;
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const t = key => copy[lang][key] || key;
  const local = value => value?.[lang] || value?.en || '';
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const tags = values => values.length ? `<ul class="tags">${values.map(value => `<li>${escape(value)}</li>`).join('')}</ul>` : '';
  function card(project) {
    return `<article class="project-card"><div class="project-cover cover-${project.id}" ${project.image ? '' : 'aria-hidden="true"'}><span class="cover-index">${String(projects.indexOf(project) + 1).padStart(2, '0')} / GK</span>${project.image ? `<img src="${escape(project.image)}" alt="${escape(local(project.screenshots[0]?.alt))}" loading="lazy" width="1023" height="1537">` : `<span class="cover-word">${escape(project.title)}</span>`}<span class="cover-label">${t(project.category)}</span></div><div class="project-body"><div class="project-category">${t(project.category)}</div><h3>${escape(project.title)}</h3><p>${escape(local(project.description))}</p>${tags(project.technologies)}<a class="case-link" href="#project/${project.id}" aria-label="${escape(t('details') + ': ' + project.title)}"><span>${t('details')}</span><span aria-hidden="true">↗</span></a></div></article>`;
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
  }
  function projectPage(project) {
    const links = [['demo', 'Live Demo'], ['github', 'GitHub'], ['googlePlay', 'Google Play']].filter(([key]) => project[key]);
    return `<section class="page section-shell"><a class="back-link" href="#projects">${t('back')}</a><p class="eyebrow">${t(project.category)}</p><h1>${escape(project.title)}</h1><p class="page-intro">${escape(local(project.description))}</p>${links.length ? `<div class="hero-actions">${links.map(([key,label]) => `<a class="button" href="${escape(project[key])}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}</div>` : ''}<div class="detail-layout"><div><section class="detail-section"><h2>${t('purpose')}</h2><p>${escape(local(project.purpose))}</p></section><section class="detail-section"><h2>${t('features')}</h2><ul class="feature-list">${project.features[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section></div><div>${project.technologies.length ? `<section class="detail-section"><h2>${t('technologies')}</h2>${tags(project.technologies)}</section>` : ''}${project.architecture ? `<section class="detail-section"><h2>${t('architecture')}</h2><div class="architecture">${escape(project.architecture)}</div></section>` : ''}${project.privacy ? `<nav class="detail-legal" aria-label="${t('legal')}"><a href="${project.privacy}">${t('privacy')}</a><a href="${project.terms}">${t('terms')}</a></nav>` : ''}</div></div>${project.screenshots.length ? `<section class="detail-section"><h2>${t('screenshots')}</h2><div class="gallery">${project.screenshots.map(s => `<figure><img src="${escape(s.src)}" alt="${escape(local(s.alt))}" loading="lazy"><figcaption>${escape(local(s.alt))}</figcaption></figure>`).join('')}</div></section>` : ''}</section>`;
  }
  function render(focus = false) {
    const hash = location.hash.slice(1);
    let page = 'home';
    let title = t('meta');
    let description = t('metaDescription');
    if (['projects','applications','services'].includes(hash)) {
      page = 'projects';
      if (hash === 'applications') category = 'apps';
      main.innerHTML = `<section class="page section-shell"><p class="eyebrow">${t('collection')}</p><h1>${t('projects')}</h1><p class="page-intro">${t('projectsIntro')}</p><div class="filters" role="group" aria-label="${t('projects')}">${['all','apps','web','games','iot'].map(key => `<button type="button" data-filter="${key}" aria-pressed="${category === key}">${t(key)}</button>`).join('')}</div><p class="result-count" id="result-count" role="status" aria-live="polite"></p><div class="project-grid" id="project-grid"></div></section>`;
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
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelectorAll('.nav-links a').forEach(link => {
      const active = link.hash === ({home:'#top',projects:'#projects',about:'#about'})[page];
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
    if (filter) { category = filter.dataset.filter; renderGrid(); }
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
