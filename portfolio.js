(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS;
  const categories = window.PORTFOLIO_CATEGORIES;
  const copy = {
    en: {
      projectOverview: 'Project Overview', caseStudy: 'Case Study', status: 'Status', role: 'Role', platform: 'Platform', developmentPeriod: 'Development period', challengeLabel: 'Problem / Challenge', approachLabel: 'Approach', technicalChallengeLabel: 'Technical Challenge', solutionLabel: 'Solution', outcomeLabel: 'Outcome', howItWorks: 'How it works', whyItMatters: 'Why it matters', behindProduct: 'Behind the Product', productCtaTitle: 'Have a project in mind?', productCtaText: 'Get in touch for web, mobile or IoT projects.', emailMe: 'Get in touch',
      overview: 'Overview', gameplay: 'Gameplay', decisionMechanic: 'Decision mechanic', visualAtmosphere: 'Visual / Atmosphere design', technicalStructure: 'Technical structure', usedTechnologies: 'Technologies used', play: 'Play', previousProject: 'Previous project', nextProject: 'Next project', goToProject: 'Go to project', projectNavigation: 'Project navigation', backToProjects: 'Back to Projects', miniFeatures: 'Features', miniExperience: 'How It Works', miniTechnical: 'Technical', miniGallery: 'Gallery', openMenu: 'Open menu', closeMenu: 'Close menu', projectPreview: 'project interface preview', projectShown: 'project shown', projectsShown: 'projects shown',
      darkTheme: 'Dark theme', lightTheme: 'Light theme', heroImage: 'Mobile and web dashboard interfaces on a phone and laptop', skip: 'Skip to content', portfolio: 'Developer portfolio', menu: 'Menu', navigation: 'Main navigation', language: 'Language', legal: 'Legal pages', home: 'Home', projects: 'Projects', projectsTitle: 'Our Projects', about: 'About', intro: 'Independent developer · Görkem Karakaş', heroText: 'Building practical software, interactive products and connected systems.', viewProjects: 'View projects', aboutMe: 'About me', approach: 'Useful ideas. Thoughtful engineering. Simple experiences.', selected: 'Selected work', featured: 'Featured projects', allProjects: 'All projects', footerText: 'Practical software, built with care.', contact: 'Get in touch ↗', privacy: 'Privacy', terms: 'Terms', details: 'View project', all: 'All', filter: 'Filter', apps: 'Mobile Apps', web: 'Web', games: 'Games', iot: 'IoT / Hardware', desktop: 'Desktop', other: 'Other', collection: 'The portfolio', projectsIntro: 'Building practical products with thoughtful solutions.', count: 'projects', empty: 'No projects in this category yet. Explore the other categories.', back: '← All projects', purpose: 'The idea', technologies: 'Technologies', features: 'Key features', technicalDetails: 'Technical details', screenshots: 'Project preview', architecture: 'Architecture', profile: 'Behind the projects', aboutTitle: 'Hi, I’m Görkem.', aboutText: 'I’m an independent developer working on frontend experiences, mobile applications and IoT systems. GK Mobile Studio is where I share my software projects, from practical everyday tools to interactive products and technical experiments.', aboutApproach: 'I focus on useful features, clear interfaces and systems that are easy to understand.', tools: 'Tools', notFound: 'Project not found', notFoundText: 'This project link is unavailable. You can find the current projects in the portfolio.', meta: 'GK Mobile Studio — Web, Mobile & IoT Projects', metaDescription: 'GK Mobile Studio portfolio featuring web, mobile, IoT and interactive software projects by Görkem Karakaş.'
    },
    tr: {
      projectOverview: 'Proje Özeti', caseStudy: 'Vaka Çalışması', status: 'Durum', role: 'Rol', platform: 'Platform', developmentPeriod: 'Geliştirme Dönemi', challengeLabel: 'Problem / İhtiyaç', approachLabel: 'Yaklaşım', technicalChallengeLabel: 'Teknik Zorluk', solutionLabel: 'Çözüm', outcomeLabel: 'Sonuç', howItWorks: 'Nasıl çalışır?', whyItMatters: 'Neden değerli?', behindProduct: 'Ürünün Teknik Tarafı', productCtaTitle: 'Bir proje fikriniz mi var?', productCtaText: 'Web, mobil veya IoT projeleri için iletişime geçebilirsiniz.', emailMe: 'İletişime geç',
      overview: 'Genel Bakış', gameplay: 'Oynanış', decisionMechanic: 'Karar Mekaniği', visualAtmosphere: 'Görsel / Atmosfer Tasarımı', technicalStructure: 'Teknik Yapı', usedTechnologies: 'Kullanılan Teknolojiler', play: 'Oyna', previousProject: 'Önceki proje', nextProject: 'Sonraki proje', goToProject: 'Projeye git', projectNavigation: 'Proje navigasyonu', backToProjects: 'Projelere Dön', miniFeatures: 'Özellikler', miniExperience: 'Nasıl Çalışır', miniTechnical: 'Teknik', miniGallery: 'Galeri', openMenu: 'Menüyü aç', closeMenu: 'Menüyü kapat', projectPreview: 'proje arayüzü önizlemesi', projectShown: 'proje gösteriliyor', projectsShown: 'proje gösteriliyor',
      darkTheme: "Koyu Tema", lightTheme: "A\u00e7\u0131k Tema", heroImage: "Telefon ve diz\u00fcst\u00fc bilgisayarda mobil ve web paneli aray\u00fczleri",
      skip: 'İçeriğe geç', portfolio: 'Yazılım portföyü', menu: 'Menü', navigation: 'Ana menü', language: 'Dil', legal: 'Yasal sayfalar', home: 'Ana Sayfa', projects: 'Projeler', projectsTitle: 'Projelerimiz', about: 'Hakkımda', intro: 'Bağımsız geliştirici · Görkem Karakaş', heroText: 'Günlük hayata değer katan yazılımlar, etkileşimli ürünler ve bağlı sistemler geliştiriyorum.', viewProjects: 'Projeleri gör', aboutMe: 'Hakkımda', approach: 'Faydalı fikirler. Özenli geliştirme. Sade deneyimler.', selected: 'Seçili çalışmalar', featured: 'Öne çıkan projeler', allProjects: 'Tüm projeler', footerText: 'Özenle geliştirilen, fayda sağlayan yazılımlar.', contact: 'İletişime geç ↗', privacy: 'Gizlilik', terms: 'Koşullar', details: 'Projeyi gör', all: 'Tümü', filter: 'Filtre', apps: 'Mobil Uygulamalar', web: 'Web', games: 'Oyunlar', iot: 'IoT / Donanım', desktop: 'Masaüstü', other: 'Diğer', collection: 'Portföy', projectsIntro: 'Yenilikçi çözümlerle geleceği şekillendiriyoruz.', count: 'proje', empty: 'Bu kategoride henüz proje bulunmuyor. Diğer kategorileri keşfedebilirsiniz.', back: '← Tüm projeler', purpose: 'Projenin amacı', technologies: 'Teknolojiler', features: 'Öne çıkan özellikler', technicalDetails: 'Teknik detaylar', screenshots: 'Proje önizlemesi', architecture: 'Mimari', profile: 'Projelerin arkasında', aboutTitle: 'Merhaba, ben Görkem.', aboutText: 'Frontend, mobil uygulama geliştirme ve IoT sistemlerine ilgi duyan bağımsız bir geliştiriciyim. GK Mobile Studio; günlük hayatı kolaylaştıran araçlardan etkileşimli ürünlere ve teknik denemelere kadar yazılım projelerimi paylaştığım kişisel portföyüm.', aboutApproach: 'Faydalı özelliklere, anlaşılır arayüzlere ve kolay kavranabilen sistemlere odaklanıyorum.', tools: 'Araçlar', notFound: 'Proje bulunamadı', notFoundText: 'Bu proje bağlantısı mevcut değil. Güncel çalışmaları portföyde bulabilirsiniz.', meta: 'GK Mobile Studio — Web, Mobil ve IoT Projeleri', metaDescription: 'Görkem Karakaş’ın web, mobil, IoT ve etkileşimli yazılım projelerini içeren GK Mobile Studio portföyü.'
    }
  };
  let lang = 'en';
  try { if (localStorage.getItem('gk-lang') === 'tr') lang = 'tr'; } catch { /* Language still works when storage is unavailable. */ }
  let category = 'all';
  let filtersOpen = false;
  let featuredIndex = 0;
  let featuredResizeHandler = null;
  let projectSectionObserver = null;
  let pendingProjectScrollRestore = null;
  let projectReturnState = { hash: '#projects', scrollY: 0 };
  const main = document.getElementById('page-content');
  const homeTemplate = main.innerHTML;
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let animationsEnabled = 'IntersectionObserver' in window && !reducedMotionQuery.matches;
  const syncAnimationState = () => {
    animationsEnabled = 'IntersectionObserver' in window && !reducedMotionQuery.matches;
    document.documentElement.classList.toggle('js-anim', animationsEnabled);
  };
  syncAnimationState();
  if (typeof reducedMotionQuery.addEventListener === 'function') reducedMotionQuery.addEventListener('change', syncAnimationState);
  let revealObserver = null;
  function observeReveals() {
    if (!animationsEnabled) return;
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    }
    main.querySelectorAll('.reveal:not(.reveal-visible)').forEach(el => revealObserver.observe(el));
  }
  function syncHeaderHeight() {
    document.documentElement.classList.toggle('header-is-scrolled', header.classList.contains('is-scrolled'));
  }
  function setActiveProjectSection(targetId) {
    main.querySelectorAll('[data-project-scroll]').forEach(button => {
      if (button.dataset.projectScroll === targetId) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }
  function initProjectMiniNav() {
    projectSectionObserver?.disconnect();
    projectSectionObserver = null;
    const buttons = [...main.querySelectorAll('[data-project-scroll]')];
    if (!buttons.length || !('IntersectionObserver' in window)) return;
    const visibleSections = new Map();
    const targets = buttons.map(button => document.getElementById(button.dataset.projectScroll)).filter(Boolean);
    if (!targets.length) return;
    setActiveProjectSection(targets[0].id);
    projectSectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visibleSections.set(entry.target.id, entry.intersectionRatio);
        else visibleSections.delete(entry.target.id);
      });
      const active = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
      if (active) setActiveProjectSection(active[0]);
    }, { rootMargin: `-${Math.ceil(header.getBoundingClientRect().height + 72)}px 0px -55% 0px`, threshold: [0, .15, .35, .6] });
    targets.forEach(target => projectSectionObserver.observe(target));
  }
  let navigateTimer = 0;
  function navigate() {
    const [newHashBase] = location.hash.slice(1).split('?');
    if (document.querySelector('.project-detail-page') && ['projects','applications','services'].includes(newHashBase) && location.hash === projectReturnState.hash) {
      pendingProjectScrollRestore = projectReturnState.scrollY;
    }
    const stayingOnProjectsGrid = document.body.classList.contains('projects-view') && ['projects','applications','services'].includes(newHashBase);
    if (stayingOnProjectsGrid) {
      applyProjectsFilterFromHash();
      return;
    }
    if (!animationsEnabled) { render(true); return; }
    window.clearTimeout(navigateTimer);
    main.classList.add('page-transition-hide');
    navigateTimer = window.setTimeout(() => {
      render(true);
      requestAnimationFrame(() => requestAnimationFrame(() => main.classList.remove('page-transition-hide')));
    }, 160);
  }
  const fineHoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  let cardTiltEnabled = fineHoverQuery.matches && !reducedMotionQuery.matches;
  const CARD_MAX_TILT_DEG = 3;
  let tiltCard = null;
  let tiltRect = null;
  let tiltPendingX = 0;
  let tiltPendingY = 0;
  let tiltTicking = false;
  function resetTiltCard() {
    if (tiltCard) {
      tiltCard.style.removeProperty('--tilt-x');
      tiltCard.style.removeProperty('--tilt-y');
      tiltCard.style.removeProperty('--mx');
      tiltCard.style.removeProperty('--my');
    }
    tiltCard = null;
    tiltRect = null;
  }
  function applyTiltFrame() {
    tiltTicking = false;
    if (!tiltCard || !tiltRect) return;
    const relX = Math.min(1, Math.max(0, (tiltPendingX - tiltRect.left) / tiltRect.width));
    const relY = Math.min(1, Math.max(0, (tiltPendingY - tiltRect.top) / tiltRect.height));
    const rotateY = (relX - 0.5) * 2 * CARD_MAX_TILT_DEG;
    const rotateX = -(relY - 0.5) * 2 * CARD_MAX_TILT_DEG;
    tiltCard.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
    tiltCard.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
    tiltCard.style.setProperty('--mx', `${(relX * 100).toFixed(1)}%`);
    tiltCard.style.setProperty('--my', `${(relY * 100).toFixed(1)}%`);
  }
  function handleCardPointerMove(event) {
    if (!cardTiltEnabled) return;
    const card = event.target.closest('.project-card');
    if (card !== tiltCard) {
      resetTiltCard();
      if (card) {
        tiltCard = card;
        tiltRect = card.getBoundingClientRect();
      }
    }
    if (!tiltCard) return;
    tiltPendingX = event.clientX;
    tiltPendingY = event.clientY;
    if (!tiltTicking) {
      tiltTicking = true;
      requestAnimationFrame(applyTiltFrame);
    }
  }
  document.addEventListener('pointermove', handleCardPointerMove, { passive: true });
  document.addEventListener('pointerleave', resetTiltCard);
  const syncCardTiltState = () => {
    cardTiltEnabled = fineHoverQuery.matches && !reducedMotionQuery.matches;
    if (!cardTiltEnabled) resetTiltCard();
  };
  if (typeof fineHoverQuery.addEventListener === 'function') fineHoverQuery.addEventListener('change', syncCardTiltState);
  if (typeof reducedMotionQuery.addEventListener === 'function') reducedMotionQuery.addEventListener('change', syncCardTiltState);
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
    pos: `<div class="cover-mockup pos-mockup"><div class="pos-orders"><b>ORDERS</b><span><i>01</i><em></em></span><span><i>02</i><em></em></span><span><i>03</i><em></em></span></div><div class="pos-tables"><i>01</i><i>04</i><i>07</i><strong>TOTAL</strong><b>$248</b></div></div>`,
    aqua: `<div class="cover-mockup aqua-mockup"><div class="aqua-stats"><span><small>DAILY</small><b>72%</b></span><i>+250 ML</i></div><div class="water-tank"><span></span><i></i><b>1.4 L</b></div><div class="aqua-streak">7 DAY STREAK</div></div>`,
    arcane: `<div class="cover-mockup arcane-mockup"><div class="arcane-level">LV. 12 <i></i></div><span class="arcane-player">✦</span><i class="arcane-orb orb-one"></i><i class="arcane-orb orb-two"></i><i class="arcane-orb orb-three"></i><b class="arcane-boss">BOSS</b></div>`,
    garden: `<div class="cover-mockup garden-mockup"><i class="garden-leaf leaf-one"></i><i class="garden-leaf leaf-two"></i><div class="garden-fountain"><span></span><b>✦</b></div><span class="garden-coin coin-one">●</span><span class="garden-coin coin-two">●</span><em>12 / 48 FOUND</em></div>`,
    mining: `<div class="cover-mockup mining-mockup"><div class="mine-sky"><i></i><i></i></div><div class="mine-ground"><span class="mine-shaft"></span><span class="mine-truck">▰<i></i><i></i></span><b>+24 ORE</b></div></div>`
  };
  function coverPicture(project, { detail = false, eager = false } = {}) {
    const projectTitle = local(project.title);
    const webp = detail ? project.coverImage : project.coverThumbnail || project.coverImage;
    const fallback = project.coverFallback || webp;
    /* Card copy already names the project; keep those thumbnails decorative.
       Detail-page covers retain a concise description. */
    const alt = detail ? escape(projectTitle + ' — ' + t('projectPreview')) : '';
    const loading = detail || eager ? 'eager' : 'lazy';
    const priority = detail || eager ? ' fetchpriority="high"' : '';
    const width = detail ? 1440 : 800;
    const height = detail ? 810 : 450;
    if (!webp) return '';
    if (!/\.webp(?:$|\?)/i.test(webp)) {
      return `<img class="cover-image" src="${escape(webp)}" alt="${alt}" loading="${loading}" decoding="async"${priority} width="${width}" height="${height}">`;
    }
    const srcset = detail && project.coverThumbnail
      ? `${escape(project.coverThumbnail)} 800w, ${escape(project.coverImage)} 1440w`
      : `${escape(webp)} ${width}w`;
    const sizes = detail ? '(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 760px' : '(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw';
    return `<picture class="cover-picture"><source type="image/webp" srcset="${srcset}" sizes="${sizes}"><img class="cover-image" src="${escape(fallback)}" alt="${alt}" loading="${loading}" decoding="async"${priority} width="${width}" height="${height}"></picture>`;
  }
  function coverContent(project, options = {}) {
    const projectTitle = local(project.title);
    if (project.coverImage) return coverPicture(project, options);
    if (project.image) {
      const image = /\.webp(?:$|\?)/i.test(project.image)
        ? `<picture><source type="image/webp" srcset="${escape(project.image)}"><img src="${escape(project.imageFallback || project.image)}" alt="" loading="lazy" decoding="async" width="960" height="1442"></picture>`
        : `<img src="${escape(project.image)}" alt="" loading="lazy" decoding="async" width="1023" height="1537">`;
      return `<div class="cover-mockup finance-mockup"><span class="finance-stat finance-budget" aria-hidden="true"><small>BUDGET</small><b>72%</b></span><span class="finance-stat finance-total" aria-hidden="true"><small>TOTAL</small><b>€248</b></span><i class="finance-chart" aria-hidden="true"></i>${image}</div>`;
    }
    return coverMockups[project.coverVariant] || `<span class="cover-word">${escape(project.coverTitle || projectTitle)}</span>`;
  }
  function card(project, options = {}) {
    const projectTitle = local(project.title);
    const playAction = project.isPlayable === true && project.playUrl
      ? `<a class="case-link" href="${escape(project.playUrl)}" aria-label="${escape(t('play') + ': ' + projectTitle)}"><span>${t('play')}</span><span aria-hidden="true">↗</span></a>`
      : '';
    return `<article class="project-card" data-project-card><div class="project-cover cover-${project.id}${project.coverImage ? ' has-cover-image' : ''}" aria-hidden="true"><span class="cover-index">${String(projects.indexOf(project) + 1).padStart(2, '0')} / GK</span>${coverContent(project, options)}<span class="cover-label">${t(project.category)}</span></div><div class="project-body"><div class="project-category">${t(project.category)}</div><h3>${escape(projectTitle)}</h3><p>${escape(local(project.description))}</p>${tags(project.cardTechnologies || project.technologies)}${project.highlight ? `<div class="project-highlight"><span aria-hidden="true"></span>${escape(local(project.highlight))}</div>` : ''}${playAction}<a class="case-link" data-card-link href="#project/${project.id}" aria-label="${escape(t('details') + ': ' + projectTitle)}"><span>${t('details')}</span><span aria-hidden="true">↗</span></a></div></article>`;
  }
  function initFeaturedCarousel() {
    const root = document.querySelector('[data-featured-carousel]');
    if (!root) return;
    const featuredProjects = projects.filter(project => project.featured === true);
    const track = root.querySelector('#featured-grid');
    const viewport = root.querySelector('[data-carousel-viewport]');
    const indicators = root.querySelector('[data-carousel-indicators]');
    const status = root.querySelector('[data-carousel-status]');
    const previousButton = root.querySelector('[data-carousel-prev]');
    const nextButton = root.querySelector('[data-carousel-next]');
    if (!featuredProjects.length) {
      root.hidden = true;
      return;
    }

    const cloneCount = Math.min(2, featuredProjects.length);
    const before = featuredProjects.slice(-cloneCount).map((project, index) => ({ project, index: featuredProjects.length - cloneCount + index }));
    const originals = featuredProjects.map((project, index) => ({ project, index }));
    const after = featuredProjects.slice(0, cloneCount).map((project, index) => ({ project, index }));
    const entries = [...before, ...originals, ...after];
    featuredIndex = Math.min(featuredIndex, featuredProjects.length - 1);
    track.innerHTML = entries.map(({ project, index }, trackIndex) => `<div class="carousel-slide" data-carousel-index="${index}" data-track-index="${trackIndex}" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${featuredProjects.length}">${card(project, { eager: index === 0 && trackIndex === cloneCount })}</div>`).join('');
    indicators.innerHTML = featuredProjects.map((project, index) => `<button type="button" class="carousel-dot" data-carousel-dot="${index}" aria-label="${escape(t('goToProject') + ' ' + (index + 1) + ': ' + local(project.title))}"></button>`).join('');
    previousButton.setAttribute('aria-label', t('previousProject'));
    nextButton.setAttribute('aria-label', t('nextProject'));
    previousButton.hidden = featuredProjects.length < 2;
    nextButton.hidden = featuredProjects.length < 2;

    const state = {
      current: featuredIndex,
      trackIndex: cloneCount + featuredIndex,
      animating: false,
      timer: 0
    };
    const slides = [...track.children];
    const dots = [...indicators.children];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const visibleCount = () => Math.min(featuredProjects.length, window.innerWidth < 700 ? 1 : window.innerWidth < 1050 ? 2 : 3);
    const activeSlot = count => count === 3 ? 1 : 0;

    function updateControls(count) {
      const slot = activeSlot(count);
      const firstVisible = state.trackIndex - slot;
      slides.forEach((slide, index) => {
        const visible = index >= firstVisible && index < firstVisible + count;
        const active = index === state.trackIndex;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!visible));
        if (active) slide.setAttribute('aria-current', 'true');
        else slide.removeAttribute('aria-current');
        slide.toggleAttribute('inert', !visible);
      });
      dots.forEach((dot, index) => {
        const active = index === state.current;
        dot.classList.toggle('is-active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    }

    function position(animate = true) {
      const count = visibleCount();
      const width = viewport.clientWidth / count;
      const offset = state.trackIndex - activeSlot(count);
      root.style.setProperty('--carousel-visible', count);
      if (!animate) track.classList.add('is-resetting');
      track.style.transform = `translate3d(${-offset * width}px,0,0)`;
      updateControls(count);
      if (!animate) requestAnimationFrame(() => requestAnimationFrame(() => track.classList.remove('is-resetting')));
    }

    function finishTransition() {
      clearTimeout(state.timer);
      if (state.trackIndex < cloneCount) state.trackIndex += featuredProjects.length;
      if (state.trackIndex >= cloneCount + featuredProjects.length) state.trackIndex -= featuredProjects.length;
      state.animating = false;
      position(false);
    }

    function move(delta) {
      if (state.animating || featuredProjects.length < 2) return;
      state.current = (state.current + delta + featuredProjects.length) % featuredProjects.length;
      featuredIndex = state.current;
      state.trackIndex += delta;
      state.animating = true;
      position(!reducedMotion.matches);
      status.textContent = `${local(featuredProjects[state.current].title)} — ${state.current + 1} / ${featuredProjects.length}`;
      if (reducedMotion.matches) finishTransition();
      else state.timer = window.setTimeout(finishTransition, 550);
    }

    function goTo(index) {
      if (state.animating || index === state.current) return;
      state.current = index;
      featuredIndex = index;
      state.trackIndex = cloneCount + index;
      state.animating = true;
      position(!reducedMotion.matches);
      status.textContent = `${local(featuredProjects[index].title)} — ${index + 1} / ${featuredProjects.length}`;
      if (reducedMotion.matches) finishTransition();
      else state.timer = window.setTimeout(finishTransition, 550);
    }

    previousButton.addEventListener('click', () => move(-1));
    nextButton.addEventListener('click', () => move(1));
    indicators.addEventListener('click', event => {
      const dot = event.target.closest('[data-carousel-dot]');
      if (dot) goTo(Number(dot.dataset.carouselDot));
    });
    track.addEventListener('transitionend', event => {
      if (event.target === track && event.propertyName === 'transform' && state.animating) finishTransition();
    });
    root.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    });

    let touchX = 0;
    let touchY = 0;
    let suppressCardClickUntil = 0;
    viewport.addEventListener('touchstart', event => {
      touchX = event.changedTouches[0].clientX;
      touchY = event.changedTouches[0].clientY;
    }, { passive: true });
    viewport.addEventListener('touchend', event => {
      const deltaX = event.changedTouches[0].clientX - touchX;
      const deltaY = event.changedTouches[0].clientY - touchY;
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
        event.preventDefault();
        suppressCardClickUntil = Date.now() + 500;
        move(deltaX < 0 ? 1 : -1);
      }
    }, { passive: false });
    viewport.addEventListener('click', event => {
      if (Date.now() < suppressCardClickUntil && event.target.closest('[data-project-card]')) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);

    if (featuredResizeHandler) window.removeEventListener('resize', featuredResizeHandler);
    featuredResizeHandler = () => {
      clearTimeout(state.timer);
      state.animating = false;
      state.trackIndex = cloneCount + state.current;
      position(false);
    };
    window.addEventListener('resize', featuredResizeHandler);
    position(false);
  }
  const themeButton = document.querySelector('.theme-toggle');
  const themeRoot = document.documentElement;
  const THEME_TRANSITION_MS = 240;
  let themeTransitionTimer = 0;
  function updateThemeControl() {
    const isDark = themeRoot.dataset.theme === 'dark';
    const label = t(isDark ? 'lightTheme' : 'darkTheme');
    themeButton.setAttribute('aria-label', label);
    themeButton.setAttribute('title', label);
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#101316' : '#ffffff';
  }
  themeButton.addEventListener('click', () => {
    const theme = themeRoot.dataset.theme === 'dark' ? 'light' : 'dark';
    window.clearTimeout(themeTransitionTimer);

    if (!reducedMotionQuery.matches) {
      if (!themeRoot.classList.contains('theme-transition')) {
        themeRoot.classList.add('theme-transition');
        /* Commit the transition rule before changing its registered values. */
        getComputedStyle(themeRoot).getPropertyValue('--bg');
      }
      themeButton.classList.remove('is-switching');
      void themeButton.offsetWidth;
      themeButton.classList.add('is-switching');
    } else {
      themeRoot.classList.remove('theme-transition');
      themeButton.classList.remove('is-switching');
    }

    themeRoot.dataset.theme = theme;
    try { localStorage.setItem('gk-theme', theme); } catch { /* Manual switching still works. */ }
    updateThemeControl();

    themeTransitionTimer = window.setTimeout(() => {
      themeRoot.classList.remove('theme-transition');
      themeButton.classList.remove('is-switching');
    }, THEME_TRANSITION_MS + 40);
  });
  function translate() {
    updateThemeControl();
    updateMenuControl();
    document.querySelectorAll('[data-alt]').forEach(el => el.setAttribute('alt', t(el.dataset.alt)));
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-copy]').forEach(el => { el.textContent = t(el.dataset.copy); });
    document.querySelectorAll('[data-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.label)); });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
  }
  function revealDelayClass(index) {
    const step = index % 4;
    return step ? ` reveal-delay-${step}` : '';
  }
  function renderGrid(options = {}) {
    resetTiltCard();
    const filtered = projects.filter(p => category === 'all' || p.category === category);
    const gridEl = document.getElementById('project-grid');
    gridEl.innerHTML = filtered.length
      ? filtered.map((project, index) => options.skipReveal
          ? `<div class="project-card-reveal">${card(project)}</div>`
          : `<div class="project-card-reveal reveal${revealDelayClass(index)}">${card(project)}</div>`
        ).join('')
      : `<p class="empty-state">${t('empty')}</p>`;
    document.getElementById('result-count').textContent = `${filtered.length} ${t(filtered.length === 1 ? 'projectShown' : 'projectsShown')}`;
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    const allButton = document.querySelector('[data-show-all]');
    if (allButton) allButton.setAttribute('aria-pressed', String(category === 'all'));
    if (options.skipReveal && filtered.length) {
      const cards = [...gridEl.children];
      cards.forEach((cardEl, index) => {
        cardEl.classList.add('filter-card-enter');
        cardEl.style.transitionDelay = `${Math.min(index % 4, 3) * 40}ms`;
      });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        cards.forEach(cardEl => {
          cardEl.classList.add('filter-card-enter-active');
          cardEl.classList.remove('filter-card-enter');
        });
      }));
      window.setTimeout(() => {
        cards.forEach(cardEl => {
          cardEl.classList.remove('filter-card-enter-active');
          cardEl.style.transitionDelay = '';
        });
      }, 500);
    }
  }
  function setFiltersOpen(open) {
    filtersOpen = open;
    const toggle = document.querySelector('[data-filter-toggle]');
    const list = document.getElementById('category-filters');
    if (!toggle || !list) return;
    toggle.setAttribute('aria-expanded', String(open));
    list.hidden = !open;
  }
  let gridTransitionToken = 0;
  function transitionProjectGrid() {
    const token = ++gridTransitionToken;
    const gridEl = document.getElementById('project-grid');
    if (!gridEl || !animationsEnabled) {
      renderGrid();
      observeReveals();
      return;
    }
    const existingCards = [...gridEl.children];
    gridEl.style.minHeight = `${gridEl.getBoundingClientRect().height}px`;
    const swap = () => {
      if (token !== gridTransitionToken) return;
      renderGrid({ skipReveal: true });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (token === gridTransitionToken) gridEl.style.minHeight = '';
      }));
    };
    if (!existingCards.length) { swap(); return; }
    existingCards.forEach(cardEl => cardEl.classList.add('filter-card-exit'));
    window.setTimeout(swap, 150);
  }
  function applyProjectsFilterFromHash() {
    const [hash, query = ''] = location.hash.slice(1).split('?');
    const params = new URLSearchParams(query);
    const requestedCategory = hash === 'applications' ? 'apps' : params.get('category');
    category = categories.includes(requestedCategory) ? requestedCategory : 'all';
    setFiltersOpen(category !== 'all');
    updateActiveNavLink('projects', hash);
    transitionProjectGrid();
  }
  function projectDetails(project) {
    if (project.gameDetails) {
      const sections = [
        ['gameplay', project.gameDetails.gameplay],
        ['decisionMechanic', project.gameDetails.decisionMechanic],
        ['visualAtmosphere', project.gameDetails.visualAtmosphere],
        ['technicalStructure', project.gameDetails.technicalStructure]
      ];
      const detailSection = ([title, content], index = 0) => `<section class="detail-section reveal${revealDelayClass(index)}"><h2>${t(title)}</h2><p>${escape(local(content))}</p></section>`;
      return `<div class="detail-layout"><div><section class="detail-section reveal"><h2>${t('overview')}</h2><p>${escape(local(project.purpose))}</p><ul class="feature-list">${project.features[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section>${sections.slice(0,2).map((section, index) => detailSection(section, index + 1)).join('')}</div><div>${sections.slice(2).map((section, index) => detailSection(section, index + 1)).join('')}</div></div>`;
    }
    const extraSections = (project.detailSections || []).map((section, index) => {
      const items = local(section.items);
      return `<section class="detail-section reveal${revealDelayClass(index)}"><h2>${escape(local(section.title))}</h2>${section.content ? `<p>${escape(local(section.content))}</p>` : ''}${Array.isArray(items) && items.length ? `<ul class="feature-list">${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : ''}</section>`;
    }).join('');
    return `<div class="detail-layout"><div><section class="detail-section reveal"><h2>${t('purpose')}</h2><p>${escape(local(project.purpose))}</p></section><section class="detail-section reveal reveal-delay-1"><h2>${t('features')}</h2><ul class="feature-list">${project.features[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section>${project.technicalDetails?.[lang]?.length ? `<section class="detail-section reveal reveal-delay-2"><h2>${t('technicalDetails')}</h2><ul class="feature-list">${project.technicalDetails[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section>` : ''}</div><div>${extraSections}${project.architecture ? `<section class="detail-section reveal"><h2>${t('architecture')}</h2><div class="architecture">${escape(local(project.architecture))}</div></section>` : ''}${project.privacy ? `<nav class="detail-legal" aria-label="${t('legal')}"><a href="${project.privacy}">${t('privacy')}</a><a href="${project.terms}">${t('terms')}</a></nav>` : ''}</div></div>`;
  }
  function projectGallery(project) {
    if (!project.screenshots.length) return '';
    return `<section class="detail-section project-gallery reveal" id="gallery"><h2>${t('screenshots')}</h2><div class="gallery">${project.screenshots.map((s, index) => `<figure class="reveal${revealDelayClass(index)}">${/\.webp(?:$|\?)/i.test(s.src) ? `<picture><source type="image/webp" srcset="${escape(s.src)}"><img src="${escape(s.fallback || s.src)}" alt="${escape(local(s.alt))}" loading="lazy" decoding="async" width="${s.width || 1200}" height="${s.height || 800}"></picture>` : `<img src="${escape(s.src)}" alt="${escape(local(s.alt))}" loading="lazy" decoding="async" width="${s.width || 1200}" height="${s.height || 800}">`}<figcaption>${escape(local(s.alt))}</figcaption></figure>`).join('')}</div></section>`;
  }
  function projectMetadata(project) {
    const fields = [
      ['status', project.status],
      ['role', project.role],
      ['platform', project.platform],
      ['developmentPeriod', project.developmentPeriod]
    ].filter(([, value]) => local(value));
    if (!fields.length) return '';
    return `<dl class="project-meta">${fields.map(([label, value]) => `<div class="project-meta-item"><dt>${t(label)}</dt><dd>${escape(local(value))}</dd></div>`).join('')}</dl>`;
  }
  function productFeatureIcon(index) {
    const icons = [
      '<path d="M4 12h16M12 4v16"/>',
      '<path d="M4 16l4-5 4 3 4-7 4 3"/>',
      '<circle cx="12" cy="12" r="7"/><path d="M12 8v4l3 2"/>',
      '<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6M9 13h6"/>',
      '<path d="M12 3l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8z"/>',
      '<path d="M5 17V9m7 8V5m7 12v-6"/>'
    ];
    return `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[index % icons.length]}</svg>`;
  }
  function productFeatures(project) {
    const features = local(project.featureShowcase);
    if (!Array.isArray(features) || !features.length) return '';
    return `<section class="product-section product-features reveal" id="features"><p class="section-kicker">01 / FEATURES</p><h2>${t('features')}</h2><div class="product-feature-grid">${features.map((feature, index) => `<article class="product-feature-card reveal${revealDelayClass(index)}"><span class="product-feature-icon">${productFeatureIcon(index)}</span><h3>${escape(feature.title)}</h3><p>${escape(feature.description)}</p></article>`).join('')}</div></section>`;
  }
  function productExperience(project) {
    const flow = local(project.productFlow);
    if (!local(project.productExperience) && (!Array.isArray(flow) || !flow.length)) return '';
    return `<section class="product-section product-experience reveal" id="experience"><div class="product-section-heading"><div><p class="section-kicker">02 / EXPERIENCE</p><h2>${t('howItWorks')}</h2></div>${local(project.productExperience) ? `<p>${escape(local(project.productExperience))}</p>` : ''}</div>${Array.isArray(flow) && flow.length ? `<ol class="product-flow">${flow.map((step, index) => `<li class="reveal${revealDelayClass(index)}"><span aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h3>${escape(step.title)}</h3><p>${escape(step.description)}</p></li>`).join('')}</ol>` : ''}</section>`;
  }
  function productValue(project) {
    if (!local(project.valueProposition)) return '';
    return `<section class="product-value reveal"><div><p class="section-kicker">03 / VALUE</p><h2>${t('whyItMatters')}</h2></div><p>${escape(local(project.valueProposition))}</p></section>`;
  }
  function behindProduct(project) {
    const storyFields = [
      ['technicalChallengeLabel', project.technicalChallenge],
      ['solutionLabel', project.solution],
      ['outcomeLabel', project.outcome]
    ].filter(([, value]) => local(value));
    const technicalDetails = project.technicalDetails?.[lang]?.length
      ? `<section class="behind-detail"><h3>${t('technicalDetails')}</h3><ul class="feature-list">${project.technicalDetails[lang].map(item => `<li>${escape(item)}</li>`).join('')}</ul></section>`
      : '';
    const architecture = local(project.architecture)
      ? `<section class="behind-detail"><h3>${t('architecture')}</h3><div class="architecture">${escape(local(project.architecture))}</div></section>`
      : '';
    const extraSections = (project.detailSections || []).map(section => {
      const items = local(section.items);
      return `<section class="behind-detail"><h3>${escape(local(section.title))}</h3>${section.content ? `<p>${escape(local(section.content))}</p>` : ''}${Array.isArray(items) && items.length ? `<ul class="feature-list">${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : ''}</section>`;
    }).join('');
    const legal = project.privacy
      ? `<nav class="detail-legal" aria-label="${t('legal')}"><a href="${project.privacy}">${t('privacy')}</a><a href="${project.terms}">${t('terms')}</a></nav>`
      : '';
    if (!storyFields.length && !technicalDetails && !architecture && !extraSections && !legal) return '';
    return `<section class="product-section behind-product reveal" id="technical"><p class="section-kicker">04 / BUILD</p><h2>${t('behindProduct')}</h2>${storyFields.length ? `<div class="technical-story">${storyFields.map(([label, value], index) => `<article class="reveal${revealDelayClass(index)}"><h3>${t(label)}</h3><p>${escape(local(value))}</p></article>`).join('')}</div>` : ''}${technicalDetails || architecture || extraSections ? `<div class="behind-details-grid">${technicalDetails}${architecture}${extraSections}</div>` : ''}${legal}</section>`;
  }
  function productTechnologies(project) {
    if (!project.technologies.length) return '';
    return `<section class="product-section product-technologies reveal" id="technologies"><p class="section-kicker">05 / STACK</p><h2>${t('technologies')}</h2>${tags(project.technologies)}</section>`;
  }
  function projectMiniNav(project, isProductShowcase) {
    const projectTitle = local(project.title);
    const returnHash = projectReturnState.hash.startsWith('#projects') ? projectReturnState.hash : '#projects';
    const sectionLinks = [];
    if (isProductShowcase) {
      if (Array.isArray(local(project.featureShowcase)) && local(project.featureShowcase).length) sectionLinks.push(['features', t('miniFeatures')]);
      if (local(project.productExperience) || local(project.productFlow)?.length) sectionLinks.push(['experience', t('miniExperience')]);
      const hasTechnical = local(project.technicalChallenge) || local(project.solution) || local(project.outcome) || project.technicalDetails?.[lang]?.length || local(project.architecture) || project.detailSections?.length || project.privacy;
      if (hasTechnical) sectionLinks.push(['technical', t('miniTechnical')]);
      else if (project.technologies.length) sectionLinks.push(['technologies', t('miniTechnical')]);
      if (project.screenshots.length && sectionLinks.length < 4) sectionLinks.push(['gallery', t('miniGallery')]);
    }
    return `<nav class="project-mini-nav" aria-label="${escape(t('projectNavigation'))}"><a class="project-mini-back" href="${escape(returnHash)}" data-project-back><span aria-hidden="true">←</span><span>${t('backToProjects')}</span></a><strong class="project-mini-title" title="${escape(projectTitle)}">${escape(projectTitle)}</strong>${sectionLinks.length ? `<div class="project-mini-links">${sectionLinks.map(([target, label]) => `<button type="button" data-project-scroll="${target}">${label}</button>`).join('')}</div>` : ''}</nav>`;
  }
  function productCta() {
    return `<section class="product-cta reveal"><div><p class="section-kicker">GK MOBILE STUDIO</p><h2>${t('productCtaTitle')}</h2><p>${t('productCtaText')}</p></div><div class="product-cta-actions"><a class="button primary" href="mailto:asilzade.1999@gmail.com">${t('emailMe')} <span aria-hidden="true">↗</span></a><a class="button" href="https://www.linkedin.com/in/görkem-karakaş/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a class="button" href="https://github.com/gorkemkarakas" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></section>`;
  }
  function projectPage(project) {
    const projectTitle = local(project.title);
    const heroImage = project.detailImage || project.coverImage;
    const heroContent = project.detailImage
      ? `<img src="${escape(project.detailImage)}" alt="${escape(projectTitle + ' — ' + t('projectPreview'))}" width="1440" height="810" decoding="async" fetchpriority="high">`
      : coverPicture(project, { detail: true });
    const links = [
      ...(project.isPlayable === true && project.playUrl ? [['playUrl', t('play')]] : []),
      ...[['demo', 'Live Demo'], ['github', 'GitHub'], ['googlePlay', 'Google Play']]
    ].filter(([key]) => project[key]);
    const linkButtons = links.length ? `<div class="hero-actions">${links.map(([key,label]) => `<a class="button" href="${escape(project[key])}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : '';
    if (project.productSummary) {
      const mainTechnologies = (project.cardTechnologies || project.technologies).slice(0, 5);
      return `<section class="page section-shell project-detail-page product-showcase-page">${projectMiniNav(project, true)}<div class="product-hero reveal">${heroImage ? `<figure class="product-hero-media">${heroContent}</figure>` : ''}<header class="product-hero-copy"><p class="eyebrow">${t(project.category)}${project.gameType ? ` · ${escape(local(project.gameType))}` : ''}</p><h1>${escape(projectTitle)}</h1><p class="product-tagline">${escape(local(project.tagline))}</p><p class="product-summary">${escape(local(project.productSummary))}</p>${projectMetadata(project)}${mainTechnologies.length ? `<div class="product-hero-stack">${tags(mainTechnologies)}</div>` : ''}${linkButtons}</header></div>${productFeatures(project)}${productExperience(project)}${projectGallery(project)}${productValue(project)}${behindProduct(project)}${productTechnologies(project)}${productCta()}</section>`;
    }
    return `<section class="page section-shell project-detail-page">${projectMiniNav(project, false)}${heroImage ? `<figure class="project-detail-hero reveal">${heroContent}</figure>` : ''}<p class="eyebrow">${t(project.category)}${project.gameType ? ` · ${escape(local(project.gameType))}` : ''}</p><h1>${escape(projectTitle)}</h1><p class="page-intro">${escape(local(project.description))}</p>${project.technologies.length ? `<section class="project-detail-technologies reveal"><h2>${t(project.gameDetails ? 'usedTechnologies' : 'technologies')}</h2>${tags(project.technologies)}</section>` : ''}${linkButtons}${projectDetails(project)}${projectGallery(project)}</section>`;
  }
  function updateActiveNavLink(page, hash) {
    document.querySelectorAll('.nav-links a').forEach(link => {
      const target = link.getAttribute('href');
      const active = page === 'projects'
        ? target === (category === 'games' && hash === 'projects' ? '#projects?category=games' : '#projects')
        : target === ({home:'#top',about:'#about'})[page];
      if (active) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
    });
  }
  function render(focus = false) {
    resetTiltCard();
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
      main.innerHTML = `<section class="page section-shell projects-page"><div class="projects-heading reveal"><h1>${t('projectsTitle')}</h1><p class="page-intro">${t('projectsIntro')}</p></div><div class="filter-controls reveal reveal-delay-1" role="group" aria-label="${t('projects')}"><button type="button" data-show-all aria-pressed="${category === 'all'}">${t('all')}</button><button type="button" data-filter-toggle aria-expanded="${filtersOpen}" aria-controls="category-filters"><svg class="filter-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>${t('filter')}<span class="filter-chevron" aria-hidden="true">▾</span></button></div><div class="category-filters" id="category-filters" role="group" aria-label="${t('filter')}" ${filtersOpen ? '' : 'hidden'}>${categories.map(key => `<button type="button" data-filter="${key}" aria-pressed="${category === key}">${t(key)}</button>`).join('')}</div><p class="result-count" id="result-count" role="status" aria-live="polite"></p><div class="project-grid" id="project-grid"></div></section>`;
      renderGrid();
      title = `${t('projects')} | GK Mobile Studio`;
    } else if (hash === 'about') {
      page = 'about';
      const skills = [['Frontend',['React','TypeScript','JavaScript']],['Backend',['Python','FastAPI','REST API']],['Mobile',['Android','Capacitor']],['IoT',['ESP32','MQTT','WebSocket']],[t('tools'),['Git','GitHub','VS Code']]];
      main.innerHTML = `<section class="page section-shell"><p class="eyebrow">${t('profile')}</p><h1>${t('aboutTitle')}</h1><p class="about-copy">${t('aboutText')}</p><p class="page-intro">${t('aboutApproach')}</p><div class="skills-grid">${skills.map(([title,items]) => `<section><h2>${title}</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></section>`).join('')}</div><div class="about-links"><a class="button primary" href="https://github.com/gorkemkarakas" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><a class="button" href="mailto:asilzade.1999@gmail.com">${t('emailMe')}</a></div></section>`;
      title = `${t('about')} | GK Mobile Studio`;
    } else if (hash.startsWith('project/')) {
      page = 'projects';
      const project = projects.find(p => p.id === hash.slice(8));
      main.innerHTML = project ? projectPage(project) : `<section class="page section-shell"><h1>${t('notFound')}</h1><p class="page-intro">${t('notFoundText')}</p><a class="button" href="#projects">${t('back')}</a></section>`;
      title = `${project ? local(project.title) : t('notFound')} | GK Mobile Studio`;
      if (project) description = local(project.description);
    } else {
      main.innerHTML = homeTemplate;
      initFeaturedCarousel();
    }
    translate();
    initProjectMiniNav();
    document.body.classList.toggle('projects-view', page === 'projects' && hash === 'projects');
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    updateActiveNavLink(page, hash);
    if (focus) {
      document.getElementById('main-content').focus({preventScroll:true});
      if (hash === 'contact') document.getElementById('contact').scrollIntoView();
      else if (hash === 'whats-new') document.querySelector('.featured').scrollIntoView();
      else if (pendingProjectScrollRestore !== null && ['projects','applications','services'].includes(hash)) {
        const restoreY = pendingProjectScrollRestore;
        pendingProjectScrollRestore = null;
        const rootStyles = getComputedStyle(document.documentElement);
        const expandedHeaderHeight = parseFloat(rootStyles.getPropertyValue('--header-height')) || 0;
        const compactHeaderHeight = parseFloat(rootStyles.getPropertyValue('--header-height-scrolled')) || expandedHeaderHeight;
        const headerAdjustment = restoreY > SCROLL_THRESHOLD ? expandedHeaderHeight - compactHeaderHeight : 0;
        requestAnimationFrame(() => {
          window.scrollTo(0, restoreY + headerAdjustment);
          if (!headerAdjustment) return;
          let fallbackTimer = 0;
          const finishRestore = () => {
            window.clearTimeout(fallbackTimer);
            header.removeEventListener('transitionend', handleHeaderTransitionEnd);
            window.scrollTo(0, restoreY);
          };
          const handleHeaderTransitionEnd = event => {
            if (event.propertyName === 'min-height') finishRestore();
          };
          header.addEventListener('transitionend', handleHeaderTransitionEnd);
          fallbackTimer = window.setTimeout(finishRestore, 300);
        });
      } else window.scrollTo(0,0);
    }
    observeReveals();
  }
  const SCROLL_THRESHOLD = 32;
  let scrollTicking = false;
  function applyScrollState() {
    scrollTicking = false;
    if (menu.getAttribute('aria-expanded') === 'true') return;
    header.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
    syncHeaderHeight();
  }
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(applyScrollState);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  applyScrollState();
  function updateMenuControl() {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-label', t(open ? 'closeMenu' : 'openMenu'));
  }
  function closeMenu() {
    header.classList.remove('menu-open');
    menu.setAttribute('aria-expanded','false');
    updateMenuControl();
    applyScrollState();
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    header.classList.toggle('menu-open',open);
    menu.setAttribute('aria-expanded',String(open));
    updateMenuControl();
  });
  document.querySelector('.header-menu').addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
    const projectLink = event.target.closest('a[href^="#project/"]');
    if (projectLink && location.hash.startsWith('#projects')) {
      projectReturnState = { hash: location.hash || '#projects', scrollY: window.scrollY };
    }
    const projectBack = event.target.closest('[data-project-back]');
    if (projectBack) pendingProjectScrollRestore = projectReturnState.scrollY;
    const projectScroll = event.target.closest('[data-project-scroll]');
    if (projectScroll) {
      const target = document.getElementById(projectScroll.dataset.projectScroll);
      if (target) {
        event.preventDefault();
        setActiveProjectSection(target.id);
        target.scrollIntoView({ behavior: reducedMotionQuery.matches ? 'auto' : 'smooth', block: 'start' });
      }
    }
    const filter = event.target.closest('[data-filter]');
    if (filter) {
      const nextHash = `projects?category=${encodeURIComponent(filter.dataset.filter)}`;
      if (location.hash.slice(1) === nextHash) {
        category = filter.dataset.filter;
        renderGrid();
        observeReveals();
      } else location.hash = nextHash;
    }
    const showAll = event.target.closest('[data-show-all]');
    if (showAll) {
      filtersOpen = false;
      if (location.hash.slice(1) === 'projects') {
        category = 'all';
        renderGrid();
        observeReveals();
        setFiltersOpen(false);
      } else location.hash = 'projects';
    }
    const filterToggle = event.target.closest('[data-filter-toggle]');
    if (filterToggle) setFiltersOpen(!filtersOpen);
  });
  document.addEventListener('keydown', event => {
    const cardLink = event.target.closest('[data-card-link]');
    if (cardLink && (event.key === ' ' || event.key === 'Spacebar')) {
      event.preventDefault();
      cardLink.click();
      return;
    }
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) closeMenu();
    syncHeaderHeight();
  });
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    lang = button.dataset.lang;
    try { localStorage.setItem('gk-lang',lang); } catch { /* Keep the in-memory preference. */ }
    render();
  }));
  window.addEventListener('hashchange', navigate);
  document.getElementById('year').textContent = new Date().getFullYear();
  syncHeaderHeight();
  render(Boolean(location.hash));
})();
