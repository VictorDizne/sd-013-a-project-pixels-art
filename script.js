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

// Função seleciona o selected


let colors = document.getElementsByClassName('color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', (event) => {
    let cores = document.querySelector('.selected');
    cores.classList.remove('selected');
    event.target.classList.add('selected');
  })
}

// Função para pintar 

let pixel = document.getElementsByClassName('pixel');
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', (event) => {
    let elementSelect = document.querySelector('.selected');
    let backgroundColor = window.getComputedStyle(elementSelect).getPropertyValue('background-color');
    event.target.style.backgroundColor = backgroundColor;
  })
}

// Função criar botão

let fatherButton = document.querySelector('#container');

function createButton () {
  let btn = document.createElement('button');
  btn.id = 'clear-board';
  fatherButton.appendChild(btn);
  btn.innerHTML = 'Limpar';
}

createButton();

// Função limpar board

let btnBoard = document.querySelector('#clear-board');

btnBoard.addEventListener('click', () => {
  for(let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
})
