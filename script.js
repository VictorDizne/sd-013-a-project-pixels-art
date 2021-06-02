const colorElements = document.getElementsByClassName('color');

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

function createLine(numCells) {
  const line = document.createElement('div');
  line.className = 'tr';
  const cell = document.createElement('div');
  cell.className = 'pixel td';

  for (let i = 0; i < numCells; i += 1) line.appendChild(cell.cloneNode());

  return line;
}

function createBoard(n = 5) {
  const board = document.getElementById('pixel-board');
  const line = createLine(n);

  for (let j = 0; j < n; j += 1) board.appendChild(line.cloneNode(true));
}

function selectColorBlack() {
  colorElements[0].classList.add('selected');
}

window.onload = () => {
  createPalette();
  createBoard();
  selectColorBlack();
};
