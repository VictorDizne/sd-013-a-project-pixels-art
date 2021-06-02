// https://css-tricks.com/snippets/javascript/random-hex-color/
// let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor4 = Math.floor(Math.random()*16777215).toString(16);

const black = document.querySelectorAll('.color')[0];
const red = document.querySelectorAll('.color')[1];
const blue = document.querySelectorAll('.color')[2];
const green = document.querySelectorAll('.color')[3];

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
blue.style.backgroundColor = 'blue';
green.style.backgroundColor = 'green';

const pixels = document.querySelector('#color-palette');

let board = document.createElement('div');
board.setAttribute('id','pixel-board');
document.querySelector('#table').appendChild(board);

let n = 5;

for (let i = 0; i < n; i +=1 ){
  let tr = document.createElement('tr');
  tr.classList.add('tr');
  board.appendChild(tr);
  for (let j = 0; j < n; j += 1) {
    let pixel = document.createElement('td');
    pixel.classList.add('pixel');
    tr.appendChild(pixel);
  }
}

// let black = document.querySelector('.first');
// let second = document.querySelector('.second');
// let third = document.querySelector('.third');
// let fourth = document.querySelector('.fourth')

black.classList.add('selected')
// feito com ajuda do Matheus Duarte
function selectColor(element) {
  if (element.target.className === 'color') {
    const selected = document.querySelector('.selected');
    element.target.classList.add('selected');
    selected.classList.remove('selected');
    console.log(element);
  }
}

pixels.addEventListener('click', selectColor);

// function fillColor() {
  
// }

// document.querySelector('.second').style.backgroundColor = '#' + randomColor2;
// document.querySelector('.third').style.backgroundColor = '#' + randomColor3;
// document.querySelector('.fourth').style.backgroundColor = '#' + randomColor4;
