const classColor = document.querySelectorAll('.color');

//- Adiciona pallete de cores
function colorsPalletes() {
  const pallets = ['#000000', '#F10202', '#2200FD', '#257400'];
  for (let index = 0; index < classColor.length; index += 1) {
    classColor[index].style.backgroundColor = pallets[index];
  }
}
colorsPalletes();

//- Cria o board
function createBoard() {
  const idBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const createPixelBoard = document.createElement('div');
    createPixelBoard.className = 'pixel';
    idBoard.appendChild(createPixelBoard);
  }
}
createBoard();

//- Inicia com a cor preta
function initBlack() {
  const styleColor = classColor[0].getAttribute('style');
  colorPixelBoard(styleColor);
}
initBlack();

//- Pega uma cor no pellete e adiciona no board
function getColor() {
  for (let index = 0; index < classColor.length; index += 1) {
    const styleColor = classColor[index].getAttribute('style');
    classColor[index].addEventListener('click', function() {
      if (classColor[index].classList[1] !== 'selected') {
        verifySelec(index);
        classColor[index].className = 'color selected';
        colorPixelBoard(styleColor);
      }
    });
  }
}
getColor();

function verifySelec(indexValue) {
  let indexClass = indexValue;
  switch (indexClass) {
    case 0:
      classColor[indexClass].nextElementSibling.nextElementSibling.nextElementSibling.className = 'color';
      classColor[indexClass].nextElementSibling.nextElementSibling.className = 'color';
      classColor[indexClass].nextElementSibling.className = 'color';
      break;
    case 1:
      classColor[indexClass].nextElementSibling.nextElementSibling.className = 'color';
      classColor[indexClass].nextElementSibling.className = 'color';
      classColor[indexClass].previousElementSibling.className = 'color';
      break;
    case 2:
      classColor[indexClass].nextElementSibling.className = 'color';
      classColor[indexClass].previousElementSibling.className = 'color';
      classColor[indexClass].previousElementSibling.previousElementSibling.className = 'color';
      break;
    case 3:
      classColor[indexClass].previousElementSibling.className = 'color';
      classColor[indexClass].previousElementSibling.previousElementSibling.className = 'color';
      classColor[indexClass].previousElementSibling.previousElementSibling.previousElementSibling.className = 'color';
      break;
  }
}

function colorPixelBoard(styleValue) {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', () => {
      pixel[index].style.cssText = styleValue;
    });
  }
}

//- Botão para limpar o board
function buttonClear() {
  const idButton = document.querySelector('#clear-board');
  const pixel = document.querySelectorAll('.pixel');
  idButton.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
buttonClear();
