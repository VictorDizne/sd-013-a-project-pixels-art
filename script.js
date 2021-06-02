/* eslint-disable complexity */
/* eslint-disable no-loop-func */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */
function setColorClass() {
  const elementToClick = document.querySelectorAll('.color');
  const selectedClass = document.getElementsByClassName('selected');
  const color = 'color';
  const select = 'color selected';
  for (let index = 0; index < elementToClick.length; index += 1) {
    elementToClick[index].addEventListener('click', function(event) {
      if (selectedClass.length === 0) {
        event.target.className = select;
      } else {
        event.target.className = color;
      }
    });
  }
}

setColorClass();

function setPixelColor() {
  const selectedColor = document.getElementsByTagName('li');
  const selectedClassColor = document.querySelector('.selected');
  const pixelTable = document.querySelectorAll('.pixel');
  let color = null;
  for (let index = 0; index < pixelTable.length; index += 1) {
    pixelTable[index].addEventListener('click', function(event) {
      const targetColor = event.target.style.backgroundColor;
      for (let index1 = 0; index < selectedColor.length; index += 1) {
        if (selectedColor[index1].className === selectedClassColor.className) {
          color = selectedColor[index1].style.backgroundColor;
        }
      }
      if (targetColor !== color) {
        event.target.style.backgroundColor = color;
      } else if (targetColor === color) {
        event.target.style.backgroundColor = 'rgb(119,119,119)';
      }
    });
  }
}

setPixelColor();
