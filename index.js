document.addEventListener('DOMContentLoaded', () => {
  const allTiles = document.querySelectorAll('.tiles');
  const proximity = 5;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    allTiles.forEach(tile => {
      const rect = tile.getBoundingClientRect();

      const elementX = Math.max(rect.left, Math.min(x, rect.right));
      const elementY = Math.max(rect.top, Math.min(y, rect.bottom));
      const distance = Math.sqrt(Math.pow(x - elementX, 2) + Math.pow(y - elementY, 2));

      if (distance < proximity) {
        tile.classList.add('glowing-outline');
      } else {
        tile.classList.remove('glowing-outline');
      }
    });
  });
});