// =======================================================================
const elementPixel = 5;

function fillFrame(value) {
  const elementPixelBoard = document.querySelector('#pixel-board');
  // Varre a linha
  for (let line = 0; line < value; line += 1) {
    const boxLine = document.createElement('div');
    boxLine.className = 'linha';
    elementPixelBoard.appendChild(boxLine);

    // Varre a coluna
    for (let column = 0; column < value; column += 1) {
      const boxColumn = document.createElement('div');
      boxColumn.className = 'pixel';
      boxLine.appendChild(boxColumn);
    }
  }
}
fillFrame(elementPixel);

// =======================================================================
function changeSelected(evento) {
  const seleciona = document.querySelector('.selected');
  seleciona.classList.remove('selected');
  evento.target.classList.add('selected');
}

function colorModel() {
  const paleta = document.getElementsByClassName('color');
  const colorP = [];

  for (let index = 0; index < paleta.length; index += 1) {
    colorP[index] = paleta[index];
    colorP[index].addEventListener('click', changeSelected);
  }
}
colorModel();

// =======================================================================
function changeColor(eventPixel) {
  const classeSelected = document.querySelector('.selected');
  const theCSSprop = window.getComputedStyle(classeSelected, null).getPropertyValue('background-color');
  eventPixel.target.style.backgroundColor = theCSSprop;
}

function pixelModel() {
  const quadro = document.getElementsByClassName('pixel');
  const pixel = [];

  for (let index = 0; index < quadro.length; index += 1) {
    pixel[index] = quadro[index];
    pixel[index].addEventListener('click', changeColor);
  }
}
pixelModel();

// =======================================================================
const clickB = document.getElementById('clear-board');

function recebeClick() {
  const recuperaPixel = document.getElementsByClassName('pixel');
  
  for (let index = 0; index < recuperaPixel.length; index += 1) {
    recuperaPixel[index].style.backgroundColor = 'white';
  }
}

clickB.addEventListener('click', recebeClick);
// =======================================================================
