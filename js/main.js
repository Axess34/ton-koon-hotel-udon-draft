(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem("tk-lang");
  var lang = stored === "th" || stored === "en" ? stored : "en";
  root.setAttribute("lang", lang);

  function setLang(next) {
    lang = next;
    root.setAttribute("lang", next);
    localStorage.setItem("tk-lang", next);
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang-btn") === next;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });
  setLang(lang);

  var toggle = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-mobile-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      var label = open
        ? (lang === "th" ? "ปิดเมนู" : "Close menu")
        : (lang === "th" ? "เปิดเมนู" : "Open menu");
      toggle.setAttribute("aria-label", label);
    });
  }
})();
