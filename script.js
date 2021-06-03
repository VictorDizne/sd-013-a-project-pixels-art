window.onload = function () {
  function boardCreator() {
    let pixelTotal = 25;
    for (let i = 1; i <= pixelTotal; i+=1) {
      let pixelBoard = document.getElementById('pixel-board');
      let divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      pixelBoard.appendChild(divPixel); 
    }
  }
    boardCreator();
}
