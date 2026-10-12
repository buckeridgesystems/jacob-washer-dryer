// FAQ accordions: the whole tile toggles, and opening and closing animate the height.
// Without JavaScript the native <details> behavior still works, with no animation.
(function () {
  var faq = document.querySelector('.faq');
  if (!faq || !faq.animate) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var DURATION = 200;

  function toggle(item) {
    if (item.dataset.animating) return;
    var summary = item.querySelector('summary');
    var startHeight = item.offsetHeight;
    var opening = !item.open;
    var endHeight;

    if (opening) {
      item.open = true;
      endHeight = item.offsetHeight;
    } else {
      endHeight = summary.offsetHeight;
      item.classList.add('is-closing');
    }

    if (reduce.matches) {
      item.open = opening;
      item.classList.remove('is-closing');
      return;
    }

    item.dataset.animating = '1';
    var animation = item.animate(
      { height: [startHeight + 'px', endHeight + 'px'] },
      { duration: DURATION, easing: 'ease-out' }
    );
    animation.onfinish = function () {
      item.open = opening;
      item.classList.remove('is-closing');
      delete item.dataset.animating;
    };
    animation.oncancel = animation.onfinish;
  }

  faq.addEventListener('click', function (event) {
    var item = event.target.closest('.faq-item');
    if (!item) return;
    // Let links and controls inside an answer behave normally.
    if (event.target.closest('a, button, input, textarea, select')) return;
    // Don't collapse the tile when someone is selecting answer text.
    var selection = window.getSelection();
    var inSummary = event.target.closest('summary');
    if (!inSummary && selection && String(selection).length > 0) return;
    event.preventDefault();
    toggle(item);
  });
})();
