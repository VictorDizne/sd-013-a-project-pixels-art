const black = document.getElementById('black');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

black.addEventListener('click', addClassSelected);
yellow.addEventListener('click', addClassSelected);
blue.addEventListener('click', addClassSelected);
green.addEventListener('click', addClassSelected);

function addClassSelected(event) {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}