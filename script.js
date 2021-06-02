// function createPixels()) {
//   const quadroInicio = 5;
//   for (let index = 0; index < quadroInicio; index += 1) {
//     const quadrado = document.createElement('div');
//     const pixelBoard = document.querySelector('#pixel-board');
//     pixelBoard.appendChild(quadrado);
//     quadrado.classname = 'linha';

//     for (let index2 = 0; index2 < quadroInicio; index2 += 1) {
//       const quadrado2 = document.createElement('div');
//       quadrado2.className = 'pixel';
//       quadrado.appendChild(quadrado2);
//     }
//   }
// }
function criaQuadro(tamanho) {
  for (let coluna = 0; coluna < tamanho; coluna += 1) {
    const novaColuna = document.createElement('div');
    novaColuna.classname = 'linhaDePixels';
    for (let linha = 0; linha < tamanho; linha += 1) {
      const novoPixel = document.createElement('div');
      novoPixel.className = 'pixel';
      novoPixel.style.backgroundColor = 'white';
      novaColuna.appendChild(novoPixel);
    }
    quadroDePixel.appendChild(novaColuna);
  }
  let dimensaoCorreta = 42 * tamanho;
  let tamanhoDoQuadro = document.getElementById('pixel-board');
  tamanhoDoQuadro.style.width = `${dimensaoCorreta}px`;
  tamanhoDoQuadro.style.heigth = `${dimensaoCorreta}px`;
}