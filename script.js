window.onload = function () {
  boardMaker(5);
  startBlack();
  colorSelect();
  coloredPixels();
  boardCleaner();
  boardSize();
}
// Cria a linhas já com os pixel que preenchem o board, ou seja, cria o board.
function boardMaker(n) {
  let body = document.getElementsByTagName('body')[0];
  let pixelBoard = document.createElement('section')
  pixelBoard.setAttribute('id', 'pixel-board');
  body.appendChild(pixelBoard);

  for (let i = 0; i < n; i += 1) {
    let line = document.createElement('div');
    line.classList.add('line');
    pixelMaker(line, n);
    pixelBoard.appendChild(line);
  }
}

// Cria os pixels do board.
function pixelMaker(line, n) {

  for (let i = 0; i < n; i += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    line.appendChild(pixel);
  }
}

// Define a cor preta como selecionada inicialmente.
function startBlack() {
  let colorBlack = document.getElementsByClassName('color')[0];
  colorBlack.classList.add('selected');
}

// Cria o evento de seleção de cores.
function colorSelect() {
  let selected = document.getElementsByClassName('selected');
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      for (let element of selected) {
        element.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  })

}

// Cria a função de colorir os pixels.
function coloredPixels() {

  document.addEventListener('click', function (event) {
    let pixel = event.target;
    let selected = document.getElementsByClassName('selected')[0];
    let color = window.getComputedStyle(selected, null).getPropertyValue("background-color");
    if (pixel.classList.contains('pixel')) {
      pixel.style.backgroundColor = color;
    }
  })
}

// Cria a função de limpar o pixel board.
function boardCleaner() {
  let clearButton = document.getElementsByTagName('button')[0];
  let pixels = document.getElementsByClassName('pixel');

  clearButton.addEventListener('click', function () {
    for (let element of pixels) {
      element.style.backgroundColor = 'white';
    }
  })
}

// Remove o board atual. Terminar
function deleteBoard() {
  let board = document.getElementById('pixel-board');
  let body = document.getElementsByTagName('body')[0];


  body.removeChild(board);
}

// Cria função para definir o tamanho do board.
function boardSize() {
  let buttonVQV = document.getElementById('generate-board');
  let inputField = document.getElementById('board-size');


  buttonVQV.addEventListener('click', function () {

    let n = inputField.value;
    if (n === '') {
      alert('Board inválido!');
    } else {
      deleteBoard();
      n = boardLimit(n);
      boardMaker(n);
    }

  })

}

// Cria um limite para o tamanho do board.
function boardLimit(n) {
  if (n > 50) {
    n = 50;
  };
  if (n < 5) {
    n = 5;
  };
  if (n <= 0) {
    n = Math.max(n, 1);
  }
  return n;
}

// Cria cores aleatórias.
function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

// Troca as cores da paleta.
function changeColors() {
  let colors = document.getElementsByClassName('color');

  for (let color of colors) {
    if (color !== colors[0]) {
      color.style.backgroundColor = randomColor();
    }
  }
}
changeColors();

