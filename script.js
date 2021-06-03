function generateRandomColors() {
  let num1 = 155 + Math.random() * 100;
  num1 = Math.round(num1);
  let num2 = Math.random() * 255;
  num2 = Math.round(num2);
  let num3 = Math.random() * 255;
  num3 = Math.round(num3);
  const colorC2 = `rgb(${num1}, ${num2}, ${num3})`;
  const colorC3 = `rgb(${num2}, ${num1}, ${num3})`;
  const colorC4 = `rgb(${num3}, ${num2}, ${num1})`;
  document.querySelector('.c2').style.backgroundColor = colorC2;
  document.querySelector('.c3').style.backgroundColor = colorC3;
  document.querySelector('.c4').style.backgroundColor = colorC4;
}
generateRandomColors();

let palletSelectedColor = 'black';

function selectColor() {
  const pallet = document.getElementsByClassName('color');
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[i].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      const clickedColor = event.target;
      clickedColor.classList.add('selected');
      palletSelectedColor = window.getComputedStyle(clickedColor).backgroundColor;
    });
  }
}
selectColor();
function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = palletSelectedColor;
    });
  }
}
paintPixel();
function resetColors() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
resetColors();
function generateButtonBoard() {
  const button = document.getElementById('generate-board');
  const table = document.getElementById('pixel-board');
  button.addEventListener('click', () => {
    table.removeChild(table.lastElementChild);
    const inputValue = document.getElementById('board-size').value;

    if (inputValue === '') {
      alert('Board inválido!');
    } else if (inputValue <= 5) {
      const board = document.createElement('tbody');
      table.appendChild(board);
      for (let i = 0; i < 5; i += 1) {
        const linha = document.createElement('tr');
        for (let index = 0; index < 5; index += 1) {
          const pix = document.createElement('th');
          pix.classList.add('pixel');
          linha.appendChild(pix);
        }
        board.appendChild(linha);
        paintPixel();
      }
    } else if (inputValue < 50) {
      const board = document.createElement('tbody');
      table.appendChild(board);
      for (let i = 0; i < inputValue; i += 1) {
        const linha = document.createElement('tr');
        for (let index = 0; index < inputValue; index += 1) {
          const pix = document.createElement('th');
          pix.classList.add('pixel');
          linha.appendChild(pix);
        }
        board.appendChild(linha);
        paintPixel();
      }
    } else {
      const board = document.createElement('tbody');
      table.appendChild(board);
      for (let i = 0; i < 50; i += 1) {
        const linha = document.createElement('tr');
        for (let index = 0; index < 50; index += 1) {
          const pix = document.createElement('th');
          pix.classList.add('pixel');
          linha.appendChild(pix);
        }
        board.appendChild(linha);
        paintPixel();
      }
    }
    document.getElementById('board-size').value = '';
  });
}
generateButtonBoard();
