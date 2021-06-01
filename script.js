const paletteLength = 4;
const boardSize = 5;

createPalette();

createPixels();

function createPalette() {
  const table = document.querySelector('#color-palette');
  const line = document.createElement('tr');
  table.appendChild(line)

  for (let index = 0; index < paletteLength; index++) {
    let td = document.createElement('td');
    td.classList.add('color');
    td.classList.add(`color${index}`);
    line.appendChild(td);
  }
}

function createPixels() {
  const table = document.querySelector('#pixel-board');

  for (let lineIndex = 0; lineIndex < boardSize; lineIndex++) {
    const line = document.createElement('tr');
    table.appendChild(line);

    for (let columnIndex = 0; columnIndex < boardSize; columnIndex++) {
      let td = document.createElement('td');
      td.classList.add('pixel');
      line.appendChild(td);
    }
  }
}