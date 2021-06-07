// Controle de tamanho
const boardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board');

function boardSquad(n) {
  const table = document.createElement('table');
  document.getElementById('pixel-board').appendChild(table);
  for (let line = 0; line < n; line++) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'linha';
    for (let colum = 0; colum < n; colum++) {
      const pixelData = document.createElement('div');
      pixelData.className = 'pixel';
      pixelLine.appendChild(pixelData);
    }
    table.appendChild(pixelLine);
  }
}

boardSquad(5);
// Falta criar o botão que seleciona o tamanho do board
/* generateBoard.onclick = function myClick() {
  // Code ...
}; */

// Variaveis da Paleta de Cores
const black = document.getElementById('black');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

// Inicia com cor preta selecionada
black.className += ' selected';

black.onclick = function colorBlack() {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  black.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'black';
};

green.onclick = function colorGreen() {
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  green.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'green';
};

red.onclick = function colorRed() {
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  red.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'red';
};

blue.onclick = function colorBlue() {
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  blue.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'blue';
};

// Selecionar elementos do quadrado de pixel
const pData = document.querySelectorAll('.pixel');
for (let index = 0; index < pData.length; index++) {
  pData[index].onclick = function selectedPixel() {
    if (black.className === 'color selected') {
      pData[index].style.backgroundColor = 'black';
    }
    if (green.className === 'color selected') { 
      pData[index].style.backgroundColor = 'green';
    }
    if (red.className === 'color selected') {
      pData[index].style.backgroundColor = 'red';
    }
    if (blue.className === 'color selected') {
      pData[index].style.backgroundColor = 'blue';
    }
  };
}

// Botão Limpar
const clearButton = document.getElementById('clear-board');
clearButton.onclick = function clearPixels() {
  for (let index = 0; index < pData.length; index++) {
    pData[index].style.backgroundColor = 'white';
  }
};
