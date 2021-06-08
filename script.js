// Requisito 4;
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

// Recupera as cores com classe 'color';
let getColors = document.getElementsByClassName('color');
let getPaletteColor = document.querySelector('#color-palette');


// Requisito 7;
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

// Recupera quadro de pixels em branco;
const getPixelBoard = document.getElementById('pixel-board');

// Requisito 8;
getPixelBoard.addEventListener('click', function(event) {
  const pixelClicked = event.target;
  const colorSelected = document.getElementsByClassName('selected');
  const colorUsed = getComputedStyle(colorSelected[0]).getPropertyValue("background-color");
  pixelClicked.style.backgroundColor = colorUsed;
})

// Requisito 9;
function createBtn() {
  const clearBtn = document.createElement('button');
  clearBtn.setAttribute('id', 'clear-board');
  clearBtn.innerText = 'Limpar';
  document.body.insertBefore(clearBtn, getPixelBoard);

  clearBtn.addEventListener('click', function() {
    const getPixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < getPixels.length; index += 1) {
      getPixels[index].style.backgroundColor = 'white';
    }
  })
}

createBtn();