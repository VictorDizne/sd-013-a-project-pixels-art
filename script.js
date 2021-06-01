window.onload = function() {
  let pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.style.display = 'table';

  document.body.appendChild(pixelBoard);

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

  fillPixelBoard(5);
}