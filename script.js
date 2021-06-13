const board = document.getElementById('pixel-board');
const numPallets = document.getElementById('color-palette').getElementsByClassName('color');
const linhas = 5;
const colunas = 5;
const cleanButton = document.getElementById('clear-board');
const generateButton = document.getElementById('generate-board');

function fillBoard(linha, coluna) {
  for (let i = 0; i < linha; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';

    for (let j = 0; j < coluna; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    board.appendChild(line);
  }
}

function startBoard() {
  fillBoard(linhas, colunas);
}

function selectColor(e) {
  const lastSelect = document.querySelector('.selected');
  lastSelect.classList.remove('selected');
  e.target.classList.add('selected');
}

function paintSquare(e) {
  if (e.target.classList.contains('pixel')) {
    const lastSelected = document.querySelector('.selected');
    e.target.style.backgroundColor = getComputedStyle(lastSelected).backgroundColor;
  }
}

function clearBoard() {
  board.innerHTML = '';
  fillBoard(linhas, colunas);
}

function generateBoard() {
  let n = parseInt(document.getElementById('board-size').value, 10);
  if (Number.isInteger(n)) {
    if (n < 5) {
      n = 5;
    } else if (n > 50) {
      n = 50;
    }
    board.innerHTML = '';
    fillBoard(n, n);
  } else {
    alert('Board inválido!');
  }
}

function randomPalletCollor() {
  const palletColor = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange', 'pink'];
  for (let i = 0; i < 3; i += 1) {
    const index = Math.floor(Math.random() * palletColor.length);
    const color = `background-color: ${palletColor.splice(index, 1)};`;
    console.log(index, palletColor);
    numPallets[i + 1].setAttribute('style', color);
  }
}

for (let i = 0; i < numPallets.length; i += 1) {
  numPallets[i].addEventListener('click', selectColor);
}
board.addEventListener('click', paintSquare);
cleanButton.addEventListener('click', clearBoard);
generateButton.addEventListener('click', generateBoard);
document.addEventListener('DOMContentLoaded', startBoard);
document.addEventListener('DOMContentLoaded', randomPalletCollor);
