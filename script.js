const getfirstColorDiv = document.getElementById('color1');
getfirstColorDiv.style.backgroundColor = 'black';

getfirstColorDiv.classList.add('selected');

const getDivColorPalette = document.querySelector('#color-palette');
const getDivsColorized = document.querySelectorAll('.color');

function selectingColor() {
  getDivColorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < getDivsColorized.length; index += 1) {
      getDivsColorized[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

selectingColor();

function coloringTable() {
  const getDivTable = document.querySelector('#pixel-board');
  const getPixels = document.querySelectorAll('.pixel');

  getDivTable.addEventListener('click', (event) => {
    for (let index = 0; index < getPixels.length; index += 1) {
      const getDivSelected = document.querySelector('.selected');
      const colorSelected = window.getComputedStyle(getDivSelected).backgroundColor;
      const evento = event;
      evento.target.style.backgroundColor = colorSelected;
    }
  });
}

coloringTable();
