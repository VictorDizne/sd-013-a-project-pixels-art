// Requisito 6
function colorBlack() {
  const getBlack = document.querySelector('#first-color');
  getBlack.classList.add('selected'); // pega o elemento da const "getBlack" e adiciona a classe .selected.
}

window.onload = colorBlack;

// Requisito 7
function paletaCores() {
  const colors = document.getElementsByClassName('color');
  const colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', ((event) => {
    for (let index = 0; index < colors.length; index += 1) {
      const colorDiv = colors[index];
      colorDiv.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }));
}
paletaCores();

// Requisito 8
// Mudar a classe selecionada entre os elementos com a classe 'color'. Requisito 8.
function changeSelected() {
  const colors = document.getElementsByClassName('color');

  function changeColorSelect(event) {
  // eslint-disable-next-line no-restricted-syntax
    for (const index of colors) {
      if (index.classList.contains('selected')) {
        index.classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', changeColorSelect);
  }
}
changeSelected();

// Muda a cor de fundo do pixel clickado. Requisito 8.
function colorClick() {
  const pixels = document.getElementsByClassName('pixel');

  function changeColor(event) {
    const selectElement = document.querySelector('.selected');
    const colorSelect = window.getComputedStyle(selectElement).backgroundColor;
    event.target.style.backgroundColor = colorSelect;
  }

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', changeColor);
  }
}
colorClick();