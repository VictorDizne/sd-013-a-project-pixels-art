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

