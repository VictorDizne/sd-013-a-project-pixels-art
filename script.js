function blackColor() {
  const black = document.querySelector('#color-black');
  black.classList.add('selected');
}

window.onload = blackColor;

function selectColor() {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];

    color.addEventListener('click', ((event) => {
      for (let j = 0; j < colors.length; j += 1) {
        const colorDiv = colors[j];
        colorDiv.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }));
  }
}
selectColor();

function questionNine() {
  const div = document.createElement('div');
  const pixels = document.getElementsByClassName('pixel');
  const pixelsBoard = document.getElementById('pixel-board');
  const button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Limpar');
  button.setAttribute('id', 'clear-board');

  button.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      const pixel = pixels[i];
      pixel.style.backgroundColor = ('White');
    }
  });
  div.appendChild(button);
  document.body.insertBefore(div, pixelsBoard);
}
questionNine();
