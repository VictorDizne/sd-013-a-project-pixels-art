let pixelBoard = 5

function createPixelBoard() {
  let board = document.getElementById('pixel-board');

  for (let index = 0; index < pixelBoard; index += 1) {
    let divLine = document.createElement('div');
    divLine.classList.add('line', 'pixel');
  
    board.appendChild(divLine);
    for (let index = 0; index < pixelBoard; index += 1) {
      let divCollum = document.createElement('div');
      divCollum.className = 'pixel';

      divLine.appendChild(divCollum);
    }
  }
}

createPixelBoard();
