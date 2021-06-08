
// Função que define a cor da caneta, iniciando com preto
let penColor = 'black';

function setPenColour(color) {
	penColor = color;
}
// Função qe pinta o pixel ao click conforme a cor selecionada
function setPixelColour(pixel) {
	pixel.style.backgroundColor = penColor;
}



