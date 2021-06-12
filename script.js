const board = document.getElementById('pixel-board');
const numPallets = document.getElementById('color-palette').getElementsByClassName('color');
const linhas = 5;
const colunas = 5;
const cleanButton = document.getElementById('clear-board');

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
fillBoard(linhas, colunas);

function selectColor(e) {
  console.log(e.target,"antes");
  const lastSelect = document.querySelector('.selected');
  lastSelect.classList.remove('selected');
  e.target.classList.add('selected');
  console.log(e.target,"depois e lastselected = ",lastSelect);
}

function paintSquare(e) {
  if (e.target.classList.contains('pixel')) {
    const lastSelected = document.querySelector('.selected');
    e.target.style.backgroundColor = getComputedStyle(lastSelected).backgroundColor;
  }
}

function clearBoard() {
  board.innerHTML = '';
  fillBoard(linhas, colunas);
}

for (let i = 0; i < numPallets.length; i += 1) {
  numPallets[i].addEventListener('click', selectColor);
}
board.addEventListener('click', paintSquare);
cleanButton.addEventListener('click', clearBoard);
