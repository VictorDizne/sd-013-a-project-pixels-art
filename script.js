const paletteLength = 4;
const boardSize = 5;

createPalette();

createPixels();

selectColor();

function createPalette() {
  const table = document.querySelector('#color-palette');
  const line = document.createElement('tr');
  table.appendChild(line)

  for (let index = 0; index < paletteLength; index++) {
    let td = document.createElement('td');
    td.classList.add('color');
    td.classList.add(`color${index}`);
    index === 0 ? td.classList.add('selected') : '';
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

function selectColor() {
  const colors = document.querySelectorAll('.color');

  for (const color of colors) {
    color.addEventListener('click', event => {
      event.target.classList.toggle('selected', removeSelected);
    })
  }
}