const pixelBoard = 5;

function createPixelBoard() {
  const board = document.getElementById('pixel-board');

  for (let index = 0; index < pixelBoard; index += 1) {
    const divLine = document.createElement('div');
    divLine.classList.add('line');
  
    board.appendChild(divLine);
    for (let index = 0; index < pixelBoard; index += 1) {
      const divCollum = document.createElement('div');
      divCollum.className = 'pixel';

      divLine.appendChild(divCollum);
    }
  }
}
createPixelBoard();
