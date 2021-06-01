window.onload = function () {
  // Define a cor preta como a selecionada primeiramente
  const paletteBlack = document.querySelector('div .black');
  paletteBlack.classList.add('selected');

  // Adiciona função de selecionar a cor da paleta
  const palleteColor = document.querySelectorAll('.color');
  for (let index = 0; index < palleteColor.length; index += 1) {
    palleteColor[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < palleteColor.length; index2 += 1) {
        palleteColor[index2].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
};

// Adiciona função de pintar o pixel
const pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    let backgroundColor = window.getComputedStyle(selected).getPropertyValue('background-color');
    event.target.style.backgroundColor = backgroundColor;
  })
}

// Adiciona botão de limpar
const button = document.querySelector('#clear-board');
button.addEventListener('click', function() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
})
