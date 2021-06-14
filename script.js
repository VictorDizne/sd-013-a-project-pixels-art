function blackColorSelected() {
  let colorBlack = document.getElementById('black');
  colorBlack.classList.add('selected');
}

blackColorSelected();

let black = document.getElementById('black');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

black.addEventListener('click', addClassSelected);
yellow.addEventListener('click', addClassSelected);
green.addEventListener('click', addClassSelected);
blue.addEventListener('click', addClassSelected);

function addClassSelected(event) {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function createArt() {
  let pixels = document.getElementsByClassName('pixel');

  for (let pixel of pixels) {
    pixel.addEventListener('click', changeColor);
    function changeColor(event) {
      let selected = document.getElementsByClassName('selected');
      event.target.style.backgroundColor = selected[0].id;
    }
  }
}
createArt();

function clearBoard() {
  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clear);
  function clear() {
    let pixels = document.getElementsByClassName('pixel');
    for (let pixel of pixels) {
      if (pixel.style.backgroundColor != 'white'){
        pixel.style.backgroundColor = 'white';
      }
    }
  }
}
clearBoard();