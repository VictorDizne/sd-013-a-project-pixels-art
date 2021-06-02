const colorPalette = document.querySelector('#color-palette');
const divsOfPalette = document.querySelector('#color-palette').children;;
const pixelBoard = document.querySelector('#pixel-board');
let tr = document.querySelector('#pixel-board').children;
let colors = [];
let colorSelected = 'black';
let btnClear = document.querySelector('#clear-board');
let btnRandom = document.querySelector('#random');
let btnChangeSize = document.querySelector('#generate-board');
let txtSize = document.querySelector('#board-size');
let numLinesAndColumn = 5;


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

function storeRandomColors(index, div) {
  let red = Math.random()*255;
  let green = Math.random()*255;
  let blue = Math.random()*255;
  let color;

  if (index === 0) {
    color = div.style.backgroundColor = 'black';
    colors.push(color);
    div.className = 'color selected';
  } else {
    color = div.style.backgroundColor = `rgb(${red},${green},${blue})`;
    colors.push(color);
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
  let count = colorPalette.childElementCount;
  for (let index = 0; index < count; index += 1) {
    colorPalette.removeChild(colorPalette.children[0]);
  }
}

function resetPixelBoard() {
  let count = pixelBoard.childElementCount;
  for (let index = 0; index < count; index += 1) {
    pixelBoard.removeChild(pixelBoard.children[0]);
  }
}


window.onload = function inicio() {
  createColorPalette();
  createLines();
  createPixels();

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
      console.log(`div ${event.target.id}`);
      resetClassSelected();
      for(let index = 0; index < colors.length; index += 1) {
        if (parseInt(event.target.id, 10) === index) {
          event.target.className = 'color selected';
          colorSelected = colors[index];
        }
      }
    }
  });

  btnClear.addEventListener('click', function() {
    console.log('botão de limpar foi clicado.');
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });

  btnRandom.addEventListener('click', function() {
    resetColorPalette();
    createColorPalette();
  });

  btnChangeSize.addEventListener('click', function() {
    if (txtSize.value === '') {
      alert('Board inválido!');
      document.querySelector('input').style.border = '3px solid red';
      setTimeout(() => { document.querySelector('input').style.border = '1px solid black'; }, 2000);
    } else {
      numLinesAndColumn = parseInt(txtSize.value, 10);
      resetPixelBoard();
      createLines();
      createPixels();
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pixel')) {
      console.log('pixel clicado')
      event.target.style.backgroundColor = colorSelected;
    }
  });
};

