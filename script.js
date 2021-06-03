// Cria quadrado de pixels 5 x 5
const table = document.createElement('table');
table.id = 'table';
document.getElementById('pixel-board').appendChild(table);
for (let line = 0; line < 5; line++) {
  const pixelLine = document.createElement('tr');
  for (let colum = 0; colum < 5; colum ++) {
    const pixelData = document.createElement('td');
    pixelData.className = 'pixel';
    pixelLine.appendChild(pixelData);
  }
  table.appendChild(pixelLine);
}

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
const pData = document.querySelectorAll('td');
for (let index = 0; index < pData.length; index++) {
  pData[index].onclick = function selectedPixel() {
    pData[index].className += ' selected';
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