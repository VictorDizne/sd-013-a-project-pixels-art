let paiColor = document.querySelector('#color-palette');
let colorList = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
let clear = document.querySelector('#clear-board');

let cor1 = document.querySelector('.cor1');
let cor2 = document.querySelector('.cor2');
let cor3 = document.querySelector('.cor3');
let cor4 = document.querySelector('.cor4');

window.onload = function() {
  cor1.classList.add('selected');
}

function addClass(event) {
  let elementClass = document.querySelector('.selected');
  elementClass.classList.remove('selected');
  event.target.classList.add('selected');
}

cor1.addEventListener('click', addClass);
cor2.addEventListener('click', addClass);
cor3.addEventListener('click', addClass);
cor4.addEventListener('click', addClass);

function colorir(event) {
  let classSelectorOno = document.querySelector('.selected');
  let css = window.getComputedStyle(classSelectorOno).getPropertyValue('background-color');
  event.target.style.background = css;
}

for (let c = 0; c < 25; c += 1) {
  let allPixels = pixels[c];
  allPixels.addEventListener('click', colorir);
}

