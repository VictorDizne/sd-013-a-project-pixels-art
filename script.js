function pixelBoard() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.className = 'row';
    document.querySelector('#pixel-board').appendChild(line);

    for (let index = 0; index < 5; index += 1) {
      const col = document.createElement('div');
      col.className = 'pixel';
      line.appendChild(col);
    }
  }
}
pixelBoard();

function initialBlackColor() {
  const blackColor = document.querySelector('.black');
  blackColor.classList.add('selected');
}

window.onload = initialBlackColor;
