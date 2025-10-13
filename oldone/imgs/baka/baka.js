const btn = document.querySelector('.runaway');
const container = document.querySelector('.section2');

btn.addEventListener('mouseover', () => {
  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
});
