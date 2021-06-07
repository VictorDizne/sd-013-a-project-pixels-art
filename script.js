const pixelBoard = document.getElementById('pixel-board');

function createLine() {
  let div = document.createElement('div');
  div.className = 'pixel';
  pixelBoard.appendChild(div);
};

for (let line = 1; line <= 5; line += 1) {
  for (let column = 1; column <= 5; column += 1) {
    createLine();
  };
  let nextLine = document.createElement('br');
  pixelBoard.appendChild(nextLine)
};

const collorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');

// Referencia: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
collorPalette.addEventListener("click", function (event) {
  for (let div of colors) {
    div.classList.remove('selected');
  }
  event.target.classList.add('selected');
});

