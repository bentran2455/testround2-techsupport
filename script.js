let clickCount = 0;
const circle = document.querySelector('.circle-svg');

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

circle.setAttribute('fill', getRandomColor());

circle.addEventListener('click', () => {
  clickCount++;
  if (clickCount < 9) {
    const currentColor = circle.getAttribute('fill');
    const darkenedColor = darkenColor(currentColor);
    circle.setAttribute('fill', darkenedColor);
  } else {
    circle.setAttribute('fill', 'black');
  }
});

function darkenColor(color) {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  r = Math.max(0, Math.floor(r * 0.8));
  g = Math.max(0, Math.floor(g * 0.8));
  b = Math.max(0, Math.floor(b * 0.8));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}