const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
  pixel.style.backgroundColor = 'rgb(255, 255, 255)';
}

let colorOne = document.querySelector('.one');
let colorTwo = document.querySelector('.two');
let colorThree = document.querySelector('.three');
let colorFour = document.querySelector('.four');

window.onload = function blackFirst () {
  colorOne.className = 'color one selected';
};

colorOne.addEventListener('click', function () {
  colorOne.className = 'color one selected';
  colorTwo.className = 'color two';
  colorThree.className = 'color three';
  colorFour.className = 'color four';
});

colorTwo.addEventListener('click', function () {
  colorOne.className = 'color one';
  colorTwo.className = 'color two selected';
  colorThree.className = 'color three';
  colorFour.className = 'color four';
});

colorThree.addEventListener('click', function () {
  colorOne.className = 'color one';
  colorTwo.className = 'color two';
  colorThree.className = 'color three selected';
  colorFour.className = 'color four';
});

colorFour.addEventListener('click', function () {
  colorOne.className = 'color one';
  colorTwo.className = 'color two';
  colorThree.className = 'color three';
  colorFour.className = 'color four selected';
});