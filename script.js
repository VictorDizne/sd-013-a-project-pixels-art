const colors = document.getElementsByClassName('color');
function setColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', setCurrentColor);
    colors[i].style.backgroundColor = colors[i].innerText;
  }
}
let currentColor;
function setCurrentColor(event) {
  let selectedColor = document.getElementsByClassName('selected')[0];
  event.target.classList.toggle('selected');
  selectedColor.classList.toggle('selected');
}
function createPixels(width) {
  const pixelLines = document.getElementsByClassName('pixel-line');
  for (let line = 0; line < pixelLines.length; line += 1) {
    for (let i = 0; i < width; i += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLines[line].appendChild(pixel);
    }
  }
}
function createPixelLines(lines, pixelBoard) {
  for (let line = 0; line < lines; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    pixelBoard.appendChild(pixelLine);
  }
}
function createPixelBord(width) {
  const pixelBoard = document.getElementById('pixel-board');
  createPixelLines(width, pixelBoard);
  createPixels(width);
}
window.onload = function startPage() {
  setColors();
  createPixelBord(5);
};
