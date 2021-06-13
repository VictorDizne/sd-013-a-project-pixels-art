let colorId = document.querySelector('.selected').id;

function selectColor() {
  const color = document.querySelectorAll('.color');

  for (let i = 0; i < color.length; i += 1) {
    const colorIndex = color[i];
    if (colorIndex === color[i]) {
      colorIndex.addEventListener('click', () => {
        color.forEach((element) => {
          element.classList.remove('selected');
        });
        colorIndex.classList.add('selected');
        colorId = color[i];
        colorId = document.querySelector('.selected').id;
      });
    }
  }
}

selectColor();

function selectPixel() {
  const color = document.querySelectorAll('.pixel');

  for (let i = 0; i < color.length; i += 1) {
    const colorIndex = color[i];
    if (colorIndex === color[i]) {
      colorIndex.addEventListener('click', () => {
        color.forEach((element) => {
          element.classList.remove('selected-pixel');
        });
        colorIndex.classList.add('selected-pixel');
      });
    }
  }
}

selectPixel();

function paintPixel() {
  const allCells = document.querySelectorAll('.pixel');

  if (colorId === colorId) {
    for (let i = 0; i < allCells.length; i += 1) {
      const colorIndex = allCells[i];
      if (colorIndex === allCells[i]) {
        colorIndex.addEventListener('click', () => {
          allCells.forEach(() => {
            const pixelId = document.querySelector('.selected-pixel').id;
            document.getElementById(pixelId).style.backgroundColor = colorId;
          });
        });
      }
    }
  }
}

paintPixel();
