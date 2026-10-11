// Hides the sticky header when scrolling down and brings it back on any scroll up.
// Without JavaScript the header simply stays visible.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var lastY = window.scrollY;
  var ticking = false;

  function update() {
    var y = window.scrollY;
    if (y > lastY && y > header.offsetHeight) {
      header.classList.add('is-hidden');
    } else if (y < lastY || y <= 0) {
      header.classList.remove('is-hidden');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Tabbing into the header always reveals it.
  header.addEventListener('focusin', function () {
    header.classList.remove('is-hidden');
  });
})();
