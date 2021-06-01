let pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
  pixel.style.backgroundColor = 'rgb(255, 255, 255)';
}

window.onload = function () {
  let black = document.querySelector('.one');
  black.className = 'color one selected';
}
