const colorBlack = document.getElementsByClassName('color')[0];
const colorOne = document.getElementsByClassName('color')[1];
const colorTwo = document.getElementsByClassName('color')[2];
const colorThree = document.getElementsByClassName('color')[3];

colorBlack.style.backgroundColor = 'black';
colorOne.style.backgroundColor = 'green';
colorTwo.style.backgroundColor = 'darkblue';
colorThree.style.backgroundColor = 'yellow';

colorBlack.classList.add('selected');

function selectedColor(color) {
  const currentSelected = document.querySelector('.selected');
  currentSelected.classList.remove('selected');
  color.target.classList.add('selected');
}

colorBlack.addEventListener('click',selectedColor);
colorOne.addEventListener('click',selectedColor);
colorTwo.addEventListener('click',selectedColor);
colorThree.addEventListener('click',selectedColor);

function paint(pixel) {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = colorSelected;
}

const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  const pixel = pixels[i];
  pixel.addEventListener('click', paint);
}

const button = document.createElement('button');
button.id = 'clear-board';
button.innerHTML = 'Limpar';
document.querySelector('.menu').appendChild(button);

function limpar() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', limpar);