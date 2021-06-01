let colors = ['black', 'blue', 'green', 'red'];

function createBoxPalette(){
  for ( let i = 0; i < 4; i += 1){
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

function createPixelBoard(){
  for (let i = 0; i < 5; i += 1){
    let pixelBoard = document.querySelector('#pixel-board');
    let divLine = document.createElement('div');
    pixelBoard.appendChild(divLine);
    for( let index = 0; index < 5; index += 1){
      let div = document.createElement('div');
      div.className = 'pixel';
      divLine.appendChild(div);
    };
  };
};
createPixelBoard();
