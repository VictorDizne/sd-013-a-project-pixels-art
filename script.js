window.onload = function () {

  let pixelBoard = document.querySelector('#pixel-board');
  
  for (let numLine = 0; numLine < 5; numLine += 1) {
    let line = document.createElement('div');
    line.className = 'tr';
    pixelBoard.appendChild(line);
  }

  let tr = document.querySelectorAll('.tr');

  for (let line = 0; line < tr.length; line += 1) {
    for (column = 0; column < 5; column += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      tr[line].appendChild(pixel);
    }
  }

}