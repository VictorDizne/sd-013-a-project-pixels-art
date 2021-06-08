// Cria os pixels do board.
function pixelMaker(line, n) {
  for (let i = 0; i < n; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    line.appendChild(pixel);
  }
}

// Cria a linhas já com os pixel que preenchem o board, ou seja, cria o board.
function boardMaker(n) {
  const body = document.getElementsByTagName('body')[0];
  const pixelBoard = document.createElement('section');
  pixelBoard.setAttribute('id', 'pixel-board');
  body.appendChild(pixelBoard);

  for (let i = 0; i < n; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelMaker(line, n);
    pixelBoard.appendChild(line);
  }
}

// Define a cor preta como selecionada inicialmente.
function startBlack() {
  const colorBlack = document.getElementsByClassName('color')[0];
  colorBlack.classList.add('selected');
}

// Cria o evento de seleção de cores.
function colorSelect() {
  const selected = document.getElementsByClassName('selected');
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
      for (let i = 0; i < selected.length; i += 1) {
        const element = selected[i];
        element.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
}

// Cria a função de colorir os pixels.
function coloredPixels() {
  document.addEventListener('click', (event) => {
    const pixel = event.target;
    const selected = document.getElementsByClassName('selected')[0];
    const color = window.getComputedStyle(selected, null).getPropertyValue('background-color');
    if (pixel.classList.contains('pixel')) {
      pixel.style.backgroundColor = color;
    }
  });
}

// Cria a função de limpar o pixel board.
function boardCleaner() {
  const clearButton = document.getElementsByTagName('button')[0];
  const pixels = document.getElementsByClassName('pixel');

  clearButton.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      const element = pixels[i];
      element.style.backgroundColor = 'white';
    }
  });
}

// Remove o board atual. Terminar
function deleteBoard() {
  const board = document.getElementById('pixel-board');
  const body = document.getElementsByTagName('body')[0];

  body.removeChild(board);
}

// Cria um limite para o tamanho do board.
function boardLimit(n) {
  let number = n;
  if (number > 50) {
    number = 50;
  }
  if (number < 5) {
    number = 5;
  }
  if (number <= 0) {
    number = Math.max(number, 1);
  }
  return number;
}

// Cria função para definir o tamanho do board.
function boardSize() {
  const buttonVQV = document.getElementById('generate-board');
  const inputField = document.getElementById('board-size');

  buttonVQV.addEventListener('click', () => {
    let n = inputField.value;
    if (n === '') {
      alert('Board inválido!');
    } else {
      deleteBoard();
      n = boardLimit(n);
      boardMaker(n);
    }
  });
}

// Cria cores aleatórias.
function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

// Troca as cores da paleta.
function changeColors() {
  const colors = document.getElementsByClassName('color');

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    if (color !== colors[0]) {
      color.style.backgroundColor = randomColor();
    }
  }
}
changeColors();

boardMaker(5);
startBlack();
colorSelect();
coloredPixels();
boardCleaner();
boardSize();
