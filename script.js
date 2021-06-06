const black = document.getElementById('black');
black.classList.add('selected');
const colors = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const buttom = document.getElementById('clear-board');

function colorselect(input) {
  const currentSelected = document.getElementsByClassName('selected');
  currentSelected[0].classList.remove('selected');
  input.target.classList.add('selected');
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', colorselect);
}

function pixelPaint(input) {
  const currentSelected = document.getElementsByClassName('selected');
  const styles = window.getComputedStyle(currentSelected[0]);
  const bgColor = styles.getPropertyValue('background-color');
  const pixel = input.target;
  pixel.style.backgroundColor = bgColor;
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', pixelPaint);
}

function clearboard() {
  for (let i = 0; i < pixels.length; i+= 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

buttom.addEventListener('click', clearboard);
