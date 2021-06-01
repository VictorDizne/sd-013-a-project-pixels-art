function createPixels() {
  const quadroInicio = 5;
  for (let index = 0; index < quadroInicio; index += 1) {
    const quadrado = document.createElemente('div');
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(quadrado);
    quadrado.classname = 'linha';

    for (let index2 = 0; index2 < quadroInicio; index2 += 1) {
      const quadrado2 = document.createElement('div');
      quadrado2.className = 'pixel';
      quadrado.appendChild(quadrado2);
    }
  }
}