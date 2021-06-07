function createPixelsBoard() {
  for (let index = 0; index < 5; index += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const line = document.createElement('div');
    pixelBoard.appendChild(line);

    for (let index = 0; index < 5; index += 1) {
      let div = document.createElement('div');
      div.className = 'pixel';
      line.appendChild(div);
    }
  }
}
createPixelsBoard();


function changeFocus(event) {
  let actualFocus = document.querySelector('.selected');
  actualFocus.className = 'color';
  event.target.className = 'color selected';
};
let paletteArray = document.querySelectorAll('#color-palette');
for (let i = 0; i < paletteArray.length; i += 1) {
  paletteArray[i].addEventListener('click', changeFocus);
};

function changePixels(event) {
  let actualColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = actualColor;
}
let pixelsArray = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelsArray.length; i += 1) {
  pixelsArray[i].addEventListener('click', changePixels);
};

//Feito com auxilio de Josué Lobo