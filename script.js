// Função criar pixels



let pixelBoard = document.getElementById('pixel-board');

function createPixels(tamanho, elementoPai) {
  for (let index = 0; index < tamanho; index += 1){
   let pixel = document.createElement('td');
   pixel.className = 'pixel';
   elementoPai.appendChild(pixel);
  }
}

// Função criar o Pixel Board

function createPixelBoard (tamanho) {
  for (let index = 0; index < tamanho; index += 1) {
    let elementoPai = document.createElement('tr');
    pixelBoard.appendChild(elementoPai);
    createPixels(tamanho, elementoPai);
  }
}

createPixelBoard(5);

// Função definir cor preta como inicial

function initialColor () {
  let corInicial = document.querySelector('.color');
  corInicial.classList.add('selected');
}

initialColor();

// Função seleciona cor da paleta

let paletaUm = document.querySelector('.black');
let paletaDois = document.querySelector('.red');
let paletaTres = document.querySelector('.green');
let paletaQuatro = document.querySelector('.blue');


paletaUm.addEventListener('click', selectColor);
paletaDois.addEventListener('click', selectColor);
paletaTres.addEventListener('click', selectColor);
paletaQuatro.addEventListener('click', selectColor);

function selectColor(event) {
  let cores = document.querySelector('.selected');
  cores.classList.remove('selected');
  event.target.classList.add('selected');

}



