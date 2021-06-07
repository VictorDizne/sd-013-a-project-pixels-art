const getfirstColorDiv = document.getElementById('color1');
getfirstColorDiv.style.backgroundColor = 'black';

getfirstColorDiv.classList.add('selected');

const getDivColorPalette = document.querySelector('#color-palette');
const getDivsColorized = document.querySelectorAll('.color');

getDivColorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < getDivsColorized.length; index += 1) {
    getDivsColorized[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});
