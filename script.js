function questionOne() {
  const h1 = document.createElement('h1');
  h1.innerText = 'Paleta de Cores';
  h1.setAttribute('id', 'title');
  h1.style.textAlign = 'center';
  document.body.appendChild(h1);
}
questionOne();

function questionTwoThreeSix() {
  const divPallet = document.createElement('div');
  divPallet.setAttribute('id', 'color-palette');
  const arrayCores = ['black', 'yellow', 'blue', 'red'];

  for (let i = 0; i < arrayCores.length; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = arrayCores[i];
    if (div.style.backgroundColor === 'black') {
      div.classList.add('selected');
    }
    div.style.border = '1px solid black';
    div.style.display = 'inline-block';
    div.classList.add('color');
    divPallet.appendChild(div);
    document.body.appendChild(divPallet);
  }
}
questionTwoThreeSix();

function questionFour() {
  const divBoard = document.createElement('div');
  divBoard.setAttribute('id', 'pixel-board');

  for (let i = 1; i <= 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = 'white';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    divBoard.appendChild(pixel);
  }
  document.body.appendChild(divBoard);
}
questionFour();

function questionSeven() {
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
questionSeven();

function questionEight() {
  const pixels = document.getElementsByClassName('pixel');
  const selected = document.getElementsByClassName('selected');
  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.addEventListener('click', (() => {
      for (let j = 0; j < selected.length; j += 1) {
        const select = selected[j];
        pixel.style.backgroundColor = select.style.backgroundColor;
      }
    }));
  }
}
questionEight();

function questionNine() {
  const div = document.createElement('div');
  const pixels = document.getElementsByClassName('pixel');
  const pixelsBoard = document.getElementById('pixel-board');
  const button = document.getElementById('clear-board');

  button.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      const pixel = pixels[i];
      pixel.style.backgroundColor = 'White';
    }
  });
  div.appendChild(button);
  document.body.insertBefore(div, pixelsBoard);
}
questionNine();
