// function criarElementoClass(elemento, elementoPai, classeElemento) {
//   const elementocriado = document.createElement(elemento);
//   elementocriado.className = classeElemento;
//   elementoPai.appendChild(elementocriado);
// }
let numeroLinhas = 5;
function createBoard() {
  for (let i = 0; i < numeroLinhas; i += 1) {
    const div = document.createElement('div');
    div.className = 'tr';
    document.querySelector('#pixel-board').appendChild(div);
    for (let j = 0; j < numeroLinhas; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel td';
      div.appendChild(pixel);
    }
  }
}
createBoard();
const paletaCores = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');



function selectedActive() {
  for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].classList.remove('selected');
  }
  paletaCores[0].classList.add('selected');
}

function sectorColor(event) {
  for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addEvents(arrayPixel, evento, funcao) {
  for (let i = 0; i < arrayPixel.length; i += 1) {
    arrayPixel[i].addEventListener(evento, funcao);
  }
}
function addCollor(event) {
  const elemComCor = document.querySelector('.selected');
  const cor = window.getComputedStyle(elemComCor, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = cor;
}
function clearPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

window.document.onload = selectedActive();
addEvents(pixels, 'click', addCollor);
addEvents(paletaCores, 'click', sectorColor);
document.getElementById('clear-board').addEventListener('click', clearPixels);

