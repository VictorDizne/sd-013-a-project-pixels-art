const button = document.querySelector('#clear-board');
let colorActive;

function colorsPalette() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'yellow', 'red', 'green'];

  colors.forEach((color, index) => {
    const colorElement = document.createElement('div');
    colorElement.className = 'color';
    colorElement.style.backgroundColor = color;

    if (index === 0) {
      colorElement.classList.add('selected');
      colorActive = color;
    }

    colorElement.addEventListener('click', () => {
      document.querySelector('.color.selected').classList.remove('selected');
      colorElement.classList.add('selected');
      colorActive = color;
    });

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

    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = colorActive;
    });
  }
}
pixelsBoard();

button.addEventListener('click', () => {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => {
    if (pixel.style.backgroundColor !== 'white') {
      pixel.style.backgroundColor = 'white';
    }
  });
});
