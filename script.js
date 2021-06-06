// Puxa o pixelboard
const pixelBoard = document.getElementById('pixel-board');

function createTable () {
  // Cria as linhas
  for (let r = 0; r < 5; r += 1){
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.classList.add('pixel');
    pixelBoard.appendChild(newRow);
    for (let c = 0; c < 5; c += 1){
      const newColumn = document.createElement('div');
      newColumn.classList.add('column');
      newColumn.classList.add('pixel');
      newRow.appendChild(newColumn);
    }
  }
}
createTable();