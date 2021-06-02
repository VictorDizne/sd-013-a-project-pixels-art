const paleta = document.querySelector('#color-palette');
const quadro = document.querySelector('#pixel-board');
const botao = document.createElement('button');
const tools = document.querySelector('#tools');
const color = document.querySelectorAll('.color');
const cores = ['red', 'blue', 'yellow', 'HotPink', 'orange', 'green', 'teal', 'Purple'];
const r1 = getRandomDifferent(cores);
const r2 = getRandomDifferent(cores, r1);
const r3 = getRandomDifferent(cores, r1, r2);


botao.setAttribute('id', 'clear-board');
botao.innerText = 'Limpar';
tools.appendChild(botao);
const input = document.createElement('input');
input.setAttribute('id', 'board-size');
input.setAttribute('type', 'number');
input.setAttribute('min', '1');
input.innerText = 'Gerar quadro';
tools.appendChild(input);
const defineboard = document.createElement('button');
defineboard.setAttribute('id', 'generate-board');
defineboard.innerText = 'VQV';
tools.appendChild(defineboard);
let size = 0;
let aux = 0;

// function randomArray(randomColor) {
//   const x = Math.floor(Math.random() * randomColor.length);
//   console.log(x);
//   return randomColor[x];
// }

function getRandomDifferent(randomColor, last = undefined, last2 = undefined) {
    if (randomColor.length === 0) {
      return;
    } else if (randomColor.length === 1) {
      return randomColor[0];
    } else {
      let num = 0;
      do {
        num = Math.floor(Math.random() * randomColor.length);
      } while (randomColor[num] === last || randomColor[num] === last2);
      return randomColor[num];
    }
  }


    color[1].style.backgroundColor = r1;
    color[2].style.backgroundColor = r2;
    color[3].style.backgroundColor = r3;


for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.setAttribute('class', 'pixel');
  quadro.appendChild(pixel);
}

function selectColor(event) {
  const elemento = event.target;
  for (let i = 0; i < color.length; i += 1) {
    color[i].className = `color c${i}`;
  }
  elemento.className += ' selected';
}

function pinta(event) {
  const elemento = event.target;
  const elem = document.querySelector('.selected');
  const cor = window.getComputedStyle(elem, null).getPropertyValue('background-color');
  elemento.style.backgroundColor = cor;
}

function reset() {
  const pixel = document.querySelectorAll('.pixel');
  console.log(pixel);
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function invalid(tamanho) {
  if (tamanho === 0) {
    alert('Board inválido!');
  }
}

function limpa(pixel) {
  for (let i = 0; i < pixel.length; i += 1) {
    quadro.removeChild(pixel[i]);
  }
}

function createBoard() {
  invalid(size);
  const pixel = document.querySelectorAll('.pixel');

  if (size >= 5 && size <= 50) {
    limpa(pixel);
    for (let i = 0; i < aux; i += 1) {
      const newPixel = document.createElement('div');
      newPixel.setAttribute('class', 'pixel');
      quadro.appendChild(newPixel);
    }
    quadro.style.width = `${(40 * size) + (2 * size)}px`;
  }
}

function boardSize(event) {
  if (event.target.value >= 5 && event.target.value <= 50) {
    size = event.target.value;
    aux = size * size;
  } else if (event.target.value > 50) {
    size = 50;
    aux = size * size;
  }
}

paleta.addEventListener('click', selectColor);
quadro.addEventListener('click', pinta);
botao.addEventListener('click', reset);
input.addEventListener('keyup', boardSize);
defineboard.addEventListener('click', createBoard);
