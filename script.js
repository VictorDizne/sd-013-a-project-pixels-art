const pixelsArtFrame = document.querySelector('#pixel-board');

function pixelsFrame() {
  const createFrame = document.createElement('div');
  createFrame.className = 'pixel sizeSquare';
  pixelsArtFrame.appendChild(createFrame);
}

function pixelsNull() {
  const createFrame = document.createElement('div');
  pixelsArtFrame.appendChild(createFrame);
}

function count(number) {
  for (let i = 0; i < number; i += 1) {
    pixelsFrame();
  }
}

function numberLines(number) {
  for (let i = 1; i <= number; i += 1) {
    count(number);
    pixelsNull();
  }
}
numberLines(5);

function selectColor() {
  const initialColor = document.querySelector('.color');
  initialColor.classList.add('selected');
}
selectColor();

const color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', (event) => {
    const selected = document.getElementsByClassName('selected')[0];
    console.log(selected);
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

const pixel = document.getElementsByClassName('pixel');
function fillPixel(x) {
  const selected = document.getElementsByClassName('selected')[0];
  const colorPixel = window.getComputedStyle(selected).getPropertyValue('background-color');
  const fillPixels = colorPixel;
  x.target.style.backgroundColor = fillPixels;
}
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', fillPixel);
}

const buttonClean = document.getElementById('clear-board');
const cleanPixel = document.getElementsByTagName('div');
function clean() {
  for (let i = 0; i < cleanPixel.length; i += 1) {
    if (cleanPixel[i].classList.contains('pixel')) {
      cleanPixel[i].style.backgroundColor = 'white';
    }
  }
}
buttonClean.addEventListener('click', clean);

function sizeFrame(input) {
  pixelsArtFrame.innerHTML = null;
  numberLines(input);
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', fillPixel);
  }
}
const chooseSize = document.getElementById('generate-board');
chooseSize.addEventListener('click', () => {
  let input = document.getElementById('board-size').value;
  console.log(input);
  if (input <= 5) {
    input = 5;
    alert('Board inválido!');
    sizeFrame(input);
  } else if (input >= 50) {
    input = 50;
    alert('Board inválido!');
    sizeFrame(input);
  } else {
    sizeFrame(input);
  }
});