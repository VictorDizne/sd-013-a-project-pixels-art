// Iniciando o projeto.
const colorBlack = document.getElementById('colorBlack');
colorBlack.style.backgroundColor = 'black';
const colorRed = document.getElementById('colorRed');
colorRed.style.backgroundColor = 'Red';
const colorBlue = document.getElementById('colorBlue');
colorBlue.style.backgroundColor = 'Blue';
const colorGreen = document.getElementById('colorGreen');
colorGreen.style.backgroundColor = 'Green';

//  Requiremet 7.
// adicionar a classe `classe selected` a cor selecionada e retira a mesma classe da outra cor
colorBlack.addEventListener('click', colorSelectBlack);
colorRed.addEventListener('click', colorSelectRed);
colorBlue.addEventListener('click', colorSelectBlue);
colorGreen.addEventListener('click', colorSelectGreen);

function colorSelectBlack() {
  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorBlack.classList.add('selected');
  }
function colorSelectRed() {
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorRed.classList.add('selected');
  }

function colorSelectBlue() {
  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorBlue.classList.add('selected');
  }

function colorSelectGreen() {
  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.add('selected');
  }
