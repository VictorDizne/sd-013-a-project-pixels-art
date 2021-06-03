// Definia a cor preta como cor inicial.
function selectedBlack() {
  const initialSelected = document.querySelector('.color-black');
  initialSelected.classList.add('selected');
}

// A cor inicial dos "pixels" dentro do quadro, ao abrir a página,
// deve ser branca;
function initialPixelColor(color) {
  const initialPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < initialPixel.length; i += 1) {
    initialPixel[i].style.background = color;
  }
}

// Selecione uma das cores da paleta, ao clicar, a cor selecionada é
// a que será utilizada para preencher os pixels no quadro.
function selectedColor() {
  const arrayColorPalette = document.querySelector('#color-palette');
  const arrayColors = document.getElementsByClassName('color');
  arrayColorPalette.addEventListener('click', (e) => {
    if (e.target.classList.contains('color')) {
      for (let i = 0; i < arrayColors.length; i += 1) {
        arrayColors[i].classList.remove('selected');
      }
      e.target.classList.add('selected');
    }
  });
}

selectedColor();

// Pintando os pixels em .pixel-board de acordo com o elemento cuja classe seja .selected.
function pixelSelected() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', e => {
    if (e.target.classList.contains('pixel')) {
      let pixelSelect = document.querySelector('.selected');
      let backgroundColor = window.getComputedStyle(pixelSelect).backgroundColor;
      e.target.style.backgroundColor = backgroundColor;
    }
  })
}

pixelSelected();

// Ao carregar a página
window.onload = function () {
  selectedBlack();
  initialPixelColor('white');
  selectedColor();
};
