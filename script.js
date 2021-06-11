// Função para deixar pixels brancos
window.onload = function whiteColor () {
  const divs = document.querySelectorAll('.pixel');
  for (let indice = 0; indice < divs.length; indice += 1) {
    if (divs[indice] !== 'white') {
      divs[indice].style.backgroundColor = 'white';
    }
  }
  document.getElementById("clear-board").addEventListener("click", whiteColor);
}
// Referẽncia: https://projects.raspberrypi.org/pt-PT/projects/pixel-art/complete
// Função que define a cor da caneta, iniciando com preto
// let penColor = 'black';

// function setPenColour(color) {
//   penColor = color;
// }
// Função que pinta o pixel conforme a cor selecionada
function setPixelColour(event) {
  let pixelDiv = event.target;
  pixelDiv.classList.toggle('red');
}

let pixels = document.querySelectorAll('.table');

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener("click", setPixelColour);
}
