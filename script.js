(function () {
  const button = document.getElementById("lang-toggle");
  const nodes = document.querySelectorAll("[data-de][data-en]");

  function apply(lang) {
    document.documentElement.lang = lang;
    nodes.forEach(function (el) {
      el.textContent = el.getAttribute("data-" + lang);
    });
    button.textContent = lang === "de" ? "EN" : "DE";
  }

  const start = localStorage.getItem("lang") === "en" ? "en" : "de";
  apply(start);

  button.addEventListener("click", function () {
    const next = document.documentElement.lang === "de" ? "en" : "de";
    localStorage.setItem("lang", next);
    apply(next);
  });
})();
