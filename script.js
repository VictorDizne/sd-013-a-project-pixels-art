function colorsPalletes() {
  const classColor = document.querySelectorAll('.color');
  const pallets = ['#000000', '#F10202', '#2200FD', '#257400'];
  for (let index = 0; index < classColor.length; index += 1) {
    classColor[index].style.backgroundColor = pallets[index];
  }
}
colorsPalletes();

function createBoard() {
  const idBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const createPixelBoard = document.createElement('div');
    createPixelBoard.className = 'pixel';
    idBoard.appendChild(createPixelBoard);
  }
}
createBoard();
