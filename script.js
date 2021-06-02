function blackSelected() {
  const black = document.querySelector('.black');
  black.classList.add('selected');
}

// Cria quadro de pixels de acordo com tamanho passado para a variavel pixelBoard
function createPixelBoard(number) {
  const board = document.getElementById('pixel-board');

  for (let index = 0; index < number; index += 1) {
    const divLine = document.createElement('div');
    divLine.classList.add('line');

    board.appendChild(divLine);
    for (let i = 0; i < number; i += 1) {
      const divCollum = document.createElement('div');
      divCollum.className = 'pixel';

      divLine.appendChild(divCollum);
    }
  }
}
window.onload = blackSelected,createPixelBoard(5);

// Mudar a classe 'selected' entre elementos com a classe 'color'
function changeSelected() {
  const colors = document.getElementsByClassName('color');

  function changeColorSelect(event) {
    for (let index2 of colors) {
      if (index2.classList.contains('selected')) {
        index2.classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', changeColorSelect);
  }
}
changeSelected();

// Muda background color do pixel clickado
const pixels = document.getElementsByClassName('pixel');

function colorClick() {

  function changeColor(event) {
    let selectElement = document.querySelector('.selected');
    let colorSelect = window.getComputedStyle(selectElement).backgroundColor;

    event.target.style.backgroundColor = colorSelect;
  }

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', changeColor);
  }
}
colorClick();

// Cria botão para 'limpar' o quadro, colocando background branco
function clear() {
  const button = document.getElementById('clear-board');

  function clickClear() {
    for (let index of pixels) {
      index.style.backgroundColor = 'white';
    }
  }
  button.addEventListener('click', clickClear);
}
clear();

// Função que remove as linhas do quadro
function removeLines() {
  const board = document.getElementById('pixel-board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

// Criar botão e input para controlar o tamanho do quadro
const button = document.getElementById('generate-board');
const input = document.getElementById('board-size');
let pixelBoard = 5;

function sizeBoard() {
  const number = Number(input.value);

  if (number < 5) {
    pixelBoard = 5;
  } else if (number > 50) {
    pixelBoard = 50;
  } else if (!number) {
    alert('Board inválido!');
  } else {
    pixelBoard = number;
  }
  removeLines();
  createPixelBoard(pixelBoard);
  colorClick();
  input.value = '';
}

button.addEventListener('click', sizeBoard);
input.addEventListener('keydown', (event) => {
  let key = event.code;
  if (key === 'NumpadEnter' || key === 'Enter') {
    sizeBoard();
  }
});

// Gerando cores aleatorias
function randomColors() {
  const colors = document.getElementsByClassName('color');

  function generateColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;

    return rgb;
  }
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = generateColor();
  }
}
randomColors();