// Cria a paleta de cores inicial
function palette() {
  const paletteGrid = document.getElementById('color-palette');

  const color1 = document.createElement('div');
  color1.className = 'color black selected';
  paletteGrid.appendChild(color1);

  const color2 = document.createElement('div');
  color2.className = 'color yellow';
  paletteGrid.appendChild(color2);

  const color3 = document.createElement('div');
  color3.className = 'color blue';
  paletteGrid.appendChild(color3);

  const color4 = document.createElement('div');
  color4.className = 'color red';
  paletteGrid.appendChild(color4);
}
palette();

function clear() {
  const buttonClear = document.querySelector('#clear-board');

  buttonClear.addEventListener('click', function () {
    location.reload();
  });
}
clear();

// Cria o tamanho do board
function gradeSize() {
  const pixelBoard = document.getElementById('pixel-board');
  const bordSize = 5;

  for (let index = 0; index < bordSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);

    for (let i = 0; i < bordSize; i += 1) {
      const blocks = document.createElement('div');
      blocks.className = 'pixel';
      blocks.style.backgroundColor = 'rgb(255, 255, 255)';
      line.appendChild(blocks);
    }
  }
}
gradeSize();

let colorOk = document.querySelector('.selected');
// Seleciona a cor na paleta
function colorSelect() {
  const allColors = document.getElementsByClassName('color');

  for (let i = 0; i < allColors.length; i += 1) {
    allColors[i].addEventListener('click', (event) => {
      colorOk.className = colorOk.className.replace(' selected', '');
      event.target.className += ' selected';
      colorOk = document.querySelector('.selected');
    });
  }
}
colorSelect();

// let allBlocks = document.getElementById('pixel');

// function printBlocks() {

//   for (let i = 0; i < allBlocks.length; i += 1) {
//   allBlocks[i].addEventListener('click', function (event) {
//     let colorBlock = window.getComputedStyle(colorOk, null).getPropertyValue('background-color');
//     event.target.style.backgroundColor = colorBlock;
//   });
//   }
// }
// printBlocks();

function printBlocks() {
  const allBlocks = document.getElementById('pixel-board');

  allBlocks.addEventListener('click', (event) => {
    const colorBlock = window
      .getComputedStyle(colorOk, null)
      .getPropertyValue('background-color');
    event.target.style.backgroundColor = colorBlock;
    console.log(colorOk.backgroundColor);
  });
}
printBlocks();
