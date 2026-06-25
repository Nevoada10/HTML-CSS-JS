const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealElements = document.querySelectorAll(".reveal");
if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

const activePage = document.body.dataset.page;
document.querySelectorAll(".nav [data-page]").forEach((navLink) => {
  const linkPage = navLink.getAttribute("data-page");
  if (activePage && activePage === linkPage) {
    navLink.classList.add("is-active");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });
}

const topbar = document.querySelector(".topbar");
function updateTopbarOnScroll() {
  if (!topbar) {
    return;
  }
  topbar.classList.toggle("is-scrolled", window.scrollY > 12);
}
updateTopbarOnScroll();
window.addEventListener("scroll", updateTopbarOnScroll, { passive: true });

const frames = document.querySelectorAll(".hero__frame");
if (!prefersReducedMotion && frames.length) {
  let rafToken = null;
  window.addEventListener("mousemove", (event) => {
    if (rafToken) {
      return;
    }
    rafToken = window.requestAnimationFrame(() => {
      const shiftX = (event.clientX / window.innerWidth - 0.5) * 8;
      const shiftY = (event.clientY / window.innerHeight - 0.5) * 8;

      frames.forEach((frame, index) => {
        const factor = index === 0 ? 1 : 0.62;
        frame.style.transform = `translate(${(-shiftX * factor).toFixed(2)}px, ${(-shiftY * factor).toFixed(2)}px)`;
      });
      rafToken = null;
    });
  });
}

const heroParallaxTarget = document.querySelector(".hero__frame--image");
if (!prefersReducedMotion && heroParallaxTarget) {
  let parallaxRaf = null;
  window.addEventListener(
    "scroll",
    () => {
      if (parallaxRaf) {
        return;
      }
      parallaxRaf = window.requestAnimationFrame(() => {
        const shift = Math.max(-26, Math.min(26, window.scrollY * -0.08));
        heroParallaxTarget.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
        parallaxRaf = null;
      });
    },
    { passive: true }
  );
}

const visualBlocks = document.querySelectorAll(
  ".hero__frame--image, .card__media, .journal__media, .featured-card__media, .lifestyle-block__image, .product-main-image, .thumb"
);
if (prefersReducedMotion) {
  visualBlocks.forEach((element) => element.classList.add("is-loaded"));
} else {
  window.requestAnimationFrame(() => {
    visualBlocks.forEach((element) => element.classList.add("is-loaded"));
  });
}

const galleryMain = document.querySelector("[data-gallery-main]");
const thumbs = document.querySelectorAll("[data-gallery-target]");
if (galleryMain && thumbs.length) {
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const targetClass = thumb.getAttribute("data-gallery-target");
      if (!targetClass) {
        return;
      }
      galleryMain.className = `product-main-image ${targetClass}`;
      galleryMain.classList.add("is-loaded");
      thumbs.forEach((btn) => btn.classList.remove("is-active"));
      thumb.classList.add("is-active");
    });
  });
}

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.defaultPrevented || prefersReducedMotion) {
      return;
    }

    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    if (link.target === "_blank" || link.hasAttribute("download")) {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    let targetUrl;
    try {
      targetUrl = new URL(link.href, window.location.href);
    } catch (_error) {
      return;
    }

    if (targetUrl.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("page-transitioning");
    window.setTimeout(() => {
      window.location.href = targetUrl.href;
    }, 220);
  });
});

function markStatus(element, message, isError = false) {
  if (!element) {
    return;
  }
  element.textContent = message;
  element.classList.remove("is-success", "is-error");
  element.classList.add(isError ? "is-error" : "is-success");
}

const waitlistForms = document.querySelectorAll(".js-waitlist-form");
waitlistForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");

    const emailInput = form.querySelector('input[type="email"]');
    const consentInput = form.querySelector('input[name="consent"]');

    const email = emailInput ? emailInput.value.trim() : "";
    const hasConsent = consentInput ? consentInput.checked : false;

    if (!email || !hasConsent) {
      markStatus(status, "Please provide a valid email and accept the consent notice.", true);
      return;
    }

    const source = form.dataset.source || "waitlist";
    const sku = form.querySelector('input[name="sku"]')?.value || "N/A";
    const colorway = form.querySelector('input[name="colorway"]')?.value || "N/A";

    console.info("waitlist-submission", { source, email, sku, colorway, timestamp: Date.now() });

    markStatus(status, "You are on the waitlist. We will notify you before launch.");
    form.reset();
  });
});

const contactForms = document.querySelectorAll(".js-contact-form");
contactForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const requiredInputs = form.querySelectorAll("input[required], textarea[required]");
    const allFilled = [...requiredInputs].every((field) => {
      if (field.type === "checkbox") {
        return field.checked;
      }
      return field.value.trim().length > 0;
    });

    if (!allFilled) {
      markStatus(status, "Please complete all required fields before sending.", true);
      return;
    }

    markStatus(status, "Message sent in prototype mode. Connect backend/email service for production.");
    form.reset();
  });
});


