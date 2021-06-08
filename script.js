const firstColor = document.querySelector(".selected");
let otherColors = document.querySelectorAll(".color");

function colorsTable() {
  firstColor.style.backgroundColor = "black";
  for (let index = 1; index < 4; index += 1) {
    otherColors[index].style.backgroundColor = rgbRadom();
  }
}
colorsTable();

function rgbRadom(radomColor) {
  let color1 = Math.ceil(Math.random() * 250);
  let color2 = Math.ceil(Math.random() * 250);
  let color3 = Math.ceil(Math.random() * 250);

  let randomColor = `rgb(${color1}, ${color2}, ${color3})`;
  return randomColor;
}

// function tableColumn() {
//   let numeroUsuario = 
//   let tabela = document.getElementById("#pixel-board");
//   let colunas = "";
//   for (let index = 0; index <= numeroUsuario )
// }

let colors = document.getElementsByClassName('color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', () => {
    removeSelected();
    colors[i].classList.add('selected');
  });
}
function removeSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) {
      colors[i].classList.remove('selected');
    }
  }
}


let allColors = document.getElementsByClassName('color');
let pixels = document.getElementsByClassName('pixel');

function extractBackground() {
  for (let i = 0; i < allColors.length; i += 1) {
    if (allColors[i].classList.contains('selected')) {
      return allColors[i].style.backgroundColor;
    }
  }
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    pixels[i].style.backgroundColor = extractBackground();
  })
}

let clearButton = document.getElementById('clear-board');
function clearPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
  clearButton.addEventListener('click', () => {
    pixels[i].style.backgroundColor = 'white';
    })
  }
}
clearPixels();