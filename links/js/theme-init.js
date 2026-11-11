/* Aplica o tema antes da primeira renderização (chave dn-theme, como no DAY & NIGHT). */
(function () {
  var d = document.documentElement, t = null, m;
  try { t = localStorage.getItem('dn-theme'); } catch (e) {}
  if (t !== 'dark' && t !== 'light') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  d.setAttribute('data-theme', t);
  d.style.colorScheme = t;
  m = document.querySelector('meta[name="theme-color"]');
  if (m) m.content = t === 'dark' ? '#111C28' : '#F4F7FB';
})();
