(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-theme-v2";
  var THEME_COLORS = {
    ocean: "#06121f",
    sunset: "#1a0d0d",
    forest: "#07150f",
    paper: "#f6f0e6",
    "pastel-pink": "#fff4f8"
  };
  var root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}

    document.querySelectorAll("[data-set-theme]").forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-set-theme") === theme);
    });

    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", THEME_COLORS[theme] || THEME_COLORS.ocean);
    }
  }

  function initTheme() {
    var fallbackTheme = "ocean";
    var saved = fallbackTheme;
    var switcher = document.querySelector(".theme-switcher");
    var trigger = switcher ? switcher.querySelector(".theme-trigger") : null;
    var palette = document.getElementById("theme-palette");

    function closePalette() {
      if (!trigger || !palette) return;
      palette.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }

    function togglePalette() {
      if (!trigger || !palette) return;
      var isOpen = palette.hidden;
      palette.hidden = !isOpen;
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    try {
      saved = localStorage.getItem(STORAGE_KEY) || fallbackTheme;
    } catch (e) {}

    setTheme(saved);

    document.querySelectorAll("[data-set-theme]").forEach(function (button) {
      button.addEventListener("click", function () {
        setTheme(button.getAttribute("data-set-theme"));
        closePalette();
      });
    });

    if (trigger && palette) {
      trigger.addEventListener("click", function () {
        togglePalette();
      });

      document.addEventListener("click", function (event) {
        if (!switcher.contains(event.target)) {
          closePalette();
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closePalette();
        }
      });
    }
  }

  function initMobileNav() {
    var menuBtn = document.querySelector(".menu-btn");
    var mobileNav = document.getElementById("mobile-nav");
    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initActiveSection() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a, .mobile-nav a"));

    function setActive(id) {
      navLinks.forEach(function (link) {
        var isActive = link.getAttribute("href") === "#" + id;
        link.classList.toggle("active", isActive);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initMobileNav();
    initActiveSection();
    initYear();
  });
})();
