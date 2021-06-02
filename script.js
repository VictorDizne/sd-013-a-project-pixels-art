function quadroDePixels() {
  const quadro = document.createElement('div');
  quadro.id = 'pixel-board';
  document.body.appendChild(quadro);

  for (let i = 0; i < 5; i += 1) {
    const pixelLinha = document.createElement('div');
    pixelLinha.className = 'pixel-linha';
    quadro.appendChild(pixelLinha);
    for (let j = 0; j < 5; j += 1) {
      const pixelColuna = document.createElement('div');
      pixelColuna.className = 'pixel';
      pixelLinha.appendChild(pixelColuna);
    }
  }
}
quadroDePixels();
