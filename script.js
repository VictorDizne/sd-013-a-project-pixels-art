function createPixelsBoard() {
  for (let index = 0; index < 5; index += 1) {
    let pixelBoard = document.querySelector('#pixel-board');
    let line = document.createElement('div');
    pixelBoard.appendChild(line);

    for (let index = 0; index < 5; index += 1) {
      let div = document.createElement('div');
      div.className = 'pixel';
      line.appendChild(div);
    };
  };
};

createPixelsBoard();
