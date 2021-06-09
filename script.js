function pixelBoard() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.className = 'row';
    document.querySelector('#pixel-board').appendChild(line);

    for (let index0 = 0; index0 < 5; index0 += 1) {
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

function select() {
  const color = document.getElementsByClassName('color');
  const palette = document.getElementById('color-palette');

  function colorSelect(event) {
    for (let index1 = 0; index1 < color.length; index1 += 1) {
      if (color[index1].classList.contains('selected')) {
        color[index1].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }

  palette.addEventListener('click', colorSelect);
}
select();