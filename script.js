const paletteLength = 4;
const boardSize = 5;

createPalette();

createPixels();

selectColor();

function createPalette() {
  const table = document.querySelector('#color-palette');
  const line = document.createElement('tr');
  table.appendChild(line);

  for (let index = 0; index < paletteLength; index += 1) {
    let td = document.createElement('td');
    td.classList.add('color');
    td.classList.add(`color${index}`);
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

function selectColor() {
  const colors = document.querySelectorAll('.color');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      event.target.classList.add('selected');
    })
    colors[index].addEventListener('click', (event) => {
      removeSelected(event)
    });
  }
}

function removeSelected(selected) {
  const colors = document.querySelectorAll('.color');

  for (const color of colors) {
    if (selected.target !== color) {
      color.classList.remove('selected');
    }
  }
}