const title = 'Projeto Pixel Art - Paleta de Cores';
const colorPalette = document.querySelector('#color-palette');
const divsOfPalette = document.querySelector('#color-palette').children;
const pixelBoard = document.querySelector('#pixel-board');
const tr = document.querySelector('#pixel-board').children;
const btnClear = document.querySelector('#clear-board');
const btnRandom = document.querySelector('#random');
const btnChangeSize = document.querySelector('#generate-board');
const txtSize = document.querySelector('#board-size');
let numLinesAndColumn = 5;
let colors = [];
let colorSelected = 'black';
let titleCounter = 0;

function introTitle() {
  if (titleCounter < title.length) {
    document.querySelector('#title').innerHTML += title.charAt(titleCounter);
    titleCounter += 1;
    setTimeout(introTitle, 110);
  }
}

function storeRandomColors(index, div) {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const createdDiv = div;

  if (index === 0) {
    colors.push(createdDiv.style.backgroundColor = 'black');
    createdDiv.className = 'color selected';
  } else {
    colors.push(createdDiv.style.backgroundColor = `rgb(${red},${green},${blue})`);
  }
}

function createColorPalette() {
  colors = [];
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.id = index;
    colorPalette.appendChild(div);

    storeRandomColors(index, div);
  }
}

function createLines() {
  for (let numLine = 0; numLine < numLinesAndColumn; numLine += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    pixelBoard.appendChild(line);
  }
}

function createPixels() {
  for (let line = 0; line < tr.length; line += 1) {
    for (let column = 0; column < numLinesAndColumn; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      tr[line].appendChild(pixel);
    }
  }
}

function resetClassSelected() {
  for (let index = 0; index < divsOfPalette.length; index += 1) {
    divsOfPalette[index].className = 'color';
  }
}

function resetColorPalette() {
  const count = colorPalette.childElementCount;
  for (let index = 0; index < count; index += 1) {
    colorPalette.removeChild(colorPalette.children[0]);
  }
}

function resetPixelBoard() {
  const count = pixelBoard.childElementCount;
  for (let index = 0; index < count; index += 1) {
    pixelBoard.removeChild(pixelBoard.children[0]);
  }
}

function afterError() {
  document.querySelector('input').style.border = '1px solid black';
}

function inputSizeVerificator() {
  const maxValue = 50;
  const minValue = 5;

  if (txtSize.value < minValue) {
    numLinesAndColumn = minValue;
  } else if (txtSize.value > maxValue) {
    numLinesAndColumn = maxValue;
  } else {
    numLinesAndColumn = parseInt(txtSize.value, 10);
  }
}

function catchColor(eventOfColorSelector) {
  const clickedEvent = eventOfColorSelector.target;

  for (let index = 0; index < colors.length; index += 1) {
    if (parseInt(eventOfColorSelector.target.id, 10) === index) {
      clickedEvent.className = 'color selected';
      colorSelected = colors[index];
    }
  }
}

btnClear.addEventListener('click', function clearPixelBoard() {
  console.log('Botão de limpar acionado.');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }

  return this;
});

btnRandom.addEventListener('click', function reloadColors() {
  resetColorPalette();
  createColorPalette();

  return this;
});

btnChangeSize.addEventListener('click', function changeSize() {
  if (txtSize.value === '') {
    alert('Board inválido!');
    document.querySelector('input').style.border = '3px solid red';
    setTimeout(afterError, 2500);
  } else {
    inputSizeVerificator();
    resetPixelBoard();
    createLines();
    createPixels();
  }

  return this;
});

document.addEventListener('click', function colorSelector(event) {
  if (event.target.classList.contains('color')) {
    console.log(`div Color ${event.target.id}`);
    resetClassSelected();
    catchColor(event);
  }

  return this;
});

document.addEventListener('click', function paintPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const eventStyle = event.target.style;
    console.log('pixel clicado');
    eventStyle.backgroundColor = colorSelected;
  }

  return this;
});

window.onload = function initProcedures() {
  introTitle();
  createColorPalette();
  createLines();
  createPixels();
};
