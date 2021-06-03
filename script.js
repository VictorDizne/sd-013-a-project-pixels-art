// function creatPx(){
//   let quadro = 5;
//   for(let i = 0; i < quadro; i += 1){
//     const quadrado = document.createElement('div');
//     const pixelBoard = document.querySelector('#pixel-board');
//     pixelBoard.appendChild(quadrado);
//     quadrado.className = 'linha';
//     for (let index2 = 0; index2 < quadro; index2 += 1) {
//       const quadrado2 = document.createElement('div');
//       quadrado2.className = 'pixel';
//       quadrado.appendChild(quadrado2);
//   }
//   }
// };
// creatPx();
function addClassSelect(event){
  let corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
};
const corPreta = document.querySelector('.black');
const corVerm = document.querySelector('.red');
const corAmar = document.querySelector('.yellow');
const corVerd = document.querySelector('.green');
corPreta.addEventListener('click', addClassSelect);
corVerm.addEventListener('click', addClassSelect);
corAmar.addEventListener('click', addClassSelect);
corVerd.addEventListener('click', addClassSelect);


const pixels = document.getElementsByClassName('pixel');
for(let i = 0; i < pixels.length; i += 1){
  pixels[i].addEventListener('click', paint);
}
function paint(event){
  const e = event;
  const selected = document.querySelector('.selected');
  const color = getComputedStyle(selected).getPropertyValue('background-color');
  e.target.style.backgroundColor = color;
}

const limpar = document.getElementById('clear-board');
limpar.addEventListener('click', backgroundColorWhite);
function backgroundColorWhite(){
  for (let i = 0; i < pixels.length; i += 1){
    pixels[i].style.backgroundColor = 'white';
  };
};