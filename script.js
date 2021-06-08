// Requisito 6
function blackColorInitial() {
  const getBlack = document.querySelector('#black');
  getBlack.classList.add('selected');
}

window.onload = blackColorInitial;

// Requisito 7
// Para que exista apenas uma div com a classe 'selected' de cada vez
// Declarar variavel pai da paleta de cores
// Declarar array da paleta de cores
// Adicionar eventListener click na variavel pai
// Dentro da função do eventListener verificar se o evento.target tem a classe color (if)
// Criar um for para percorrer o array e retirar a classe selected
// eventTarget e adicionar a classe selected

function pixelBoard() {
  const arrayPalette = document.querySelector('#color-palette');
  const arrayColors = document.getElementsByClassName('color');
  arrayPalette.addEventListener('click', (event) => {
    for (let index = 0; index < arrayColors.length; index += 1) {
      arrayColors[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
pixelBoard();

// buscar elemento pela classe selected
// cor selecionada getcomputedstyle em selected pra pegar o estilo , especificar background color

function makeColorInPixel() {
  const getPixelBoard = document.querySelector('#pixel-board');
  getPixelBoard.addEventListener('click', (event) => {
    if (event.target.classList.contains('pixel')) {
      const getSelected = document.querySelector('.selected');
      const putColor = window.getComputedStyle(getSelected, null).getPropertyValue('background-color');
      event.target.style.backgroundColor = putColor;
    }
  });
}

makeColorInPixel();