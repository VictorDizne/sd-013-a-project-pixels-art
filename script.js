function initialBoard(number) {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < number; index += 1) {
    const newUl = document.createElement('ul');
    const lines = board.appendChild(newUl);
    lines.id = 'pixel-table';
    const pixel = document.querySelectorAll('#pixel-table');
    for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
      const newLi = document.createElement('li');
      const pixels = pixel[index].appendChild(newLi);
      pixels.className = 'pixel';
    }
  }
}
initialBoard(5);

function whatIsTheColor() {
  const element = document.querySelector('.selected');
  const style = getComputedStyle(element);
  return style.backgroundColor;
}

function paint() {
  const pixel = document.querySelectorAll('.pixel');
  for (let indexPaint = 0; indexPaint < pixel.length; indexPaint += 1) {
    pixel[indexPaint].addEventListener('click', () => {
      const string = whatIsTheColor();
      pixel[indexPaint].style.backgroundColor = string;
    });
  }
}
paint();

function removeChild(number) {
  const erase = document.querySelectorAll('#pixel-table');
  const parent = document.querySelector('#pixel-board');
  for (let index = 0; index < number; index += 1) {
    parent.removeChild(erase[index]);
  }
}
const sizeInput = document.querySelector('#board-size');
const btnSize = document.querySelector('#generate-board');
function newBoard() {
  let pixelSize = 5;
  btnSize.addEventListener('click', () => {
    removeChild(pixelSize);
    pixelSize = parseInt(sizeInput.value, 10);
    if (sizeInput.value === '') {
      alert('Board inválido!');
    } else if (pixelSize < 5) {
      pixelSize = 5;
      initialBoard(pixelSize);
    } else if (pixelSize > 50) {
      pixelSize = 50;
      initialBoard(pixelSize);
    } else {
      initialBoard(pixelSize);
    }
    paint();
  });
}
newBoard();

function selectColor() {
  const clickC = document.querySelectorAll('.color');
  for (let indexColor = 0; indexColor < clickC.length; indexColor += 1) {
    clickC[indexColor].addEventListener('click', () => {
      const unselectColor = document.getElementsByClassName('selected');
      unselectColor[0].className = 'color';
      const colorSelected = document.getElementsByClassName('color')[indexColor];
      colorSelected.className = 'color selected';
    });
  }
}
selectColor();

function resetColor() {
  const pixel = document.querySelectorAll('.pixel');
  const reset = document.querySelector('#clear-board');
  reset.addEventListener('click', () => {
    for (let indexReset = 0; indexReset < pixel.length; indexReset += 1) {
      pixel[indexReset].style.backgroundColor = 'white';
    }
  });
}
resetColor();

function randomColor() {
  const number1 = parseInt(Math.random() * 255, 10);
  const number2 = parseInt(Math.random() * 255, 10);
  const number3 = parseInt(Math.random() * 255, 10);
  const change2 = document.getElementById('color2');
  const change3 = document.getElementById('color3');
  const change4 = document.getElementById('color4');
  change2.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
  change3.style.backgroundColor = `rgb(${number2}, ${number3}, ${number1})`;
  change4.style.backgroundColor = `rgb(${number3}, ${number1}, ${number2})`;
}
randomColor();
