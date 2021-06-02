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
  let pixelBoard = document.getElementById('pixel-board');

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

// Cria função para remove Child. Terminar
function removeChildFunc(parent, children) {
  for (let i = 1; i < children.length; i += 1) {
    parent.removeChild(children[i]);

  }
}

// Remove o board atual. Terminar
function deleteBoard() {
  let board = document.getElementById('pixel-board');
  let lines = document.getElementsByClassName('line');

  for (let line of lines) {
    let pixels = line.children;
    removeChildFunc(line, pixels);
  }
  removeChildFunc(board, lines);


}

// Cria função para definir o tamanho do board. Terminar
function boardSize() {
  let buttonVQV = document.getElementById('generate-board');
  let inputField = document.getElementById('board-size');

  buttonVQV.addEventListener('click', function () {

    deleteBoard();
    let n = inputField.value;
    if (n === '') {
      alert('Board inválido!');
    }
    if (n > 0) {
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

// Troca a cor da paleta.
function changeColors() {
  let colors = document.getElementsByClassName('color');

  for (let color of colors) {
    if (color !== colors[0]) {
      color.style.backgroundColor = randomColor();
    }
  }
}
changeColors();

