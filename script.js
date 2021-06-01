let palletSelectedColor = 'black';

function selectColor() {
  const pallet = document.getElementsByClassName('color');
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[i].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      const clickedColor = event.target;
      clickedColor.classList.add('selected');
      if (pallet[i] === pallet[0]) {
        palletSelectedColor = 'black';
      } else if (pallet[i] === pallet[1]) {
        palletSelectedColor = 'rgb(235, 7, 7)';
      } else if (pallet[i] === pallet[2]) {
        palletSelectedColor = 'rgb(160, 34, 34)';
      } else if (pallet[i] === pallet[3]) {
        palletSelectedColor = 'rgb(136, 207, 252)';
      }
    });
  }
}
selectColor();
function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = palletSelectedColor;
    });
  }
}
paintPixel();
function resetColors() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function(){
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  })
}
resetColors();
function generateButtonBoard() {
  let button = document.getElementById('generate-board');
  var table = document.getElementById('pixel-board');
  button.addEventListener('click', function(){
    table.removeChild(table.lastElementChild);
    let inputValue = document.getElementById('board-size').value;

    if (inputValue === '') {
      alert('Board inválido!');
    } else if (inputValue <= 5) {
      let board = document.createElement('tbody');
      table.appendChild(board);
      for (let i = 0; i < 5; i += 1) {
        let linha = document.createElement('tr');
        for (let index = 0; index < 5; index += 1) {
          let pix = document.createElement('th');
          pix.classList.add('pixel');
          linha.appendChild(pix);
        }
        board.appendChild(linha);
        paintPixel();
      } 
    } else if (inputValue < 50) {
      let board = document.createElement('tbody');
      table.appendChild(board);
      for (let i = 0; i < inputValue; i += 1) {
        let linha = document.createElement('tr');
        for (let index = 0; index < inputValue; index += 1) {
          let pix = document.createElement('th');
          pix.classList.add('pixel');
          linha.appendChild(pix);
        }
        board.appendChild(linha);
        paintPixel();
      } 
    } else {
      let board = document.createElement('tbody');
      table.appendChild(board);
      for (let i = 1; i <= 50; i += 1) {
        let linha = document.createElement('tr');
        for (let index = 0; index <= 50; index += 1) {
          let pix = document.createElement('th');
          pix.classList.add('pixel');
          linha.appendChild(pix);
        }
        board.appendChild(linha);
        paintPixel();
      } 
    }
    document.getElementById('board-size').value = '';
  })
}
generateButtonBoard();