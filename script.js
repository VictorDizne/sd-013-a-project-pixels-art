// Paleta de cores: conforme uma cor é adicionada no array é necessário adicionar tambem uma div no html.
function setColour() {
  const penColor = document.getElementsByClassName('color');
  const colors = ['black', 'blue', 'green', 'red'];

  for (let i = 0; i < penColor.length; i += 1) {
    penColor[i].style.backgroundColor = colors[i];
  }
}
setColour();

// Constrói o quadro de pixels com linhas e colunas, mas como #pixel-board está com x tamnho para organizar os pixels, não vai passar de 5 colunas.
function coloringBoard() {
  const paintScreen = document.querySelector('#pixel-board');
  const line = 5;
  const colum = 5;
  for (let ii = 0; ii < line; ii += 1) {
    const paintScreenLine = document.createElement('div');
    paintScreen.appendChild(paintScreenLine);

    for (let jj = 0; jj < colum; jj += 1) {
      const paintScreenColum = document.createElement('div');
      paintScreenColum.className = 'pixel';
      paintScreen.appendChild(paintScreenColum);
    }
  }
}
coloringBoard();

// Deixa os pixels brancos, limpar a tela de colorir.
function whiteColor() {
  const divs = document.querySelectorAll('.pixel');
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i] !== 'white') {
      divs[i].style.backgroundColor = 'white';
    }
  }
  document.getElementById('clear-board').addEventListener('click', whiteColor);
}
whiteColor();

// Referẽncia: https://github.com/tryber/sd-013-a-project-pixels-art/blob/jaqueline-silva-project-pixels-art/script.js
// Adiciona a classe selected ao clicar sobre uma cor, contudo ao acontecer o carregamento da página a div black já vem selecionada, pois adicionei a classe no html diretamente.
window.onload = function classS() {
  const pixelDiv = document.querySelectorAll('.color');

  function addClass(event) {
    for (let i = 0; i < pixelDiv.length; i += 1) {
      if (pixelDiv[i].classList.contains('selected')) {
        pixelDiv[i].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }
  for (let j = 0; j < pixelDiv.length; j += 1) {
    pixelDiv[j].addEventListener('click', addClass);
  }
};

// O método 'window.getComputedStyle(element), permite pegar do element (elemento o qual será obtido o estilo, no caso os botões coloridos da paleta de cores) por meio do evento click todas suas propiedades CSS e com a função colors aplicar a com a tela de pixels.
function toColor() {
  const pixelScreeam = document.querySelectorAll('.pixel');

  function colors(element) {
    const colorSelected = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
    element.target.style.backgroundColor = colorSelected;
  }
  for (let i = 0; i < pixelScreeam.length; i += 1) {
    pixelScreeam[i].addEventListener('click', colors);
  }
}
toColor();
