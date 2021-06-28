// Pega a section pixel-board.
const pixelBoard = document.getElementById('pixel-board');

// Pega a id color-palette da section da paleta.
const sectionColorPalette = document.getElementById('color-palette');

// Pega a classe color das divs da paleta.
const divColorPalette = document.getElementsByClassName('color');

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

// Função responsável por percorrer toda a extenção do array da paleta, a partir da posição 1 e verifica se existe algum elemento com a classe selected. Se houver, o laço remove a classe.
function selectedDiv() {
  divColorPalette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  divColorPalette[0].classList.add('selected');
  sectionColorPalette.addEventListener('click', (event) => {
    console.log(event.target);
    const allDivColor = document.getElementsByClassName('color');
    for (let index = 0; index < allDivColor.length; index += 1) {
      if (allDivColor[index].classList.contains('selected')) {
        allDivColor[index].classList.remove('selected');
      }
    }
    // Adiciona a classe selected no elemento que sofrer a ação de click declarada anteriormente.
    event.target.classList.add('selected');
   //console.log();
  })
}
// Executa a função.
selectedDiv();
