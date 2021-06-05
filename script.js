const quadroDePixel = document.querySelector('#pixel-board');

function createDivs() {
  const criarLinha = document.createElement('div');
  criarLinha.className = 'pixel tamanhoqdd';
  quadroDePixel.appendChild(criarLinha);
}

function createNullDivs() {
  const criarLinha = document.createElement('div');
  quadroDePixel.appendChild(criarLinha);
}

function createLines(number) {
  let contador = 0;

  for (let i = 0; i < number; i += 1) {
    for (let index = 0; index < number; index += 1) {
      contador += 1;
      if (contador > number) {
        contador = 1;
        createNullDivs();
      }
      createDivs();
    }
  }
}
createLines(5);

// adicionar selected para classe selecionada
function selectedClass() {
  const corInicial = document.querySelector('.color');
  corInicial.classList.add('selected');
}
selectedClass();

const color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', (event) => {
    const selected = document.getElementsByClassName('selected')[0];
    console.log(selected);
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}
//  colorir Pixel Board

const pixel = document.getElementsByClassName('pixel');
function colorPiker(event) {
  const selected = document.getElementsByClassName('selected')[0];
  const theCSSprop = window.getComputedStyle(selected).getPropertyValue('background-color');
  const colorPikers = theCSSprop;
  event.target.style.backgroundColor = colorPikers;
}
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', colorPiker);
}

//  Limpar Pixel Board

const buttomClear = document.getElementById('clear-board');
const divPixel = document.getElementsByTagName('div');
function clear() {
  for (let i = 0; i < divPixel.length; i += 1) {
    if (divPixel[i].classList.contains('pixel')) {
      divPixel[i].style.backgroundColor = 'white';
    }
  }
}

buttomClear.addEventListener('click', clear);
