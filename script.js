const colorBlack = document.getElementsByClassName('color')[0];
const colorOne = document.getElementsByClassName('color')[1];
const colorTwo = document.getElementsByClassName('color')[2];
const colorThree = document.getElementsByClassName('color')[3];
const initialSize = 5;

// A função foi baseada no site: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function colorGeneret() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgba(${r}, ${g}, ${b})`;
}

colorBlack.style.backgroundColor = 'black';
colorOne.style.backgroundColor = colorGeneret();
colorTwo.style.backgroundColor = colorGeneret();
colorThree.style.backgroundColor = colorGeneret();

colorBlack.classList.add('selected');

function generateBoard(size) {
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    document.getElementById('pixel-board').appendChild(line);
    for (let j = 0; j < size; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
  console.log('PAgina carregada');
}
generateBoard(initialSize);

function cleanBoard() {
  const line = document.querySelectorAll('.line');
  for (let i = 0; i < line.length; i += 1) {
    document.querySelector('.line').remove();
  }
}

function selectedColor(color) {
  const currentSelected = document.querySelector('.selected');
  currentSelected.classList.remove('selected');
  color.target.classList.add('selected');
}

colorBlack.addEventListener('click', selectedColor);
colorOne.addEventListener('click', selectedColor);
colorTwo.addEventListener('click', selectedColor);
colorThree.addEventListener('click', selectedColor);

function paint(targetPixel) {
  const pixel = targetPixel.target;
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  pixel.style.backgroundColor = colorSelected;
}

const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  const pixel = pixels[i];
  pixel.addEventListener('click', paint);
}

const bt1 = document.createElement('button');
bt1.id = 'clear-board';
bt1.innerHTML = 'Limpar';
document.querySelector('.menu').appendChild(bt1);

function limpar() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

bt1.addEventListener('click', limpar);

const input = document.createElement('input');
input.id = 'board-size';
input.setAttribute('type', 'number');
input.setAttribute('min', 0);
document.querySelector('.menu').appendChild(input);

const bt2 = document.createElement('button');
bt2.id = 'generate-board';
bt2.innerHTML = 'VQV';
document.querySelector('.menu').appendChild(bt2);

function changeSize() {
  if (input.value > 50) {
    input.value = 50;
  } else if (input.value < 5) {
    input.value = 5;
  }

  if (input.value === '') {
    alert('Board inválido!');
  } else {
    cleanBoard();
    generateBoard(input.value);
  }
}

bt2.addEventListener('click', changeSize);
