window.onload = function () {


  function boardMaker() {
    let pixelBoard = document.getElementById('pixel-board');

    for (let i = 0; i < 5; i += 1) {
      let line = document.createElement('div');
      line.classList.add('line');
      pixelMaker(line);
      pixelBoard.appendChild(line);
    }
  }
  boardMaker();

  function pixelMaker(line) {

    for (let i = 0; i < 5; i += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }





}