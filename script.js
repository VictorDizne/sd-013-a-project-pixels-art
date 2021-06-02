function colorsPalette() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'yellow', 'red', 'green'];

  colors.forEach((color) => {
    const colorElement = document.createElement('div');
    colorElement.className = 'color';
    colorElement.style.backgroundColor = color;

    if (color === 'black') {
      colorElement.classList.add('selected');
    }

    colorPalette.appendChild(colorElement);
  });
}
colorsPalette();

function pixelsBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
pixelsBoard();
