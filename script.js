let colors = ['black', 'blue', 'green', 'red'];
let pixelBoard = document.querySelector('#pixel-board');
let clearButton = document.querySelector('#clear-board');
let generateButton = document.querySelector('#generate-board');

function createBoxPalette(){
  for ( let i = 0; i < colors.length; i += 1){
    let div = document.createElement('div');
    if ( i == 0){
      div.className = 'color selected';
    } else {
      div.className = 'color';
    };
    let colorPalette = document.querySelector('#color-palette');
    colorPalette.appendChild(div);
  };
};
createBoxPalette();

function setColor(){
  let colorsAvaiable = document.querySelectorAll('#color-palette div');
  for (i = 0; i < colorsAvaiable.length; i += 1){
    colorsAvaiable[i].style.backgroundColor = colors[i];
  };
};
setColor();

function createPixelBoard(number){
  for (let i = 0; i < number; i += 1){
    let divLine = document.createElement('div');
    pixelBoard.appendChild(divLine);
    for( let index = 0; index < number; index += 1){
      let div = document.createElement('div');
      div.className = 'pixel';
      divLine.appendChild(div);
    };
  };
};
createPixelBoard(5);

function changeFocus(event) {
  let actualFocus = document.querySelector('.selected');
  actualFocus.className = 'color';
  event.target.className = 'color selected';
};
let paletteArray = document.querySelectorAll('#color-palette div');
for (let i = 0; i < paletteArray.length; i += 1){
  paletteArray[i].addEventListener('click', changeFocus);
};

function changePixels(event){
  let actualColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = actualColor;
}
let pixelsArray = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelsArray.length; i += 1){
  pixelsArray[i].addEventListener('click', changePixels);
};

function resetAll(){
  for (let i = 0; i < pixelsArray.length; i += 1){
    pixelsArray[i].style.backgroundColor = 'white';
  };
};
clearButton.addEventListener('click', resetAll);

function changeMatrix(){
  pixelBoard.innerHTML = '';
  let boardSize = document.querySelector('#board-size').value;
  if (boardSize === ''){
    window.alert('Board inválido!')
  } else {
  createPixelBoard(boardSize);
  }
}
generateButton.addEventListener('click', changeMatrix);