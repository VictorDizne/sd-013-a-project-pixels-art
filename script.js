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
      unidadeQuadrado.style.backgroundColor = "#ffffff";
      linhaQuadrados.appendChild(unidadeQuadrado);
    }
  }
}

criarQuadros(5);

function selecionado(atual) {
  atual = 
}