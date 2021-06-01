window.onload = function () {
  let paletteBlack = document.querySelector('div .black');
  paletteBlack.classList.add('selected');

  let palleteColor = document.querySelectorAll('.color');
  for (let index = 0; index < palleteColor.length; index += 1) {
    palleteColor[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < palleteColor.length; index2 += 1) {
        palleteColor[index2].classList.remove('selected');
      }
      event.target.classList.add('selected');
    })
  }
}