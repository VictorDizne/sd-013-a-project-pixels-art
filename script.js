// Iniciando o projeto.
const colorBlack = document.getElementById('colorBlack');
colorBlack.style.backgroundColor = 'black';
const colorRed = document.getElementById('colorRed');
colorRed.style.backgroundColor = 'Red';
const colorBlue = document.getElementById('colorBlue');
colorBlue.style.backgroundColor = 'Blue';
const colorGreen = document.getElementById('colorGreen');
colorGreen.style.backgroundColor = 'Green';

const getPixelOnBoard  = document.querySelectorAll('.pixel');
var appliedColor = 'black';

//  Requirement 7.
// adicionar a classe `classe selected` a cor selecionada e retira a mesma classe da outra cor
colorBlack.addEventListener('click', colorSelectBlack);
colorRed.addEventListener('click', colorSelectRed);
colorBlue.addEventListener('click', colorSelectBlue);
colorGreen.addEventListener('click', colorSelectGreen);
pixelColor();
// Requirement 8
// adicionar um evento click que seleciona aquele elemento clicado e muda uma propriedade
function pixelColor() {
  for(let index in getPixelOnBoard) {
    getPixelOnBoard[index].addEventListener('click', function () {
    getPixelOnBoard[index].style.backgroundColor = appliedColor;
    })
  }
}

function colorSelectBlack(event) {
  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorBlack.classList.remove('selected');
  colorBlack.classList.add('selected');
  // Captura com 'event.target' a cor do background.
  let colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(appliedColor);
}

function colorSelectRed(event) {
  colorBlack.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorRed.classList.add('selected');
  let colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(appliedColor);
}

function colorSelectBlue(event) {
  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorBlue.classList.add('selected');
  let colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(appliedColor);
}

function colorSelectGreen(event) {
  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorBlue.classList.remove('selected');
  colorGreen.classList.add('selected');
  let colorToApply = event.target.style.backgroundColor;
  appliedColor = colorToApply;
  console.log(appliedColor);
}
