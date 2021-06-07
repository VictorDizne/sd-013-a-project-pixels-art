// Requisito 6
function colorBlack() {
  const getBlack = document.querySelector('#first-color');
  getBlack.classList.add('selected'); // pega o elemento da const "getBlack" e adiciona a classe .selected.
}

window.onload = colorBlack;

// Requisito 7
function paletaCores() {
  let colors = document.getElementsByClassName('color');
  let colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', ((event) => {
    for (let index = 0; index < colors.length; index += 1) {
      let colorDiv = colors[index];
      colorDiv.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }));
}
paletaCores();
