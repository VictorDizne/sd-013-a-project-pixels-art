// function pixelBoard() {
//   const pixelPalette = document.querySelector('#pixel-board');

//   for (let index = 0; index < 25; index += 1) {

//     const board = document.createElement('div');
//     board.classList.add('pixel');
//     pixelPalette.appendChild(board);
//     console.log('oi');
//   }
// }

// pixelBoard();

const selectedCor = document.querySelector('#color-palette');

function newSelected(event) {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  event.target.classList.add('selected');
}

selectedCor.addEventListener('click', newSelected);

const pixelBoard = document.querySelector('#pixel-board');

function changeColor(event) {
  const elemento = document.querySelector('.selected').id;
  event.target.setAttribute('id', elemento);
}

pixelBoard.addEventListener('click', changeColor);

const limpar = document.querySelector('#clear-board');

function clearPixels() {
  const pixelFilhos = document.querySelectorAll('.pixel');

  pixelFilhos.forEach((elemento) => { elemento.removeAttribute('id'); });
}

limpar.addEventListener('click', clearPixels);
