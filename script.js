window.onload = function() {
  let initBlack = document.getElementsByClassName('color')[0];
  initBlack.classList.add('selected')

  let pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.style.display = 'table';
  document.body.appendChild(pixelBoard);

  let n = 5;

  function fillPixelBoard(n){
    for (let i = 0; i < n; i += 1){
      let pixelRow = document.createElement('div');
      pixelRow.className = 'pixel-row'
      pixelRow.style.display = 'table-row'
      document.getElementById('pixel-board').appendChild(pixelRow);
      for (let j = 0; j < n; j += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.display = 'table-cell'
        pixel.style.backgroundColor = 'white'
        document.getElementsByClassName('pixel-row')[i].appendChild(pixel);
      }
    }
  }

  fillPixelBoard(n);

  document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'color' ) ) {
      for (let i = 0; i < 4; i += 1) {
        let colorArray = document.getElementsByClassName('color');
        if (event.target !== colorArray[i]) {
          colorArray[i].classList.remove('selected')
        } else {
          colorArray[i].classList.add('selected')
        }
      }
    }
  }, false);

  document.addEventListener('click', function (event) {
    if ( event.target.classList.contains('pixel') ) {
      let selected = document.getElementsByClassName('selected')[0];
      let selectedColor = window.getComputedStyle(selected, null).getPropertyValue('background-color')
      event.target.style.backgroundColor = selectedColor;
    }
  }, false);

  document.getElementById('clear-board').addEventListener('click', function () {
    let pixelCell = document.getElementsByClassName('pixel')
    for (let i = 0; i < pixelCell.length; i += 1) {
      pixelCell[i].style.backgroundColor = 'white';
    }
  });
}