const cor = document.querySelector('#pixel-board');
const divMain = document.querySelector('#color-palette');
const botaoClear = document.querySelector('#clear-board');
const ButaoSort = document.querySelector('#random-cor');

botaoClear.innerHTML = 'Limpar';

function Paleta() {
  const nCores = 4;
  for (let i = 0; i < nCores; i += 1) {
    const cor1 = document.createElement('div');
    divMain.appendChild(cor1);
    cor1.className = 'color';
  }
}
Paleta();

function tabela() {
  const n = document.querySelector('#board-size').value;
  let linhas = n;
  if (linhas === '') {
    return window.alert('Board inválido!');
  }
  if (linhas < 5) {
    linhas = 5;
  } else if (linhas > 50) {
    linhas = 50;
  }
  while (cor.firstChild) { // apaga todos os filhos de cor antes de criar.
    cor.removeChild(cor.firstChild);
  }
  for (let i = 0; i < linhas; i += 1) {
    const caixa = document.createElement('tr');
    cor.appendChild(caixa);
    for (let j = 0; j < linhas; j += 1) {
      const pixel = document.createElement('td');
      caixa.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}
const entraNum = document.querySelector('#generate-board');
entraNum.addEventListener('click', tabela);

function valorP() {
  const linhas = 5;
  for (let i = 0; i < linhas; i += 1) {
    const caixa = document.createElement('tr');
    cor.appendChild(caixa);
    for (let j = 0; j < linhas; j += 1) {
      const pixel = document.createElement('td');
      caixa.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}

function cores() {
  const listaC = document.querySelectorAll('.color');
  for (let j = 0; j < listaC.length; j += 1) {
    if (listaC[j] === listaC[0]) {
      listaC[j].classList.add('preto');
      listaC[j].classList.add('selected');
    } else if (listaC[j] === listaC[1]) {
      listaC[j].classList.add('vermelho');
    } else if (listaC[j] === listaC[2]) {
      listaC[j].classList.add('verde');
    } else {
      listaC[j].classList.add('amarelo');
    }
  }
}
cores();

function ver() {
  const rece = document.querySelector('.selected');
  const receCor = window.getComputedStyle(rece);
  const corBack = receCor.getPropertyValue('background-color');
  cor.addEventListener('click', (event) => {
    event.target.style.background = corBack;
  });
}

function selecCores() {
  divMain.addEventListener('click', (event) => {
    const apaga = document.querySelector('.selected');
    apaga.classList.remove('selected');
    event.target.classList.add('selected');
    ver();
  });
}
selecCores();

// Pinta os pixels de branco
function clear() {
  const quadro = document.querySelectorAll('.pixel');
  for (let i = 0; i < quadro.length; i += 1) {
    quadro[i].style.background = 'white';
  }
}

function sortCor(opacidade = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r},${g},${b}, ${opacidade})`;
}

function dudu() {
  document.querySelector('.amarelo').style.background = sortCor();
  document.querySelector('.verde').style.background = sortCor();
  document.querySelector('.vermelho').style.background = sortCor();
}

botaoClear.addEventListener('click', clear);
ButaoSort.addEventListener('click', dudu);

ver();//
valorP();//
dudu();//
