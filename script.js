function createLines() {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let numLine = 0; numLine < 5; numLine += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    pixelBoard.appendChild(line);
  }
}

function createPixels() {
  const tr = document.querySelectorAll('.tr');

  for (let line = 0; line < tr.length; line += 1) {
    for (let column = 0; column < 5; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      tr[line].appendChild(pixel);
    }
  }
}

window.onload = function inicio() {
  createLines();
  createPixels();


  let colorsOfPalette = document.querySelectorAll('.color');
  let pixels = document.querySelectorAll('.pixel');
  let colorSelected = 'black'

  for (let index = 0; index < colorsOfPalette.length; index += 1) {
    colorsOfPalette[index].addEventListener('click', function() {
      console.log('clicado');
      switch(index) {
        case 1:
          colorSelected = 'red';
          break;
        case 2:
          colorSelected = 'purple';
          break;
        case 3:
          colorSelected = 'orange';
          break;
        default:
          colorSelected = 'black';
      }
    
    })
  }

  for (let index = 0; index < pixels.length; index += 1) {

    pixels[index].addEventListener('click', function () {
      pixels[index].style.backgroundColor = colorSelected;
      console.log(`pixel ${index} foi clicado`);
    })
  }
};

