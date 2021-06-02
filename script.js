const colors = document.getElementsByClassName('color');
const btnClear = document.getElementById('clear-board');
const form = document.getElementById('size-form');
const input = document.getElementById('board-size');

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
  const board = document.createElement('div');
  board.id = 'pixel-board';
  board.className = 'table';
  const line = createLine(n);

  for (let i = 0; i < n; i += 1) board.appendChild(line.cloneNode(true));

  document.body.appendChild(board);
}

function selectColorBlack() {
  colors[0].classList.add('selected');
}

function onClickEvents(e) {
  const colorSelected = document.querySelector('.selected');

  /** Make Palette Colors Selectable */
  if (e.target.classList.contains('color') && e.target !== colorSelected) {
    colorSelected.classList.remove('selected');
    e.target.classList.add('selected');

  /** Make pixels paintable */
  } else if (e.target.classList.contains('pixel')) {
    const currentColor = colorSelected.style.backgroundColor;
    e.target.style.backgroundColor = currentColor;
  }
}

function clearPixels() {
  const pixels = document.getElementsByClassName('pixel');

  // https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName#examples
  Array.prototype.map.call(pixels, (pixel) => {
    pixel.style.removeProperty('background-color');
  });
}

function setBoardSize(e) {
  e.preventDefault();

  let n = parseInt(input.value, 10);

  if (!n) return alert('Board inválido!');
  if (n < 5) n = 5;
  if (n > 50) n = 50;

  document.getElementById('pixel-board').remove();
  input.value = null;

  createBoard(n);
}

window.onload = () => {
  createPalette();
  createBoard();
  selectColorBlack();
  document.addEventListener('click', onClickEvents); // Event Bubbling
  btnClear.addEventListener('click', clearPixels);
  form.addEventListener('submit', setBoardSize);
};
