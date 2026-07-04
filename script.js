const header = document.querySelector("[data-header]");
const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isFinePointer = window.matchMedia("(pointer: fine)").matches;

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Back to top button
const toTopButton = document.querySelector("[data-to-top]");

if (toTopButton) {
  const updateToTop = () => {
    toTopButton.classList.toggle("is-visible", window.scrollY > 480);
  };

  updateToTop();
  window.addEventListener("scroll", updateToTop, { passive: true });
  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

// Ambient cursor glow
const cursorGlow = document.querySelector("[data-cursor-glow]");

if (cursorGlow && isFinePointer && !prefersReducedMotion) {
  let hasShown = false;

  window.addEventListener(
    "pointermove",
    (event) => {
      cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (!hasShown) {
        cursorGlow.classList.add("is-active");
        hasShown = true;
      }
    },
    { passive: true }
  );

  window.addEventListener("pointerleave", () => cursorGlow.classList.remove("is-active"));
}

// Phone mockup tilt
const tiltTarget = document.querySelector("[data-tilt]");
const tiltZone = document.querySelector(".hero-visual");

if (tiltTarget && tiltZone && isFinePointer && !prefersReducedMotion) {
  const maxTilt = 9;

  tiltZone.addEventListener("pointermove", (event) => {
    const bounds = tiltZone.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
    const rotateY = relativeX * maxTilt * 2;
    const rotateX = relativeY * -maxTilt * 2;
    tiltTarget.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltZone.addEventListener("pointerleave", () => {
    tiltTarget.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
  });
}

// Magnetic buttons
const magneticButtons = document.querySelectorAll("[data-magnetic]");

if (isFinePointer && !prefersReducedMotion) {
  magneticButtons.forEach((button) => {
    const strength = 0.28;

    button.addEventListener("pointermove", (event) => {
      const bounds = button.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      button.style.transform = `translate(${offsetX * strength}px, ${offsetY * strength}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

// Stat count-up
const statNumbers = document.querySelectorAll("[data-count-to]");

const currentSuffix = (element) => {
  const lang = document.documentElement.lang === "tr" ? "tr" : "en";
  return (lang === "tr" && element.dataset.suffixTr) || element.dataset.suffix || "";
};

const animateCount = (element) => {
  const target = Number(element.dataset.countTo);
  const suffix = currentSuffix(element);

  if (prefersReducedMotion) {
    element.textContent = `${target}${suffix}`;
    element.dataset.animated = "true";
    return;
  }

  const duration = 1400;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${value}${currentSuffix(element)}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.dataset.animated = "true";
    }
  };

  requestAnimationFrame(step);
};

if ("IntersectionObserver" in window && statNumbers.length) {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((item) => statObserver.observe(item));
} else {
  statNumbers.forEach((item) => animateCount(item));
}

// Language toggle (EN / TR)
const LANG_KEY = "gk-lang";

const getInitialLang = () => {
  const saved = localStorage.getItem(LANG_KEY);
  return saved === "tr" ? "tr" : "en";
};

const ATTR_MAP = {
  "data-i18n-aria-label": "aria-label",
  "data-i18n-alt": "alt",
  "data-i18n-title": "title",
  "data-i18n-content": "content",
};

const applyLanguage = (lang) => {
  const dict = (window.I18N && window.I18N[lang]) || {};
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  Object.entries(ATTR_MAP).forEach(([dataAttr, targetAttr]) => {
    document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
      const key = el.getAttribute(dataAttr);
      if (dict[key] !== undefined) el.setAttribute(targetAttr, dict[key]);
    });
  });

  statNumbers.forEach((el) => {
    if (el.dataset.animated === "true") {
      el.textContent = `${el.dataset.countTo}${currentSuffix(el)}`;
    }
  });

  document.querySelectorAll("[data-lang-toggle] button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
};

const langToggle = document.querySelector("[data-lang-toggle]");

if (langToggle) {
  applyLanguage(getInitialLang());

  langToggle.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.dataset.lang;
      localStorage.setItem(LANG_KEY, chosen);
      applyLanguage(chosen);
    });
  });
}
