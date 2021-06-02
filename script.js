let currentSelectedColor = 'rgb(0, 0, 0)';
let pixelBoardNumber = 1;
let elementos;

function clicouCor(evento) {
  for (let elemento of elementos) {
    elemento.onclick = clicouCor;
    if (elemento.classList.contains('selected')) {
      elemento.classList.remove('selected');
    }
  }
  const paletteElement = evento.target;
  paletteElement.classList.add('selected');
  const paletteElementBackgroundColor =
    window.getComputedStyle(paletteElement).backgroundColor;
  currentSelectedColor = paletteElementBackgroundColor;
}

function onLoadRefreshColors() {
  elementos = document.querySelectorAll('.color');
  pixels = document.querySelectorAll('.pixel');
  for (let elemento of elementos) {
    elemento.onclick = clicouCor;
    if (elemento.id !== 'color1') {
      elemento.style.backgroundColor = generateRgbColor();
    }
  }
  for (let pixel of pixels) {
    pixel.onclick = applyColor;
  }
}

function generateRgbColor() {
  const R = Math.random() * (255 - 0) + 0;
  const G = Math.random() * (255 - 0) + 0;
  const B = Math.random() * (255 - 0) + 0;
  return `rgb(${R}, ${G}, ${B})`;
}
function refreshColors() {
  onLoadRefreshColors();
}

function numberPixelBoard() {
  const divs = [];
  pixelBoardNumber = Number(document.getElementById('board-size').value);
  const pixelBoard = document.getElementById('pixel-board');
  if (pixelBoardNumber == '' || pixelBoardNumber < 0) {
    alert('Board inválido!');
  }
  if (pixelBoardNumber > 50) {
    pixelBoardNumber = 50;
  } else if (pixelBoardNumber < 5) {
    pixelBoardNumber = 5;
  }
  for (let i = 0; i < pixelBoardNumber; i++) {
    const div = document.createElement('div');
    div.className = 'line';
    for (let j = 0; j < pixelBoardNumber; j++) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      pixelDiv.onclick = applyColor;
      div.appendChild(pixelDiv);
    }
    divs.push(div);
  }
  pixelBoard.innerHTML = '';
  for (let i = 0; i < divs.length; i++) {
    pixelBoard.appendChild(divs[i]);
  }
}

function applyColor(evento) {
  const pixelElement = evento.target;
  pixelElement.style.backgroundColor = currentSelectedColor;
  console.log(pixelElement);
  console.log(currentSelectedColor);
}

function refreshBoard() {
  const refresh = document.getElementsByClassName('pixel');
  for (const i of refresh) {
    i.style.backgroundColor = 'white';
  }
}

onLoadRefreshColors();
