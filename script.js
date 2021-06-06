// Puxa o pixelboard
const pixelBoard = document.getElementById('pixel-board');

function createTable (tableSize) {
  // Cria as linhas
  for (let r = 0; r < tableSize; r += 1){
    const newRow = document.createElement('div');
    newRow.id = 'Row number ' + r;
    pixelBoard.appendChild(newRow);
    for (let c = 0; c < tableSize; c += 1){
      const newColumn = document.createElement('div');
      newColumn.classList.add('column');
      newColumn.classList.add('pixel');
      newRow.appendChild(newColumn);
    }
  }
}
createTable(5);