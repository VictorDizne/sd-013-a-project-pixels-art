// Feito com ajuda de vitor dos santos, luiz furtado e gabriel gaspar
// Requisito 7
let colors = document.querySelectorAll('.color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', recebeClick);
}

  function recebeClick(e) {
    for (i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
  }

  // Requisito 8
  let pixel = document.querySelectorAll('.pixel');

  for (index = 0; index < pixel.length; index += 1) {
      pixel[index].addEventListener('click', clicar);
  }
  function clicar(event) {
    let colorToPaint = document.getElementsByClassName('selected');
    let colorTarget = getComputedStyle(colorToPaint[0]).getPropertyValue("background-color");
    event.target.style.backgroundColor = colorTarget;
  }
  