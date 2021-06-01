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
    index === 0 ? td.classList.add('selected') : '';
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
      const currentPixel = event.target;
      currentPixel.style.backgroundColor = currentColor;
    });
  }
}

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');


  button.addEventListener('click', () => {
    for (let pixel in pixels) {
      try {
        pixels[pixel].style.backgroundColor = '#ffffff';
      }
      catch (err) {
        let error = err
      }
    }
  })
}

createPalette();

createPixels();

selectColor();

paintPixel();

clearPixels();
