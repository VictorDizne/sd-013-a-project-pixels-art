const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const colorArray = ['black', 'red', 'green', 'blue'];
const h1 = document.querySelector('h1');

for (let color in colorArray){
  const div = document.createElement('div');
  div.classList.add('color');
  div.style.backgroundColor = colorArray[color];
  if (div.style.backgroundColor == 'black') {
    div.classList.add('selected')
  }
  colorPalette[color];
  colorPalette.appendChild(div);  
}


function createLine() {
  let div = document.createElement('div');
  div.className = 'pixel';
  pixelBoard.appendChild(div);
};

for (let line = 1; line <= 5; line += 1) {
  for (let column = 1; column <= 5; column += 1) {
    createLine();
  };
  let nextLine = document.createElement('br');
  pixelBoard.appendChild(nextLine)
};

const collorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');

// Referencia: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

collorPalette.addEventListener("click", function(event) {
  // for (let div in colors) {
  //   colors[div].classList.remove('selected');
  // }
  for (let div of colors) {
    div.classList.remove('selected');
  }
  event.target.classList.add('selected');
});

// let pixel = document.getElementsByClassName('pixel');
// let color = document.getElementsByClassName('selected');

function questionEight() {
  const pixels = document.getElementsByClassName('pixel');
  const selected = document.getElementsByClassName('selected');
    for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.addEventListener('click', (() => {
    for (let j = 0; j < selected.length; j += 1) {
    const select = selected[j];
    pixel.style.backgroundColor = select.style.backgroundColor;
    }
  }));
  }
}
  questionEight(); 


//   // for (let pixelClick of pixel) {
// for (let i = 0; i < pixel.length; i += 1) {
//   let pixelClick = pixel[i];
//   pixelClick.addEventListener('click', () => {

//   //for (let colorSelected of color) {
//     for (let j = 0; j < color.length; j += 1) {
//     let colorSelected = color[j];
//     pixelClick.style.backgroundColor = colorSelected.style.backgroundColor;
//   }
// })
// }

// .addEventListener("click", function(event) {
//   //for (let i of color) {
    
//   }

