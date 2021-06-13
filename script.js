// 6- Definir a cor preta como cor inicial.
function colorBlack() {
    const initialColor = document.querySelector('#black');
    initialColor.classList.add('selected');
}
window.onload = colorBlack();

//desafio 7
function select() {
    const colorSelect = document.querySelectorAll('.color');
    const palette = document.querySelector('#color-palette');

    function selectColor(addSelectedClass) {
      for (let index1 = 0; index1 < colorSelect.length; index1 += 1) {
        if (colorSelect[index1].classList.contains('selected')) {
          colorSelect[index1].classList.remove('selected');
        }
      }
      addSelectedClass.target.classList.add('selected');
    }

    palette.addEventListener('click', selectColor);
}
select();

//desafio 8
function colorPixel() {
    const clickedPixel = document.querySelectorAll('.pixel');

    function coloredPixel(appColor) {
      const selectedClass = document.querySelector('.selected');
      const selectedColor = window.getComputedStyle(selectedClass).backgroundColor;
      const appliedColor = appColor.target;
      appliedColor.style.backgroundColor = selectedColor;
    }
  
    for (let index2 = 0; index2 < clickedPixel.length; index2 += 1) {
      clickedPixel[index2].addEventListener('click', coloredPixel);
    }
  }
colorPixel();

