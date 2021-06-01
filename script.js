function createPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'line';
    pixelBoard.appendChild(pixelLine);
    for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
      const pixelColumn = document.createElement('div');
      pixelColumn.className = 'pixel';
      pixelLine.appendChild(pixelColumn);
    }
  }
}

createPixelBoard();

window.onload = function picBlack() {
  const blackColor = document.querySelector('#first');
  blackColor.classList.add('selected');
}
