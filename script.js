function criarQuadros(quantidade) {
  const quantidadeQuadrados = quantidade;
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < quantidadeQuadrados; i += 1) {
    const linhaQuadrados = document.createElement('div');
    pixelBoard.appendChild(linhaQuadrados);
    linhaQuadrados.className = 'linha';

    for (let i2 = 1; i2 <= quantidadeQuadrados; i2 += 1) {
      const unidadeQuadrado = document.createElement('div');
      unidadeQuadrado.className = 'pixel';
      unidadeQuadrado.style.backgroundColor = '#ffffff';
      linhaQuadrados.appendChild(unidadeQuadrado);
    }
  }
}

criarQuadros(5);

const trocaSelecionada = document.getElementById('color-palette');
function corSelecionada(event) {
  for (let i = 0; i < trocaSelecionada.children.length; i += 1) {
    trocaSelecionada.children[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
  trocaSelecionada.classList.remove('selected');
}
trocaSelecionada.addEventListener('click', corSelecionada);

const pixelBoard = document.querySelector('#pixel-board');
function colorir(parameter) {
  for (let i = 0; i < trocaSelecionada.children.length; i += 1) {
    if (trocaSelecionada.children[i].classList.contains('selected')) {
      const color = window.getComputedStyle(trocaSelecionada.children[i], null).getPropertyValue('background-color');
      parameter.target.style.backgroundColor = color;
    }
  }
}
pixelBoard.addEventListener('click', colorir);

const pixel = document.querySelectorAll('.pixel');
function limpar() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
document.querySelector('#clear-board').addEventListener('click', limpar);
