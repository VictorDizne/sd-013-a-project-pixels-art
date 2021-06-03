const clearTable = document.querySelector('#clear-board');
const pixels = document.querySelectorAll('.pixel');
const cor1 = document.querySelector('.cor1');
const cor2 = document.querySelector('.cor2');
const cor3 = document.querySelector('.cor3');
const cor4 = document.querySelector('.cor4');

window.onload = function () {
  cor1.classList.add('selected');
};

function addClass(event) {
  const elementClass = document.querySelector('.selected');
  elementClass.classList.remove('selected');
  event.target.classList.add('selected');
}

cor1.addEventListener('click', addClass);
cor2.addEventListener('click', addClass);
cor3.addEventListener('click', addClass);
cor4.addEventListener('click', addClass);

function colorir(event) {
  const classSelectorOno = document.querySelector('.selected');
  const css = window.getComputedStyle(classSelectorOno).getPropertyValue('background-color');
  event.target.style.background = css;
}

for (let c = 0; c < 25; c += 1) {
  const allPixels = pixels[c];
  allPixels.addEventListener('click', colorir);
}

function clearPixels() {
  for (let c = 0; c < pixels.length; c += 1) {
    pixels[c].style.background = 'white';
  }
}

clearTable.addEventListener('click', clearPixels);
