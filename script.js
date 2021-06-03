const pixelBoardId = 'pixel-board';

function fillPixelBoard(num) {
  for (let i = 0; i < num; i += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelRow.style.display = 'table-row';
    document.getElementById(pixelBoardId).appendChild(pixelRow);
    for (let j = 0; j < num; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.display = 'table-cell';
      pixel.style.backgroundColor = 'white';
      document.getElementsByClassName('pixel-row')[i].appendChild(pixel);
    }
  }
}

function randomColor() {
  for (let i = 1; i < 4; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const colorUnit = document.getElementsByClassName('color');
    const strColor = `rgb(${r},${g},${b})`;
    colorUnit[i].style.backgroundColor = strColor;
  }
}

function selectColor(event) {
  if (event.target.classList.contains('color')) {
    const colorArray = document.getElementsByClassName('color');
    const arr = [].slice.call(colorArray);
    arr.map((x) => {
      if (event.target !== x) {
        return x.classList.remove('selected');
      }
      return x.classList.add('selected');
    });
  }
}

function paintPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const sel = document.getElementsByClassName('selected')[0];
    const selColor = window.getComputedStyle(sel, null).getPropertyValue('background-color');
    const element = event.target;
    element.style.backgroundColor = selColor;
  }
}

function clearBoard() {
  const pixelCell = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelCell.length; i += 1) {
    pixelCell[i].style.backgroundColor = 'white';
  }
}

function resizeBoard() {
  let size = document.getElementById('board-size').value;
  if (size === '') {
    window.alert('Board inválido!');
  } else if (size > 50) {
    size = 50;
    document.getElementById(pixelBoardId).innerHTML = '';
    fillPixelBoard(size);
  } else if (size < 5) {
    size = 5;
    document.getElementById(pixelBoardId).innerHTML = '';
    fillPixelBoard(size);
  } else {
    document.getElementById(pixelBoardId).innerHTML = '';
    fillPixelBoard(size);
  }
}

window.onload = function start() {
  const initBlack = document.getElementsByClassName('color')[0];
  initBlack.classList.add('selected');

  randomColor();

  const pixelBoard = document.createElement('div');
  pixelBoard.id = pixelBoardId;
  pixelBoard.style.display = 'table';
  document.body.appendChild(pixelBoard);

  const n = 5;

  fillPixelBoard(n);

  document.addEventListener('click', selectColor, false);
  document.addEventListener('click', paintPixel, false);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
  document.getElementById('generate-board').addEventListener('click', resizeBoard);
};
