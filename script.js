const colorBlack = document.getElementById('colorBlack');
colorBlack.style.backgroundColor = 'black';
const colorRed = document.getElementById('colorRed');
colorRed.style.backgroundColor = 'Red';
const colorBlue = document.getElementById('colorBlue');
colorBlue.style.backgroundColor = 'Blue';
const colorGreen = document.getElementById('colorGreen');
colorGreen.style.backgroundColor = 'Green';

// Escolher tamanho do board
const inputSize = document.getElementById('board-size');
const btnGenerateBorder = document.getElementById('generate-board');
const accessTable = document.getElementById('pixel-board');

let appliedColor = 'black';

const btnClearBoard = document.getElementById('clear-board');

// Funções que criam a tabela com tamanho 5.
// Função que cria células.
function cellCreate(size, row){
  for(let index = 0; index < size; index  += 1){
    const cell = document.createElement('td');
    cell.classList = 'pixel';
    row.appendChild(cell);
  }
}

// função criar linhas (row)
function rowCreate (size){
  for(let index = 0; index < size; index += 1){
    const row = document.createElement('tr');
    accessTable.appendChild(row);
    row.classList.add('pixel-row');
    cellCreate(size, row);
  }
}rowCreate(5);

const getPixelOnBoard = document.querySelectorAll('.pixel');

// função para pintar o tabuleiro de branco
function clearBoard() {
  for (let index = 0; index < getPixelOnBoard.length; index += 1){
    getPixelOnBoard[index].style.backgroundColor = 'white';
  }
}

btnClearBoard.addEventListener('click', clearBoard);

// Funções que recebem a cor selecionada
function colorSelectBlack(event) {
  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorBlack.classList.remove('selected');
  colorBlack.classList.add('selected');
  // Captura com 'event.target' a cor do background.
  const colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(colorToApply);
}
colorBlack.addEventListener('click', colorSelectBlack);

function colorSelectRed(event) {
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorRed.classList.add('selected');
  const colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(colorToApply);
}
colorRed.addEventListener('click', colorSelectRed);

function colorSelectBlue(event) {
  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorBlue.classList.add('selected');
  const colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(colorToApply);
}
colorBlue.addEventListener('click', colorSelectBlue);

function colorSelectGreen(event) {
  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.add('selected');
  const colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(colorToApply);
}
colorGreen.addEventListener('click', colorSelectGreen);

// Obtêm novo tamanho do boarde n*n.
function getPixelColor(){
  const sizeClassPixel = document.querySelectorAll('.pixel');
  pixelColorListener(sizeClassPixel);
}

function pixelColorListener(who) {
  for (let index = 0; index < who.length; index += 1) {
    who[index].addEventListener('click', function () {
    who[index].style.backgroundColor = appliedColor;
    });
  }
} pixelColorListener(getPixelOnBoard);

function checkBoardLimits (){
  if(inputSize.value < 5){
    inputSize.value = 5;
  }
  if(inputSize.value > 50){
    inputSize.value = 50;
  }
}

// Cria um novo board a partir do input do usuário.
function boardSizeChange() {
  if (inputSize.value) {
    checkBoardLimits();
    accessTable.innerHTML = '';
    rowCreate(inputSize.value);
    getPixelColor();
  }else {
    alert('Board Inválido!');
  }
}

btnGenerateBorder.addEventListener('click', boardSizeChange);
