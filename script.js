// Códigos referente a paleta de cores:
const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');

window.onload = function() {
  colors[0].classList.add('selected');
}

/* Solução dinâmica para adicionar a classe selected (falta conseguir remover das outras cores):
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    event.target.classList.add('selected');
  })
}
*/

colors[0].addEventListener('click', function (event) {
  event.target.classList.add('selected');

  colors[1].classList.remove('selected')
  colors[2].classList.remove('selected')
  colors[3].classList.remove('selected')
})


colors[1].addEventListener('click', function (event) {
  event.target.classList.add('selected');

  colors[0].classList.remove('selected')
  colors[2].classList.remove('selected')
  colors[3].classList.remove('selected')
})

colors[2].addEventListener('click', function (event) {
  event.target.classList.add('selected');

  colors[0].classList.remove('selected')
  colors[1].classList.remove('selected')
  colors[3].classList.remove('selected')
})

colors[3].addEventListener('click', function (event) {
  event.target.classList.add('selected');

  colors[0].classList.remove('selected')
  colors[1].classList.remove('selected')
  colors[2].classList.remove('selected')
})

//Códigos referentes ao quadro de pixels:

function createPixels(number) {
  for (let indexRow = 0; indexRow < number; indexRow += 1) {
    for (let indexLine = 0; indexLine < number; indexLine += 1) {
      const newDiv = document.createElement('div');
      pixelBoard.appendChild(newDiv);
      newDiv.classList = "pixel";
    }
  }
}

createPixels(5);

const pixels = document.querySelectorAll('.pixel')
const colorSelected = document.querySelector('.selected');
const color1 = document.querySelectorAll('.color')[0];

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    event.target.style.backgroundColor = "black";
  })
}