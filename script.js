function criaQuadro(tamanho) {
  const pixelBoard = document.getElementById(pixelBoard);
  for (let coluna = 0; coluna < tamanho; coluna += 1) {
    const novaColuna = document.createElement('div');
    novaColuna.classname = 'linhaDePixels';
    for (let linha = 0; linha < tamanho; linha += 1) {
      const novoPixel = document.createElement('div');
      novoPixel.className = 'pixel';
      novoPixel.style.backgroundColor = 'white';
      novaColuna.appendChild(novoPixel);
    }
    pixelBoard.appendChild(novaColuna);
  }
  const dimensaoCorreta = 42 * tamanho;
  const tamanhoDoQuadro = document.getElementById('pixel-board');
  tamanhoDoQuadro.style.width = `${dimensaoCorreta}px`;
  tamanhoDoQuadro.style.heigth = `${dimensaoCorreta}px`;
}
