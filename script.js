let currentSelectedColor = 'rgb(0, 0, 0)';
let pixelBoardNumber = 1;

function clicouCor(evento) {
  const paletteElement = evento.target;
  const paletteElementBackgroundColor =
    window.getComputedStyle(paletteElement).backgroundColor;
  currentSelectedColor = paletteElementBackgroundColor;
}

function onLoadRefreshColors() {
  let elementos = document.querySelectorAll('.color');
  for (let elemento of elementos) {
    elemento.onclick = clicouCor;
    if (elemento.id !== 'color1') {
      elemento.style.backgroundColor = generateRgbColor();
    }
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
  pixelBoardNumber = Number(document.getElementById('input').value);
  const pixelBoard = document.getElementById('pixel-board');
  if (pixelBoardNumber >= 5) {
    for (let i = 0; i < pixelBoardNumber; i++) {
      const div = document.createElement('div');
      div.className = 'line';
      for (let j = 0; j < pixelBoardNumber; j++) {
        const pixelDiv = document.createElement('div');
        pixelDiv.className = 'pixel';
        div.appendChild(pixelDiv);
      }
      divs.push(div);
    }
    pixelBoard.innerHTML = '';
    for (let i = 0; i < divs.length; i++) {
      pixelBoard.appendChild(divs[i]);
    }
  }
  console.log(divs);
}

onLoadRefreshColors();
