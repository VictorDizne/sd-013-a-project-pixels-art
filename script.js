const paletteLength = 4;
const boardSize = 5;
let currentColor = 'black';
const paletteColors = ['black', 'red', 'green', 'blue'];

function createPalette() {
  const table = document.querySelector('#color-palette');
  const line = document.createElement('tr');
  table.appendChild(line);

  for (let index = 0; index < paletteLength; index += 1) {
    const td = document.createElement('td');
    td.classList.add('color');
    td.style.backgroundColor = `${paletteColors[index]}`
    index === 0 ? td.classList.add('selected') : '';
    line.appendChild(td);
  }
}

function createPixels() {
  const table = document.querySelector('#pixel-board');

  for (let lineIndex = 0; lineIndex < boardSize; lineIndex += 1) {
    const line = document.createElement('tr');
    table.appendChild(line);

    for (let columnIndex = 0; columnIndex < boardSize; columnIndex += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      line.appendChild(td);
    }
  }
}

function setCurrentColor(item) {
  currentColor = item.target.style.backgroundColor;
}

function removeSelected(selected) {
  const colors = document.querySelectorAll('.color');

  for (let index = 0; index < colors.length; index += 1) {
    if (selected.target !== colors[index]) {
      colors[index].classList.remove('selected');
    }
  }
}

function selectColor() {
  const colors = document.querySelectorAll('.color');

  for (let colorsIndex = 0; colorsIndex < colors.length; colorsIndex += 1) {
    colors[colorsIndex].addEventListener('click', (event) => {
      event.target.classList.add('selected');
      removeSelected(event);
      setCurrentColor(event);
    });
  }
}

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');

  for (let pixelsIndex = 0; pixelsIndex < pixels.length; pixelsIndex += 1) {
    pixels[pixelsIndex].addEventListener('click', (event) => {
      event.target.style.backgroundColor = currentColor;
    });
  }
}

createPalette();

createPixels();

selectColor();

paintPixel();