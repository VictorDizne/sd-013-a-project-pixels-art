function selectedBlack () {
  let initialSelected = document.querySelector('#color-black');
  initialSelected.classList.add('selected');
}

function initialPixelColor (color) {
  let initialPixel = document.getElementsByClassName('pixel');
  for(i = 0; i < initialPixel.length; i += 1){
    initialPixel[i].style.background = color;
  }
}

function selectedColor () {
  let arrayColorPalette = document.querySelector('#color-palette');
  let arrayColors = document.getElementsByClassName('color');
  arrayColorPalette.addEventListener('click', function(e) {
    if(e.target.classList.contains('color')) {
      for(let i = 0; i < arrayColors.length; i += 1) {
        arrayColors[i].classList.remove('selected');
      }
      e.target.classList.add('selected');
    }
  });
}

selectedColor();

window.onload = function () {
  selectedBlack();
  initialPixelColor('white');
  selectedColor();
}