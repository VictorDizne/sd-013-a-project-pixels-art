// https://css-tricks.com/snippets/javascript/random-hex-color/
// let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor4 = Math.floor(Math.random()*16777215).toString(16);

const black = document.querySelector('#first');
const red = document.querySelector('#second');
const blue = document.querySelector('#third');
const green = document.querySelector('#fourth');

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
blue.style.backgroundColor = 'blue';
green.style.backgroundColor = 'green';

const pixels = document.querySelector('#color-palette');

const board = document.createElement('div');
board.setAttribute('id', 'pixel-board');
document.querySelector('#table').appendChild(board);

const n = 5;

for (let i = 0; i < n; i += 1) {
  const tr = document.createElement('tr');
  tr.classList.add('tr');
  board.appendChild(tr);
  for (let j = 0; j < n; j += 1) {
    const pixel = document.createElement('td');
    pixel.classList.add('pixel');
    tr.appendChild(pixel);
  }
}

black.classList.add('selected');
// feito com ajuda do Matheus Duarte
function selectColor(element) {
  if (element.target.className === 'color') {
    const selected = document.querySelector('.selected');
    element.target.classList.add('selected');
    selected.classList.remove('selected');
  }
}

pixels.addEventListener('click', selectColor);
// feito com ajuda do Matheus Duarte
function fillColor(element) {
  const pixelSelected = element.target;
  const color = document.querySelector('.selected').style.backgroundColor;
  if (element.target.className === 'pixel') {
    pixelSelected.style.backgroundColor = color;
  }
}

board.addEventListener('click', fillColor);

const btnClear = document.querySelector('#clear-board');

function resetBoard() {
  const block = document.querySelectorAll('.pixel');
  for (let i of block) {
    i.style.backgroundColor = 'white';
  }
}

btnClear.addEventListener('click', resetBoard);

// document.querySelector('.second').style.backgroundColor = '#' + randomColor2;
// document.querySelector('.third').style.backgroundColor = '#' + randomColor3;
// document.querySelector('.fourth').style.backgroundColor = '#' + randomColor4;
