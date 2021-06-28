// Pega a section pixel-board.
const pixelBoard = document.getElementById('pixel-board');

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
