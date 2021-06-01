window.onload = function () {
  const initBlack = document.getElementsByClassName('color')[0];
  initBlack.classList.add('selected');

  for (let i = 1; i < 4; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const colorUnit = document.getElementsByClassName('color');
    const strColor = `rgb(${r},${g},${b})`;
    colorUnit[i].style.backgroundColor = strColor;
  }

  const pixelBoardID = 'pixel-board';
  const pixelBoard = document.createElement('div');
  pixelBoard.id = pixelBoardID;
  pixelBoard.style.display = 'table';
  document.body.appendChild(pixelBoard);

  const n = 5;

  function fillPixelBoard(num) {
    for (let i = 0; i < num; i += 1) {
      const pixelRow = document.createElement('div');
      pixelRow.className = 'pixel-row';
      pixelRow.style.display = 'table-row';
      document.getElementById(pixelBoardID).appendChild(pixelRow);
      for (let j = 0; j < num; j += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.display = 'table-cell';
        pixel.style.backgroundColor = 'white';
        document.getElementsByClassName('pixel-row')[i].appendChild(pixel);
      }
    }
  }

  fillPixelBoard(n);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      for (let i = 0; i < 4; i += 1) {
        const colorArray = document.getElementsByClassName('color');
        if (event.target !== colorArray[i]) {
          colorArray[i].classList.remove('selected');
        } else {
          colorArray[i].classList.add('selected');
        }
      }
    }
  }, false);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pixel')) {
      const sel = document.getElementsByClassName('selected')[0];
      const selColor = window.getComputedStyle(sel, null).getPropertyValue('background-color');
      event.target.style.backgroundColor = selColor;
    }
  }, false);

  document.getElementById('clear-board').addEventListener('click', function () {
    const pixelCell = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelCell.length; i += 1) {
      pixelCell[i].style.backgroundColor = 'white';
    }
  });

  document.getElementById('generate-board').addEventListener('click', function () {
    let size = document.getElementById('board-size').value;
    if (size === '') {
      window.alert('Board inválido!');
    } else if (size > 50) {
      size = 50;
      document.getElementById(pixelBoardID).innerHTML = '';
      fillPixelBoard(size);
    } else if (size < 5) {
      size = 5;
      document.getElementById(pixelBoardID).innerHTML = '';
      fillPixelBoard(size);
    } else {
      document.getElementById(pixelBoardID).innerHTML = '';
      fillPixelBoard(size);
    }
  });
};
