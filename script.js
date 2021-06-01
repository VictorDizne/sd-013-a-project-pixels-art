const pixelBoard = document.querySelector('#pixel-board');

function createPixels(number) {
  for (let indexRow = 0; indexRow < number; indexRow += 1) {
    for (let indexLine = 0; indexLine < number; indexLine += 1) {
      const newDiv = document.createElement('div');
      pixelBoard.appendChild(newDiv);
      newDiv.classList = "pixel";
    }
  }
}

createPixels(5);