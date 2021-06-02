window.onload = function () {
  const classColor = document.querySelectorAll('.color');
  const idBoard = document.querySelector('#pixel-board');
  // Adiciona pallete de cores
  function colorsPalletes() {
    const pallets = ['#000000', 
    'rgb(' + Math.ceil(Math.random()*255) + ', ' + Math.ceil(Math.random()*255) + ', ' + Math.ceil(Math.random()*255) + ')', 
    'rgb(' + Math.ceil(Math.random()*255) + ', ' + Math.ceil(Math.random()*255) + ', ' + Math.ceil(Math.random()*255) + ')', 
    'rgb(' + Math.ceil(Math.random()*255) + ', ' + Math.ceil(Math.random()*255) + ', ' + Math.ceil(Math.random()*255) + ')'];
    for (let index = 0; index < classColor.length; index += 1) {
      classColor[index].style.backgroundColor = pallets[index];
    }
  }
  colorsPalletes();

  // Cria o board
  boardSize();
  function createBoard(valueSize) {
    for (let index = 0; index < valueSize; index += 1) {
      fillBoard(valueSize);
    }
  }

  function removeBoard(valueSize) {
    for (let index = 0; index < valueSize; index += 1) {
      for (let index = 0; index < valueSize; index += 1) {
        const getPixelBoard = document.querySelector('.pixel');
        idBoard.removeChild(getPixelBoard);
      }
    }
  }

  function fillBoard(valueSize) {
    let valorPixelBoard = 42 * valueSize;
    idBoard.style.width = valorPixelBoard + 'px';
    for (let index = 0; index < valueSize; index += 1) {
      const createPixelBoard = document.createElement('div');
      createPixelBoard.className = 'pixel';
      idBoard.appendChild(createPixelBoard);
    }
  }

  // Inicia com a cor preta
  function initBlack() {
    const styleColor = classColor[0].getAttribute('style');
    colorPixelBoard(styleColor);
  }
  initBlack();

  // Pega uma cor no pellete e adiciona no board
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
      classColor[indexClass].nextElementSibling.nextElementSibling.
      nextElementSibling.className = 'color';
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
      classColor[indexClass].previousElementSibling.previousElementSibling.
      previousElementSibling.className = 'color';
      break;
      default:
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

  // Botão para limpar o board
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

  // Tamanho do board
  function boardSize() {
    const buttonBoardSize = document.querySelector('#generate-board');
    const inputBoardSize = document.querySelector('#board-size');
    createBoard(5);
    buttonBoardSize.addEventListener('click', () => {
      removeBoard(5);
      if (inputBoardSize.value === '') {
        alert('Board inválido!');
      }
      if (inputBoardSize.value >= 5 && inputBoardSize.value <= 50) {
        createBoard(inputBoardSize.value);
      } else if (inputBoardSize.value < 5) {
        createBoard(5);
      } else if (inputBoardSize.value > 50) {
        createBoard(50);
      }
    });
  }
}
