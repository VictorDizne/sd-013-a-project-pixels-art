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
  const color = document.querySelectorAll('.color');
  const palette = document.querySelector('#color-palette');

  function colorSelect(addSelectedClass) {
    for (let index1 = 0; index1 < color.length; index1 += 1) {
      if (color[index1].classList.contains('selected')) {
        color[index1].classList.remove('selected');
      }
    }
    addSelectedClass.target.classList.add('selected');
  }

  palette.addEventListener('click', colorSelect);
}
select();

function colorPixel() {
  const clickedPixel = document.querySelectorAll('.pixel');

  function coloredPixel(appColor) {
    const selectedClass = document.querySelector('.selected');
    const selectedColor = window.getComputedStyle(selectedClass).backgroundColor;
    const appliedColor = appColor.target;
    appliedColor.style.backgroundColor = selectedColor;
  }

  for (let index2 = 0; index2 < clickedPixel.length; index2 += 1) {
    clickedPixel[index2].addEventListener('click', coloredPixel);
  }
}
colorPixel();
