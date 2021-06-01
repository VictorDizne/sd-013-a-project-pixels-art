const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');

window.onload = function() {
  colors[0].classList.add('selected');
}

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