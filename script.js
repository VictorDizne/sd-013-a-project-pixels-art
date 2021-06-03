const paletteLength = 4;
const boardSize = 5;
let currentColor = 'black';

// FUNÇÃO RETIRADA DE https://stackoverflow.com/questions/1484506/random-color-generator/1484514#1484514

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//

function createPalette() {
  const table = document.querySelector('#color-palette');
  const line = document.createElement('tr');
  table.appendChild(line);

  for (let index = 0; index < paletteLength; index += 1) {
    const td = document.createElement('td');
    td.classList.add('color');
    if (index === 0) {
      td.classList.add('selected');
      td.style.backgroundColor = '#000';
    } else {
      td.style.backgroundColor = getRandomColor();
    }
    line.appendChild(td);
  }
}

function removePalette() {
  const table = document.getElementById('color-palette');
  table.innerHTML = '';
}

function createPixels() {
  const table = document.querySelector('#pixel-board');

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex += 1) {
    const line = document.createElement('tr');
    table.appendChild(line);

    for (let columnIndex = 0; columnIndex < boardSize; columnIndex += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      td.style.backgroundColor = 'white';
      line.appendChild(td);
    }
  }
}

function paintPixel(color) {
  const pixels = document.querySelectorAll('.pixel');

  for (let pixelIndex = 0; pixelIndex < pixels.length; pixelIndex += 1) {
    pixels[pixelIndex].addEventListener('click', (event) => {
      const currentPixel = event.target;
      currentPixel.style.backgroundColor = color;
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
  paintPixel(currentColor);
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

function getNewPalette() {
  const button = document.querySelector('#gererate-palette');

  button.addEventListener('click', () => {
    removePalette();
    createPalette();
    selectColor();
  });
}

getNewPalette();

createPalette();

createPixels();

selectColor();

clearPixels();

paintPixel(currentColor);
