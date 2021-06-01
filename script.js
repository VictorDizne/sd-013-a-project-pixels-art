const paletteLength = 4;

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

createPalette();