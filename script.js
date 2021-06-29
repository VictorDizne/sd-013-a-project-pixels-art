// Pega a section pixel-board.
const pixelBoard = document.getElementById('pixel-board');

// Pega a id color-palette da section da paleta.
const sectionColorPalette = document.getElementById('color-palette');

// Pega a classe color das div da paleta.
const divColorPalette = document.getElementsByClassName('color');

// Pega o botão de limpar
const cleanButton = document.getElementById('clear-board');

// Função responsável por criar as linhas e colunas.
function createBoard(boardSize) {
  // Cria as linas.
  for (let index = 0; index < boardSize; index += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    pixelBoard.appendChild(newRow);
    // Cria as colunas.
    for (let index = 0; index < boardSize; index += 1) {
    const newColumn = document.createElement('div');
    newColumn.classList.add('column');
    newColumn.classList.add('pixel');
    pixelBoard.appendChild(newColumn);
    }
  }
}
// Executa a função.
createBoard(5);

function randomColorPalette() {
  divColorPalette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  divColorPalette[0].classList.add('selected');
  for (let i = 1; i < divColorPalette.length; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${r},${g},${b})`;
    divColorPalette[i].style.backgroundColor = randomColor;
  }
}
randomColorPalette();

let colorSelected = 'rgb(0, 0, 0)';

// Função responsável por, de fato, colocar a cor selecionada na paleta no board.
function colorBoard() {
  // Seleciona a cor.
  sectionColorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < divColorPalette.length; index += 1) {
      divColorPalette[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
    colorSelected = event.target.style.backgroundColor;
  });
  // Coloca a cor selecionada no board.
  pixelBoard.addEventListener('click', (event) => {
    const pixelSelected = event.target;
    pixelSelected.style.backgroundColor = colorSelected;
  });
}
colorBoard();

// Limpa a tabela
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  cleanButton.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard()
