

// Função para deixar pixels brancos
let colorWhite = 'white';

function whiteColor() {
let divs = document.querySelectorAll(".pixel");
for (let indice = 0; indice < divs.length; indice += 1) {
  if (divs[indice] !== '#fff'){
    divs[indice].style.backgroundColor = colorWhite;
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



