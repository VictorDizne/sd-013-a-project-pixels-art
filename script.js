const board = document.getElementById('pixel-board');

function fillBoard(linha, coluna) {
  for (let i = 0; i < linha; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';

    for (let j = 0; j < coluna; j += 1) {
      const colum = document.createElement('div');
      colum.className = 'colum';
      line.appendChild(colum);
    }
    board.appendChild(line);
  }
}
fillBoard(5, 5);
