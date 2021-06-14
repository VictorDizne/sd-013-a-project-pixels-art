function blackColorSelected() {
  let colorBlack = document.getElementById('blackColor');
  colorBlack.classList.add('selected');
}
blackColorSelected();

let black = document.getElementById('blackColor');
let yellow = document.getElementById('yellowColor');
let blue = document.getElementById('blueColor');
let green = document.getElementById('greenColor');

black.addEventListener('click', addClassSelected);
yellow.addEventListener('click', addClassSelected);
blue.addEventListener('click', addClassSelected);
green.addEventListener('click', addClassSelected);

function addClassSelected(event) {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function createPixel() {
  let pixel = document.getElementsByClassName('pixel');

  for (let i of pixel) {
    i.addEventListener('click', changeColor);

    function changeColor(event) {
      let selected = document.getElementsByClassName('selected');
      event.target.style.backgroundColor = selected[0].id;
    }
  }
}
createPixel();

function clearBoard() {
  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clear);

  function clear() {
    let pixel = document.getElementsByClassName('pixel');
    for (let index of pixel) {
      if (index.style.backgroundColor != 'white'){
        index.style.backgroundColor = 'white';
      }
    }
  }
}
clearBoard();