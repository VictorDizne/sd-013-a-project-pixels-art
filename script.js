const board = document.getElementById('pixel-board');
const numPallets = document.getElementById('color-palette').getElementsByClassName('color');

function fillBoard(linha, coluna) {
  for (let i = 0; i < linha; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';

    for (let j = 0; j < coluna; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    board.appendChild(line);
  }
}
fillBoard(5, 5);

function selectColor(e) {
  console.log(e.target,"antes");
  const lastSelect = document.querySelector('.selected');
  lastSelect.classList.remove('selected');
  e.target.classList.add('selected');
  console.log(e.target,"depois e lastselected = ",lastSelect);
}

for (let i = 0; i < numPallets.length; i += 1) {
  numPallets[i].addEventListener('click', selectColor);
}
