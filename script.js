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
var color = 'black';

function generatePalette() {
  const arrayPalette = ['black', 'red', 'green', 'blue'];
  for (let index = 0; index < arrayPalette.length; index += 1) {
    const element = document.getElementById('color-palette');
    const newElement = document.createElement('li');
    if (arrayPalette[index] === 'black') {
      newElement.className = 'color selected';
      newElement.style.backgroundColor = 'black';
    } else if (arrayPalette[index] === 'red') {
      newElement.className = 'color';
      newElement.style.backgroundColor = 'red';
    } else if (arrayPalette[index] === 'green') {
      newElement.className = 'color';
      newElement.style.backgroundColor = 'green';
    } else if (arrayPalette[index] === 'blue') {
      newElement.className = 'color';
      newElement.style.backgroundColor = 'blue';
    }
    element.appendChild(newElement);
  }
}
generatePalette();

function setColorClass() {
  const elementToClick = document.querySelectorAll('.color');
  const selectedClass = document.getElementsByClassName('selected');
  const classColor = 'color';
  const classSelect = 'color selected';
  for (let index = 0; index < elementToClick.length; index += 1) {
    elementToClick[index].addEventListener('click', function(event) {
      if (selectedClass.length === 0) {
        event.target.className = classSelect;
      } else {
        event.target.className = classColor;
      }
    });
  }
}
setColorClass();

function setColorByClass() {
  const selectedClass = document.querySelector('.selected');
  color = selectedClass.style.backgroundColor;
}

function setPixelColorSelected() {
  const pixelTable = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelTable.length; index += 1) {
    pixelTable[index].addEventListener('click', function(event) {
      const targetColor = event.target.style.backgroundColor;
      setColorByClass();
      if (targetColor !== color) {
        event.target.style.backgroundColor = color;
      } else {
        event.target.style.backgroundColor = 'white';
      }
    });
  }
}
setPixelColorSelected();
