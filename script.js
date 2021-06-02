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
    td.style.backgroundColor = `${paletteColors[index]}`;
    td.style.border = '1px solid #000';
    if (index === 0) td.classList.add('selected');
    line.appendChild(td);
  }
}

function createPixels() {
  const table = document.querySelector('#pixel-board');

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex += 1) {
    const line = document.createElement('tr');
    table.appendChild(line);

    for (let columnIndex = 0; columnIndex < boardSize; columnIndex += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      line.appendChild(td);
    }
  }
}

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');

  for (let pixelIndex = 0; pixelIndex < pixels.length; pixelIndex += 1) {
    pixels[pixelIndex].addEventListener('click', (event) => {
      const currentPixel = event.target;
      currentPixel.style.backgroundColor = currentColor;
    });
  }
}

function removeSelected(selected) {
  const colors = document.querySelectorAll('.color');

  for (let colorIndex = 0; colorIndex < colors.length; colorIndex += 1) {
    if (selected.target !== colors[colorIndex]) {
      colors[colorIndex].classList.remove('selected');
    }
  }
}

function setCurrentColor(item) {
  currentColor = item.target.style.backgroundColor;
}

function selectColor() {
  const colors = document.querySelectorAll('.color');

  for (let colorIndex = 0; colorIndex < colors.length; colorIndex += 1) {
    colors[colorIndex].addEventListener('click', (event) => {
      event.target.classList.add('selected');
      removeSelected(event);
      setCurrentColor(event);
    });
  }
}

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');

  button.addEventListener('click', () => {
    for (let pixelIndex = 0; pixelIndex < pixels.length; pixelIndex += 1) {
      pixels[pixelIndex].style.backgroundColor = '#ffffff';
    }
  });
}

createPalette();

createPixels();

selectColor();

clearPixels();

paintPixel();
