/**
 * Theme presets (same tokens as React ThemeSwitcher) + nav UI.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-theme";

  var themes = [
    {
      colors: {
        "--background": "220 20% 7%",
        "--foreground": "210 20% 90%",
        "--card": "220 18% 10%",
        "--card-foreground": "210 20% 90%",
        "--primary": "174 72% 56%",
        "--primary-foreground": "220 20% 7%",
        "--secondary": "220 16% 14%",
        "--secondary-foreground": "210 20% 80%",
        "--muted": "220 14% 16%",
        "--muted-foreground": "215 12% 50%",
        "--accent": "174 72% 56%",
        "--accent-foreground": "220 20% 7%",
        "--border": "220 16% 18%",
        "--input": "220 16% 18%",
        "--ring": "174 72% 56%",
      },
    },
    {
      colors: {
        "--background": "260 20% 7%",
        "--foreground": "260 10% 90%",
        "--card": "260 18% 10%",
        "--card-foreground": "260 10% 90%",
        "--primary": "270 85% 65%",
        "--primary-foreground": "260 20% 7%",
        "--secondary": "260 16% 14%",
        "--secondary-foreground": "260 10% 80%",
        "--muted": "260 14% 16%",
        "--muted-foreground": "260 10% 50%",
        "--accent": "270 85% 65%",
        "--accent-foreground": "260 20% 7%",
        "--border": "260 16% 18%",
        "--input": "260 16% 18%",
        "--ring": "270 85% 65%",
      },
    },
    {
      colors: {
        "--background": "30 15% 6%",
        "--foreground": "35 20% 88%",
        "--card": "30 14% 9%",
        "--card-foreground": "35 20% 88%",
        "--primary": "38 95% 58%",
        "--primary-foreground": "30 15% 6%",
        "--secondary": "30 12% 13%",
        "--secondary-foreground": "35 15% 78%",
        "--muted": "30 10% 15%",
        "--muted-foreground": "30 10% 48%",
        "--accent": "38 95% 58%",
        "--accent-foreground": "30 15% 6%",
        "--border": "30 12% 17%",
        "--input": "30 12% 17%",
        "--ring": "38 95% 58%",
      },
    },
    {
      colors: {
        "--background": "340 18% 7%",
        "--foreground": "340 10% 90%",
        "--card": "340 16% 10%",
        "--card-foreground": "340 10% 90%",
        "--primary": "340 82% 62%",
        "--primary-foreground": "340 18% 7%",
        "--secondary": "340 14% 14%",
        "--secondary-foreground": "340 10% 78%",
        "--muted": "340 12% 15%",
        "--muted-foreground": "340 8% 48%",
        "--accent": "340 82% 62%",
        "--accent-foreground": "340 18% 7%",
        "--border": "340 14% 17%",
        "--input": "340 14% 17%",
        "--ring": "340 82% 62%",
      },
    },
    {
      colors: {
        "--background": "150 18% 6%",
        "--foreground": "150 10% 90%",
        "--card": "150 16% 9%",
        "--card-foreground": "150 10% 90%",
        "--primary": "152 70% 50%",
        "--primary-foreground": "150 18% 6%",
        "--secondary": "150 14% 13%",
        "--secondary-foreground": "150 10% 78%",
        "--muted": "150 12% 14%",
        "--muted-foreground": "150 8% 46%",
        "--accent": "152 70% 50%",
        "--accent-foreground": "150 18% 6%",
        "--border": "150 14% 16%",
        "--input": "150 14% 16%",
        "--ring": "152 70% 50%",
      },
    },
    {
      colors: {
        "--background": "210 25% 96%",
        "--foreground": "220 20% 12%",
        "--card": "210 20% 100%",
        "--card-foreground": "220 20% 12%",
        "--primary": "210 80% 50%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "210 15% 92%",
        "--secondary-foreground": "220 15% 30%",
        "--muted": "210 12% 90%",
        "--muted-foreground": "215 10% 45%",
        "--accent": "210 80% 50%",
        "--accent-foreground": "0 0% 100%",
        "--border": "210 15% 88%",
        "--input": "210 15% 88%",
        "--ring": "210 80% 50%",
      },
    },
  ];

  function applyTheme(index) {
    var root = document.documentElement;
    var t = themes[index];
    if (!t) return;
    Object.keys(t.colors).forEach(function (key) {
      root.style.setProperty(key, t.colors[key]);
    });
    try {
      localStorage.setItem(STORAGE_KEY, String(index));
    } catch (e) {}
    document.querySelectorAll("[data-theme-option]").forEach(function (btn, i) {
      btn.classList.toggle("is-active", i === index);
    });
  }

  function initTheme() {
    var idx = 0;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null && themes[Number(saved)]) idx = Number(saved);
    } catch (e) {}
    applyTheme(idx);

    document.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyTheme(Number(btn.getAttribute("data-theme-index")));
        var dock = document.getElementById("theme-dock");
        var fab = document.getElementById("theme-fab");
        if (dock) dock.classList.remove("is-open");
        if (fab) fab.setAttribute("aria-expanded", "false");
      });
    });

    var dock = document.getElementById("theme-dock");
    var fab = document.getElementById("theme-fab");
    if (dock && fab) {
      fab.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var open = dock.classList.toggle("is-open");
        fab.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.addEventListener("click", function (ev) {
        if (!dock.contains(ev.target)) {
          dock.classList.remove("is-open");
          fab.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  function initNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var btn = nav.querySelector(".nav__menu-btn");
    var drawer = nav.querySelector(".nav__drawer");
    if (btn && drawer) {
      btn.addEventListener("click", function () {
        var exp = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", exp ? "false" : "true");
        drawer.classList.toggle("is-open", !exp);
      });
      drawer.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          drawer.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
  });
})();
