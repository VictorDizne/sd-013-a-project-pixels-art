const paletaCores = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
const botaoGerar = document.querySelector('#generate-board');
const inputnumeros = document.querySelector('#board-size');
const board = document.querySelector('#pixel-board');
const numeroInicial = 5;
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

function verificaInput() {
  let valor = parseInt(inputnumeros.value);
  if (valor < 5) {
    valor = 5;
    return valor;
  }
  if (valor > 50) {
    valor = 50;
    return valor;
  }
  return valor;
}

function RemoveBoard() {
  const boardDelerar = document.querySelectorAll('.tr');
  const tamanhoOriginal = boardDelerar.length;
  for (let i = 0; i < tamanhoOriginal; i += 1) {
    board.removeChild(boardDelerar[i]);
  }
}

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

function createBoard(numero) {
  const numeroLinhas = numero;
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
  pixels = document.querySelectorAll('.pixel');
  addEvents(pixels, 'click', addCollor);
}

function GerarBordInput() {
  if (inputnumeros.value === '') {
    alert('Board inválido!');
  } else {
    RemoveBoard();
    const numeroLinhas = verificaInput();
    createBoard(numeroLinhas);
  }
}

function geraNumeroCor() {
  const numero = parseInt(Math.random() * 255);
  console.log(numero);
  return numero;
}
function GeraCorRGB() {
  const cor = `rgb(${geraNumeroCor()},${geraNumeroCor()},${geraNumeroCor()}`;
  return cor;
}

function geraCores() {
  color2.style.backgroundColor = GeraCorRGB();
  color3.style.backgroundColor = GeraCorRGB();
  color4.style.backgroundColor = GeraCorRGB();
}

window.document.onload = selectedActive();
geraCores();
geraNumeroCor();
createBoard(numeroInicial);
addEvents(paletaCores, 'click', sectorColor);
document.getElementById('clear-board').addEventListener('click', clearPixels);
botaoGerar.addEventListener('click', GerarBordInput);
