window.onload = function startPage() {

  function setColors() {
    const colors = document.getElementsByClassName('color');
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].style.backgroundColor = colors[i].innerText;
    }
  }

  setColors();

  function createPixels(width) {
    let pixelLines = document.getElementsByClassName('pixel-line');
    for (let line = 0; line < pixelLines.length; line += 1) {
      for (let i = 0; i < width; i += 1) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelLines[line].appendChild(pixel);
      }
    }
  }

  function createPixelLines(lines, pixelBoard) {
    for (let line = 0; line < lines; line += 1) {
      let pixelLine = document.createElement('div');
      pixelLine.classList.add('pixel-line');
      pixelBoard.appendChild(pixelLine);
    }
  }

  function createPixelBord(width) {
    let pixelBoard = document.getElementById('pixel-board');
    createPixelLines(width, pixelBoard);
    createPixels(width)
    console.log(pixelBoard);
  }

  createPixelBord(5);

};
