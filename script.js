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
    const newColum = document.createElement('div');
    newColum.classList.add('column');
    newColum.classList.add('pixel');
    pixelBoard.appendChild(newColum);
    }
  }
}
// Executa a função.
createBoard(5);
