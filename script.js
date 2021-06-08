/* eslint-disable sonarjs/no-duplicated-branches */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-var */
/* eslint-disable max-len */
/* eslint-disable complexity */
/* eslint-disable no-loop-func */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */

function getNewColor() {
  const min = Math.ceil(0);
  const max = Math.floor(255);
  const rgb = [];
  for (let index = 0; index < 3; index += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    rgb.push(randomNumber);
  }
  const content = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  return content;
}

function setColorClass(event) {
  const elementToClick = document.querySelectorAll('.color');
  const classColor = 'color';
  const classSelect = 'color selected';
  for (let index = 0; index < elementToClick.length; index += 1) {
    elementToClick[index].className = classColor;
  }
  event.target.className = classSelect;
}

function generatePalette() {
  const arrayPalette = ['rgb(0, 0, 0)'];
  for (let index = 0; index < 3; index += 1) {
    const newColor = getNewColor();
    arrayPalette.push(newColor);
  }
  for (let index = 0; index < arrayPalette.length; index += 1) {
    const element = document.getElementById('color-palette');
    const newElement = document.createElement('li');
    if (arrayPalette[index] === 'rgb(0, 0, 0)') {
      newElement.className = 'color selected';
      newElement.style.backgroundColor = arrayPalette[index];
    } else {
      newElement.className = 'color';
      newElement.style.backgroundColor = arrayPalette[index];
    }
    newElement.addEventListener('click', setColorClass);
    element.appendChild(newElement);
  }
}
generatePalette();

function setEventForNewPixelGenerated(event) {
  const targetColor = event.target.style.backgroundColor;
  const color = document.querySelector('.selected').style.backgroundColor;
  if (targetColor !== color) {
    event.target.style.backgroundColor = color;
  } else {
    event.target.style.backgroundColor = 'white';
  }
}

function clearBoard() {
  const board = document.getElementsByClassName('pixel');
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', function () {
    for (let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();

function clearBoardSizer() {
  const lineBoard = document.querySelectorAll('.line');
  for (let index = 0; index < lineBoard.length; index += 1) {
    lineBoard[index].remove();
  }
}

function generateNewBoard() {
  const buttonInput = document.querySelector('#generate-board');
  const input = document.querySelector('#board-size');
  const table = document.querySelector('#pixel-board');
  buttonInput.addEventListener('click', function () {
    if (input.value <= 0) {
      alert('Board inválido!');
    } else if (input.value > 0) {
      clearBoardSizer();
      if (input.value < 5) {
        input.value = 5;
      } else if (input.value > 50) {
        input.value = 50;
      }
      for (let index = 0; index < input.value; index += 1) {
        const lineBoard = document.createElement('tr');
        lineBoard.className = 'line';
        table.appendChild(lineBoard);
        for (let indexPixel = 0; indexPixel < input.value; indexPixel += 1) {
          const pixel = document.createElement('td');
          pixel.className = 'pixel';
          pixel.addEventListener('click', setEventForNewPixelGenerated);
          lineBoard.appendChild(pixel);
        }
      }
    }
  });
}
generateNewBoard();

function setPixelColorSelected() {
  const pixelTable = document.querySelector('#pixel-board');
  pixelTable.addEventListener('click', function(event) {
    const targetColor = event.target.style.backgroundColor;
    const auxColor = document.querySelector('.selected');
    const color = window.getComputedStyle(auxColor).getPropertyValue('background-color');
    if (targetColor !== color) {
      event.target.style.backgroundColor = color;
    } else {
      event.target.style.backgroundColor = 'white';
    }
  });
}
setPixelColorSelected();
