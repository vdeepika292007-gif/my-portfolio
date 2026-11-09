/* Route-aware color treatment for the opening 3D environments only. */
(() => {
  const root = document.documentElement;
  let frame = 0;
  const update = () => {
    frame = 0;
    const route = location.hash.split('?')[0];
    const page = route.includes('/about') ? 'about' : route.includes('/playground') ? 'playground' : 'home';
    root.dataset.palette = page;
    const header = document.querySelector('.page .headerBlock');
    const rect = header?.getBoundingClientRect();
    const strength = page === 'playground' || !rect ? 0 : Math.max(0, Math.min(1, rect.bottom / Math.max(1, innerHeight * 0.45)));
    root.style.setProperty('--scene-color-strength', strength.toFixed(3));
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.content = page === 'home' && root.dataset.roomLighting === 'dark' ? '#14212c' : page === 'about' ? '#302447' : page === 'playground' ? '#d7c6f5' : '#e8dcf6';
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  window.addEventListener('hashchange', schedule);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  new MutationObserver(schedule).observe(document.getElementById('vue-app'), { childList: true, subtree: true });
  update();
})();
