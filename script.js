const colors = ['black'];
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const generateButton = document.querySelector('#generate-board');

function colorGenerate() {
  for (let i = 0; i < 3; i += 1) {
    const rgb1 = Math.ceil(Math.random() * 255);
    const rgb2 = Math.ceil(Math.random() * 255);
    const rgb3 = Math.ceil(Math.random() * 255);
    colors.push(`rgb(${rgb1}, ${rgb2}, ${rgb3})`);
  }
}
colorGenerate();

function createBoxPalette() {
  for (let i = 0; i < colors.length; i += 1) {
    const div = document.createElement('div');
    if (i === 0) {
      div.className = 'color selected';
    } else {
      div.className = 'color';
    }
    const colorPalette = document.querySelector('#color-palette');
    colorPalette.appendChild(div);
  }
}
createBoxPalette();

function setColor() {
  const colorsAvaiable = document.querySelectorAll('#color-palette div');
  for (let i = 0; i < colorsAvaiable.length; i += 1) {
    colorsAvaiable[i].style.backgroundColor = colors[i];
  }
}
setColor();

function createPixelBoard(number) {
  for (let i = 0; i < number; i += 1) {
    const divLine = document.createElement('div');
    pixelBoard.appendChild(divLine);
    for (let index = 0; index < number; index += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      divLine.appendChild(div);
    }
  }
}
createPixelBoard(5);

function changeFocus(event) {
  const actualFocus = document.querySelector('.selected');
  actualFocus.classList.remove('selected');
  event.target.classList.add('selected');
}
const paletteArray = document.querySelectorAll('#color-palette div');
for (let i = 0; i < paletteArray.length; i += 1) {
  paletteArray[i].addEventListener('click', changeFocus);
}

function changePixels(event) {
  const actualColor = document.querySelector('.selected').style.backgroundColor;
  const keepEvent = event;
  keepEvent.target.style.backgroundColor = actualColor;
}

function reloadArray() {
  const pixelsArray = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsArray.length; i += 1) {
    pixelsArray[i].addEventListener('click', changePixels);
  }
}
reloadArray();

function resetAll() {
  const pixelsArray = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsArray.length; i += 1) {
    pixelsArray[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', resetAll);

function changeMatrix() {
  pixelBoard.innerHTML = '';
  let boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    window.alert('Board inválido!');
  } else {
    if (boardSize < 5) {
      boardSize = 5;
    } else if (boardSize > 50) {
      boardSize = 50;
    }
    createPixelBoard(boardSize);
    reloadArray();
  }
}
generateButton.addEventListener('click', changeMatrix);
