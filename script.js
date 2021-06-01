function createPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'line';
    pixelBoard.appendChild(pixelLine);
    for (let index = 0; index < 5; index += 1) {
      let pixelColumn = document.createElement('div');
      pixelColumn.className = 'pixel';
      pixelLine.appendChild(pixelColumn);
    }
  }
}

createPixelBoard();
