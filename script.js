/** Returns a random hexadecimal color except #ffffff (white). */
function getRandomColor() {
  let color;
  do {
    /* Source: https://css-tricks.com/snippets/javascript/random-hex-color/ */
    color = Math.floor(Math.random() * 16777215).toString(16);
  } while (color.length !== 6 || color === 'ffffff');

  return `#${color}`;
}

function createPalette() {
  const paletteLine = document.querySelector('#color-palette .tr');

  let cell;
  let color = '#000000';
  for (let i = 0; i < 4; i += 1) {
    cell = document.createElement('div');
    cell.className = 'color td';
    if (i) color = getRandomColor();
    cell.style.backgroundColor = color;
    paletteLine.appendChild(cell);
  }
}

window.onload = () => {
  createPalette();
};
