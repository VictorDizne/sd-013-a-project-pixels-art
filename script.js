const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
  pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  // pixel.addEventListener('click', paint);
};

const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');

window.onload = function blackStarts() {
  colorOne.className = 'color one selected';
};

colorOne.addEventListener('click', getFirstColor);
colorTwo.addEventListener('click', getSecondColor); 
colorThree.addEventListener('click', getTirdColor);
colorFour.addEventListener('click', getFourthColor);

function getFirstColor() {
  colorOne.className = 'color one selected';
  colorTwo.className = 'color two';
  colorThree.className = 'color three';
  colorFour.className = 'color four';
};

function getSecondColor() {
  colorOne.className = 'color one';
  colorTwo.className = 'color two selected';
  colorThree.className = 'color three';
  colorFour.className = 'color four';
};

function getTirdColor() {
  colorOne.className = 'color one';
  colorTwo.className = 'color two';
  colorThree.className = 'color three selected';
  colorFour.className = 'color four';
};

function getFourthColor() {
  colorOne.className = 'color one';
  colorTwo.className = 'color two';
  colorThree.className = 'color three';
  colorFour.className = 'color four selected';
};

let pixel = document.querySelectorAll('.pixel');
for (let j = 0; j < pixel.length; j += 1) {
  pixel[j].addEventListener('click', paint);
};

function paint(event) {
  let colorSelected = document.querySelector('.selected');
  let cssStyle = window.getComputedStyle(colorSelected).getPropertyValue("background-color");
  event.target.style.backgroundColor = cssStyle;
}
