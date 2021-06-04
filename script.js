// https://css-tricks.com/snippets/javascript/random-hex-color/
// let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor4 = Math.floor(Math.random()*16777215).toString(16);

const black = document.querySelector('#first');
const red = document.querySelector('#second');
const blue = document.querySelector('#third');
const green = document.querySelector('#fourth');
const receiveValue = document.querySelector('#board-size');

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
blue.style.backgroundColor = 'blue';
green.style.backgroundColor = 'green';

const pixels = document.querySelector('#color-palette');

const board = document.createElement('div');
board.setAttribute('id', 'pixel-board');
document.querySelector('#table').appendChild(board);

function createBoard(element) {
  for (let i = 0; i < element; i += 1) {
    const tr = document.createElement('tr');
    tr.classList.add('tr');
    board.appendChild(tr);
    for (let j = 0; j < element; j += 1) {
      const pixel = document.createElement('td');
      pixel.classList.add('pixel');
      tr.appendChild(pixel);
    }
  }
}

createBoard(5);

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
  for (let i = 0; i < block.length; i += 1) {
    block[i].style.backgroundColor = 'white';
  }
}

btnClear.addEventListener('click', resetBoard);

// desafios 10 e 11 feito com ajuda do Matheus Duarte. mlk é brabo
function receiveBoard(element) {
  if (element.value > 50) {
    alert('Really?');
    createBoard(50);
  }
  if (element.value < 5) {
    alert('Again?');
    createBoard(5);
  }
  if (element.value >= 5 && element.value <= 50) {
    createBoard(element.value);
  }
}

function deleteBoard() {
  const delTr = document.querySelectorAll('.tr');
  for (let i = 0; i < delTr.length; i += 1) {
    board.removeChild(delTr[i]);
  }
}

function btnVQV() {
  if (receiveValue.value === '') {
    alert('Board inválido!');
  } else {
    deleteBoard();
    receiveBoard(receiveValue);
  }
}

const btnSubmit = document.querySelector('#generate-board');

btnSubmit.addEventListener('click', btnVQV);

// document.querySelector('.second').style.backgroundColor = '#' + randomColor2;
// document.querySelector('.third').style.backgroundColor = '#' + randomColor3;
// document.querySelector('.fourth').style.backgroundColor = '#' + randomColor4;
