const classColor = document.querySelectorAll('.color');

function colorsPalletes() {
  const pallets = ['#000000', '#F10202', '#2200FD', '#257400'];
  for (let index = 0; index < classColor.length; index += 1) {
    classColor[index].style.backgroundColor = pallets[index];
  }
}
colorsPalletes();

function createBoard() {
  const idBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const createPixelBoard = document.createElement('div');
    createPixelBoard.className = 'pixel';
    idBoard.appendChild(createPixelBoard);
  }
}
createBoard();

function initBlack() {
  for (let index = 0; index < classColor.length; index += 1) {
    const styleColor = classColor[index].getAttribute('style');
    if (classColor[0].classList[1] === undefined) {
      classColor[0].className += ' selected';
      colorPixelBoard(styleColor);
    }
  }
}
initBlack();

function getColor() {
  for (let index = 0; index < classColor.length; index += 1) {
    const styleColor = classColor[index].getAttribute('style');
    classColor[index].addEventListener('click', function() {
      if (classColor[index].classList[1] === 'selected') {
        classColor[index].className = 'color';
      } else {
        classColor[index].className = 'color selected';
        colorPixelBoard(styleColor);
      }
    });
  }
}
getColor();

function colorPixelBoard(styleValue) {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click',function() {
      pixel[index].style.cssText = styleValue;
    });
  }
}
