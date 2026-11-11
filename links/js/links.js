/* Inicializa o componente oficial DAY & NIGHT uma única vez, depois que seu script carregou. */
(function () {
  var COLORS = { light: '#F4F7FB', dark: '#111C28' };

  document.addEventListener('daynight:change', function (e) {
    var m = document.querySelector('meta[name="theme-color"]');
    if (m && e.detail) m.content = COLORS[e.detail.theme] || m.content;
  });

  function start() {
    if (!window.DayNight || window.__dnReady) return;
    window.__dnReady = true;
    DayNight.init({ position: 'top-right', speed: 'normal' });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
