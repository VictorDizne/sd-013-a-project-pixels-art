function createPixel (number = 5) {
  for(let index=0; index < number; index++) {
    const pixelBoard = document.querySelector('#pixel-board')
    const linhas = document.createElement('div')
    pixelBoard.appendChild(linhas);
    linhas.classList= 'linha';

  for(let index2=0; index2 < number; index2++) {
    const boxes = document.createElement('div')
    boxes.classList ='pixel';
    linhas.appendChild(boxes);
    }
  }
}
createPixel();

function cores () {
  let r = Math.random() * 255
  let g = Math.random() * 255
  let b = Math.random() * 255
  document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${g},${b},${r})`;
  document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${g},${r})`;
  document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${r},${b},${r})`;
};
cores();

function corSelecionada (event) {
  const corPraPintar = document.querySelector('.selected');
  corPraPintar.classList.remove('selected');
  event.target.classList.add('selected')
}

const color1 = document.querySelector('.one')
const color2 = document.querySelector('.two')
const color3 = document.querySelector('.three')
const color4 = document.querySelector('.four')

color1.addEventListener('click', corSelecionada);
color2.addEventListener('click', corSelecionada);
color3.addEventListener('click', corSelecionada);
color4.addEventListener('click', corSelecionada);

function pintar(event) {
  if (event.target.classList.contains('pixel')) {
    const elementoSelecionado = document.querySelector('.selected');
    const corSelecionada = window.getComputedStyle(elementoSelecionado, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = corSelecionada;
  }
}

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', pintar);

function limpaTudo () {
  const button = document.querySelector('#clear-board')
  const quadradin = document.getElementsByClassName('pixel')
  
  button.addEventListener('click', () => {
    for(let index=0; index < quadradin.length; index++) {
      quadradin[index].style.backgroundColor = 'white';
    }
  });
}
limpaTudo();
