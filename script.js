function createLines() {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let numLine = 0; numLine < 5; numLine += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    pixelBoard.appendChild(line);
  }
}

function createPixels() {
  const tr = document.querySelectorAll('.tr');

  for (let line = 0; line < tr.length; line += 1) {
    for (let column = 0; column < 5; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      tr[line].appendChild(pixel);
    }
  }
}

window.onload = function inicio() {
  createLines();
  createPixels();
};
