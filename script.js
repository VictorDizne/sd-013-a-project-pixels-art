// function criarElementoClass(elemento, elementoPai, classeElemento) {
//   const elementocriado = document.createElement(elemento);
//   elementocriado.className = classeElemento;
//   elementoPai.appendChild(elementocriado);
// }
const paletaCores = document.querySelectorAll('.color');
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

window.document.onload = selectedActive();

addEvents(paletaCores, 'click', sectorColor);
