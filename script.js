// Função para deixar pixels brancos
function whiteColor() {
  const divs = document.querySelectorAll(".pixel");
  for (let indice = 0; indice < divs.length; indice += 1) {
    if (divs[indice] !== 'white') {
      divs[indice].style.backgroundColor = 'white';
    }
  }
}

// Referẽncia: https://projects.raspberrypi.org/pt-PT/projects/pixel-art/complete
// Função que define a cor da caneta, iniciando com preto
let penColor = 'black';

function setPenColour(color) {
	penColor = color;
}
// Função que pinta o pixel conforme a cor selecionada
function setPixelColour(pixel) {
	pixel.style.backgroundColor = penColor;
}




