const colorPalette = document.querySelector('#color-palette');
const divsPalette = document.querySelector('#color-palette').children;
let pixelBoard = document.querySelector('#pixel-board');
let tr = document.querySelector('#pixel-board').children;
let colors = [];
let colorSelected = 'black';



function createColorPalette() {
  
  for (let index = 0; index < 4; index += 1) {
    let red = Math.random()*255;
    let green = Math.random()*255;
    let blue = Math.random()*255;
    let color;

    const div = document.createElement('div');
    div.className = 'color';
    div.id = index;
    colorPalette.appendChild(div);

    if (index === 0) {
      color = div.style.backgroundColor = 'black';
      colors.push(color);
      div.className = 'color selected';
    } else {
      color = div.style.backgroundColor = `rgb(${red},${green},${blue})`;
      colors.push(color);
    }
  }
  console.log(colors);
}

function createLines() {
  for (let numLine = 0; numLine < 5; numLine += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    pixelBoard.appendChild(line);
  }
}

function createPixels() {

  for (let line = 0; line < tr.length; line += 1) {
    for (let column = 0; column < 5; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      tr[line].appendChild(pixel);
    }
  }
}

function resetClassSelected() {
  for (let index in divsPalette) {
    divsPalette[index].className = 'color';
  }
}

window.onload = function inicio() {
  createColorPalette();
  createLines();
  createPixels();

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
      console.log(event.target.id);
      resetClassSelected();
      for(let index = 0; index < colors.length; index += 1) {
        if (parseInt(event.target.id, 10) === index) {
          event.target.className = 'color selected';
          colorSelected = colors[index];
        }
      }
    }
  });
  
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pixel')) {
      console.log('pixel clicado')
      event.target.style.backgroundColor = colorSelected;
    }
  })
};

