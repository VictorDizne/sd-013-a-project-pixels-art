const recoverColorBlack = document.querySelector('#color1');
recoverColorBlack.className = 'color selected';

// ==========================================================
// Função que cria o Pixel Board a partir do número n:

function createPixelBoard(n) {
  const pixelBoard = document.querySelector('#pixel-board');  

  for (let index = 1; index <= n; index += 1) {
    const createTr = document.createElement('div');
    createTr.classList.add('tr');
    pixelBoard.appendChild(createTr);

    for (let secondIndex = 1; secondIndex <= n; secondIndex += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      createTr.appendChild(createPixel); 
    }
  }
}
createPixelBoard(5);

// =================================================================================
// Criação de cores aleatórias:

function coresAleatorias() {
  const red = Math.trunc(Math.random() * 255);
  const green = Math.trunc(Math.random() * 255);
  const blue = Math.trunc(Math.random() * 255);

  return (`rgb(${red}, ${green}, ${blue})`);
}

// ===============================================================================
// Aplicação de cores aleatórias:

const colorPalette = document.querySelectorAll('.color');

function aplicarCores() {
  for (let i = 1; i < colorPalette.length; i += 1) {
    colorPalette[i].style.backgroundColor = coresAleatorias();
  }
}
aplicarCores();

// ==============================================================================
// Selecionar cor:

function selecionaCor(e) {
  const whereIsSelected = document.querySelector('.selected');
  whereIsSelected.classList.remove('selected');
  e.target.classList.add('selected');
}

colorPalette.forEach(($color) => {
  $color.addEventListener('click', selecionaCor);
});

// ================================================================================
// Cor selecionada pinta o grid:

function selecionaEPinta() {
  const recoverPixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < recoverPixelBoard.length; i += 1) {
    recoverPixelBoard[i].addEventListener('click', function(event) {
    const whereIsSelectedClass = document.querySelector('.selected');
    const backgroundColorSelectedClass = window.getComputedStyle(whereIsSelectedClass, null).getPropertyValue("background-color");
        event.target.style.backgroundColor = backgroundColorSelectedClass;
      });
  }
}

selecionaEPinta();

// =============================================================================
// Botão que reseta o game:

function botaoReset() {
  const recoverPixelBoard = document.querySelectorAll('.pixel');
  const buttonClearBoard = document.querySelector('#clear-board');
  const colorWhite = 'rgb(255, 255, 255)';
  buttonClearBoard.addEventListener('click', function () {
    for (let index = 0; index < recoverPixelBoard.length; index += 1) {
      let onePixel = recoverPixelBoard[index];
      onePixel.style.backgroundColor = colorWhite;
    }
  });
  }

botaoReset();

// ============================================================================

// função que limpa o quadro já existente:

function limpaGrid() {
  const recoverTr = document.querySelectorAll('.tr');
  const recoverPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < recoverTr.length; i += 1) {
    for (let iTwo = 0; iTwo < recoverPixel.length; iTwo += 1) {
      recoverPixel[iTwo].remove();
    }
  }

  for (let i = 0; i < recoverTr.length; i += 1) {
    recoverTr[i].remove();
  }
}

// ==================================================================================
// Tamanho definido pelo usuário (caixa de input) e valor máximo e mínimo.

const btnVQV = document.querySelector('#generate-board');
const captureNumber = '';

btnVQV.addEventListener('click', function(e) {
  const InputBoardSize = document.querySelector('#board-size');
  const value = InputBoardSize.value;

    if (value === captureNumber) {
      alert('Board Inválido');
    }

    if (InputBoardSize.value < 5) {
      limpaGrid();
      createPixelBoard(5);
      selecionaEPinta();
      botaoReset();
      aplicarCores()
      InputBoardSize.value = '';

      } else if (InputBoardSize.value > 50) {
        limpaGrid();
        createPixelBoard(50);
        selecionaEPinta();
        botaoReset();
        aplicarCores()
        InputBoardSize.value = '';

        } else {    
        limpaGrid();
        createPixelBoard(value);
        selecionaEPinta();
        botaoReset();
        aplicarCores()
        InputBoardSize.value = '';
          }
});
