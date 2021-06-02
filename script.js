const paletaColor = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const bntClear = document.getElementById('clear-board');
const bntPixelBoard = document.getElementById('generate-board');

// função retorna uma valor de 0 ao numero
function randomNumber(numero) {
  return Math.floor(Math.random() * numero);
}

// Criar as div com cores diferente
function randomColorDiv() {
  const listCor = [
    'Silver', 'Gray', 'Red', 'Maroon',
    'Yellow', 'Olive', 'Lime', 'Aqua', 'Blue', 'Navy',
    'Fuchsia', 'Purple',
  ];
  const listaCorDiv = document.getElementsByClassName('color');
  listaCorDiv[0].style.backgroundColor = 'black'; // Primeiro div Black

  for (const el of listaCorDiv) {
    if (el.style.backgroundColor !== 'black') {
      // Usa a cor e deleta ela da lista.
      el.style.backgroundColor = listCor.splice(randomNumber(listCor.length), 1);
    }
  }
}

// Criar o quadro de pixels
function createPixelBord(numero = 5) {
  const pixelBordDiv = document.getElementById('pixel-board');
  for (let linha = 0; linha < numero; linha += 1) {
    const divLinha = document.createElement('div');
    divLinha.className = 'linha';
    for (let coluna = 0; coluna < numero; coluna += 1) {
      const divCelular = document.createElement('div');
      divCelular.className = 'pixel';
      divLinha.appendChild(divCelular);
    }
    pixelBordDiv.appendChild(divLinha);
  }
}

// Função que seleciona a cor
function selectCorClick(elemet) {
  const el = elemet;
  const listPaleta = document.getElementsByClassName('color');
  for (const select of listPaleta) {
    if (el.target.className !== '') {
      select.className = 'color';
    }
  }

  if (el.target.className === 'color') {
    el.target.className = 'color selected ';
  }
}

paletaColor.addEventListener('click', selectCorClick);

// Usar cor selecionada para pinta a div
function useSelectedColor(elemet) {
  const el = elemet;
  const corSelect = document.getElementsByClassName('color selected')[0];
  el.target.style.backgroundColor = corSelect.style.backgroundColor;
}

function resetColor() {
  const pixelDiv = document.querySelectorAll('.pixel');
  for (const div of pixelDiv) {
    div.style.backgroundColor = 'white';
  }
}

// Função para Criar uma Pixel board personalizada.
function pixelBoardSize() {
  // Seleciona o pai para pode deleta o filhos

  let inputPixelBoard = Number(document.getElementById('board-size').value);
  if (inputPixelBoard <= 0) {
    return alert('Board inválido!');
  }

  if (inputPixelBoard >= 51) {
    inputPixelBoard = 50;
  } else if (inputPixelBoard <= 5) {
    inputPixelBoard = 5;
  }

  // lista de filhos para deleta
  const linhaPixel = document.querySelectorAll('.linha');

  for (const linha of linhaPixel) {
    pixelBoard.removeChild(linha);
  }

  createPixelBord(inputPixelBoard);
}
pixelBoard.addEventListener('click', useSelectedColor);
bntClear.addEventListener('click', resetColor);
bntPixelBoard.addEventListener('click', pixelBoardSize);

window.onload = () => {
  randomColorDiv();
  createPixelBord(5);
};
