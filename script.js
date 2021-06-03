const listaDeCor = 'lista-de-cor';
const pixelBoard = '#pixel-board';
const input = document.querySelector('input');

function criaUlDeCor(id) {
  const ul = document.createElement('ul');
  const nav = document.getElementById(id);
  nav.appendChild(ul);
  ul.id = listaDeCor;
}

function criaLiCores(id, n) {
  const ul = document.getElementById(id);
  for (let index = 1; index <= n; index += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (document.getElementsByClassName('selected')[0] == undefined) {
      li.className = 'color selected';
    } else {
      li.className = 'color';
    }
  }
}

function CoresDisponiveis() {
  const cores = ['black', 'green', 'orange', 'red'];
  return cores;
}

function atribuindoCoresSelecionadas() {
  const cor = document.querySelectorAll('.color');
  const cores = CoresDisponiveis();
  for (let i = 0; i < cores.length; i += 1) {
    cor[i].style.backgroundColor = cores[i];
  }
}

criaUlDeCor('color-palette');
criaLiCores(listaDeCor, 4);
atribuindoCoresSelecionadas();

function AdicionaPixels(referencia) {
  let quant = referencia.value; if (quant > 0 || quant <= 50) {
    const criarBoard = document.createElement('section');
    document.body.appendChild(criarBoard);
    criarBoard.setAttribute('id', 'pixel-board');
    const lugarDaLinha = document.querySelector(pixelBoard);
    let pixelNumeroN = 0; for (let linha = 1; linha <= quant; linha += 1) {
      const line = document.createElement('ul');
      lugarDaLinha.appendChild(line);
      for (let coluna = 1; coluna <= quant; coluna += 1) {
        const column = document.createElement('li');
        line.appendChild(column);
        column.className = 'pixel';
        column.id = `pixel ${pixelNumeroN}`; column.style.backgroundColor = "white"
        pixelNumeroN += 1;
      }
    }
  }
  mudaCorDoPixel();
}

AdicionaPixels(input);

function removePixels() {
  const tabelaDePixel = document.querySelector(pixelBoard);
  tabelaDePixel.parentNode.removeChild(tabelaDePixel);
}

document.getElementById("generate-board").addEventListener('click', () => {
  removePixels();
  AdicionaPixels(input);
});

function changeColor(event) {
  const NovaCor = event.target;
  const CorAntiga = document.getElementsByClassName('selected');
  CorAntiga[0].classList.remove('selected');
  NovaCor.classList.add('selected');
}
let classSelecionada = document.querySelector('#lista-de-cor');
classSelecionada.addEventListener('click', changeColor);

function mudaCorDoPixel() {
  function mudaCor(event) {
    const pixelClicado = event.target;
    const corBase = document.getElementsByClassName('selected');
    pixelClicado.style.backgroundColor = corBase[0].style.backgroundColor;
    pixelClicado.classList.add('colorido');
  }
  let pixelNumeroN = 0;
  const quantidade = input.value ** 2;
  for (let i = 0; i < quantidade; i += 1) {
    let elementoDaTabelaPixelada = document.getElementById(`pixel ${pixelNumeroN}`);
    elementoDaTabelaPixelada.addEventListener('click', mudaCor);
    pixelNumeroN += 1;
  }
}
mudaCorDoPixel();

document.querySelector('#clear-board').addEventListener('click', () => {
  let pixelsColoridos = document.querySelectorAll('.colorido');
  for (let i = 0; i <= pixelsColoridos.length; i += 1) {
    pixelsColoridos[i].style.removeProperty('background-color');
    pixelsColoridos[i].classList.remove('colorido');
}
});

// -----------------------------------------------------------------------------
function removeCores() {
  const nav = document.getElementsByTagName('nav')[0];
  const ul = document.getElementsByTagName('ul')[0];
  nav.removeChild(ul);
}

function gerarCor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let cor = `rgb(${r}, ${g}, ${b})`
  return cor;
}

document.querySelector('#mudarCores').addEventListener('click', CriandoCoresAleatórias)

function CriandoCoresAleatórias() {
  removeCores();
  criaUlDeCor('color-palette');
  criaLiCores(listaDeCor, 6);
  const lista = document.getElementById('lista-de-cor');
  for (let i = 0; i < lista.children.length; i += 1) {
    let cor = gerarCor();
    lista.children[i].style.backgroundColor = cor;
  }
  let classSelecionada = document.querySelector('#lista-de-cor');
  classSelecionada.addEventListener('click', changeColor);

}

