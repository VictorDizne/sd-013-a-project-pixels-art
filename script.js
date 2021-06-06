// cria a grade de pixels
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

function count(number) {
  for (let i = 0; i < number; i += 1) {
    createDivs();
  }
}

function createLines(number) {
  for (let i = 1; i <= number; i += 1) {
    count(number);
    createNullDivs();
  }
}

createLines(5);

// adiciona selected para classe selecionada

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
function colorPiker(e) {
  const selected = document.getElementsByClassName('selected')[0];
  const theCSSprop = window.getComputedStyle(selected).getPropertyValue('background-color');
  const colorPikers = theCSSprop;
  e.target.style.backgroundColor = colorPikers;
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

// requisito 10 : imput

function afterRefresh(input) {
  quadroDePixel.innerHTML = null;
  createLines(input);
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', colorPiker);
  }
}
const submit = document.getElementById('generate-board');
submit.addEventListener('click', () => {
  let input = document.getElementById('board-size').value;
  console.log(input);
  if (input <= 5) {
    input = 5;
    alert('Board inválido!');
    afterRefresh(input);
  } else if (input >= 50) {
    input = 50;
    alert('Board inválido!');
    afterRefresh(input);
  } else {
    afterRefresh(input);
  }
});
