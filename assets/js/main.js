(function () {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  }

  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('is-open', !isOpen);
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('is-open');
      });
    });
  }

  var copyButton = document.querySelector('[data-copy-citation]');
  if (copyButton) {
    copyButton.addEventListener('click', function () {
      var citation = document.querySelector('.citation-block code');
      if (!citation) return;
      navigator.clipboard.writeText(citation.textContent).then(function () {
        copyButton.classList.add('copied');
        copyButton.setAttribute('title', 'Copied');
        setTimeout(function () {
          copyButton.classList.remove('copied');
          copyButton.setAttribute('title', 'Copy citation');
        }, 1600);
      });
    });
  }
})();
