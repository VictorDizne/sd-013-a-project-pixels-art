//Cria pixel Board.
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

// window.onload = function picBlack() {
//   const blackColor = document.querySelector('#first');
//   blackColor.classList.add('selected');
// };

//Recupera as cores com classe 'color'.
let getColors = document.getElementsByClassName('color');

let getPaletteColor = document.querySelector('#color-palette');


//Adiciona evento de click para selecionar a cor.
getPaletteColor.addEventListener('click', function(event) {
  let colorClicked = event.target;
    if (colorClicked.className !== 'selected') {
    colorClicked.classList.add('selected');
    for (let index = 0; index < getColors.length; index += 1) {
      if (getColors[index] !== colorClicked) {
        getColors[index].classList.remove('selected');
      }
    }
    }
})

const getPixelBoard = document.getElementById('pixel-board');

getPixelBoard.addEventListener('click', function(event) {
  const pixelClicked = event.target;
  const colorSelected = document.getElementsByClassName('selected');
  const colorUsed = getComputedStyle(colorSelected[0]).getPropertyValue("background-color");
  pixelClicked.style.backgroundColor = colorUsed;
})

//Recupera elemento pai dos pixels em branco.
// let pixelChoose = document.getElementsByClassName('line');

// for (let indexPixel = 0; indexPixel < pixelChoose.length; indexPixel += 1) {
//   document.addEventListener('click', function(event) {
//     let pixelClicked = event.target;
//     let colorSelected = document.getElementsByClassName('selected').getAttribute('id');
//     pixelClicked.setAttribute.id = colorSelected;  
//   })
// }





