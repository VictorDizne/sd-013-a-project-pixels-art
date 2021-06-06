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

const colors = document.getElementsByClassName('color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', mudaCores);
}

function mudaCores(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove("selected");
  }
  event.target.classList.add("selected");
}

const qdrPixel = document.getElementsByClassName('pixel');
for (let i = 0; i < qdrPixel.length; i += 1) {
  qdrPixel[i].addEventListener('click', preencheQuadro)
}

function preencheQuadro(event) {
  const corSelecionada = document.getElementsByClassName('selected')
  const corParaPintar = getComputedStyle(corSelecionada[0]).getPropertyValue("background-color");
  event.target.style.backgroundColor = corParaPintar;
}
