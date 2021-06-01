const pixelBoard = 5;

function blackSelected() {
  const black = document.querySelector('.black');
  black.classList.add('selected');
}
window.onload = blackSelected;

function createPixelBoard() {
  const board = document.getElementById('pixel-board');

  for (let index = 0; index < pixelBoard; index += 1) {
    const divLine = document.createElement('div');
    divLine.classList.add('line');

    board.appendChild(divLine);
    for (let i = 0; i < pixelBoard; i += 1) {
      const divCollum = document.createElement('div');
      divCollum.className = 'pixel';

      divLine.appendChild(divCollum);
    }
  }
}
createPixelBoard();

const colors = document.getElementsByClassName('color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', changeSelected);
}

function changeSelected(event) {
  for (let index2 of colors) {
    if (index2.classList.contains('selected')) {
      index2.classList.remove('selected');
    } 
  }
  event.target.classList.add('selected');
}

