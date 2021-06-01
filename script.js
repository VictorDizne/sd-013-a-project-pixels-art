function criarQuadros(quantidade) {
  let quantidadeQuadrados = quantidade;
  let pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < quantidadeQuadrados; i += 1) {
    let linhaQuadrados = document.createElement('div');
    pixelBoard.appendChild(linhaQuadrados);
    linhaQuadrados.className = 'linha';

    for (let i2 = 1; i2 <= quantidadeQuadrados; i2 += 1) {
      let unidadeQuadrado = document.createElement('div');
      unidadeQuadrado.className='pixel';
      linhaQuadrados.appendChild(unidadeQuadrado);
    };
  };
};

criarQuadros(5);
