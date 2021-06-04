const generateRandomColorPalette = () => {
  const colorPaletteBox = document.getElementsByClassName('color');

  colorPaletteBox[0].style.backgroundColor = 'rgb(0, 0, 0)';

  for (let index = 1; index < colorPaletteBox.length; index += 1) {
    const randomColor = [];
    for (let indexCor = 0; indexCor <= 2; indexCor += 1) {
      randomColor.push(Math.floor(Math.random() * 255));
    }
    colorPaletteBox[index].style.backgroundColor = `rgb(${randomColor})`;
  }
};

const generatePixelGrid = (tamanhoScreen) => {
  const paintingScreenArea = document.querySelector('#pixel-board');

  for (let alturaScreen = 1; alturaScreen <= tamanhoScreen; alturaScreen += 1) {
    const lineOfPaintingArea = document.createElement('div');
    lineOfPaintingArea.className = 'heightOfThePaintingCanvas';
    paintingScreenArea.appendChild(lineOfPaintingArea);
  }

  const linePixel = document.querySelectorAll('.heightOfThePaintingCanvas');
  for (let indexLine = 0; indexLine < linePixel.length; indexLine += 1) {
    let numPixel = 1;
    while (numPixel <= tamanhoScreen) {
      numPixel += 1;
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linePixel[indexLine].appendChild(pixel);
    }
  }
};

const cleanPaintingScreen = () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
};

const selectColor = (elementClick) => {
  const colorPalette = document.querySelector('.selected');
  colorPalette.classList.remove('selected');
  elementClick.className += ' selected';
};

const paintPixel = () => {
  const pixelList = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].addEventListener('click', () => {
      const colorSelected = document.querySelector('.selected').style.backgroundColor;
      pixelList[index].style.backgroundColor = colorSelected;
    });
  }
};

const removeScreen = () => {
  const pixelEdge = document.getElementById('pixel-board');

  while (pixelEdge.firstChild) {
    pixelEdge.removeChild(pixelEdge.firstChild);
  }
};

const changePaintSize = () => {
  const inputFromScreenSize = document.querySelector('#board-size').value;
  const erro = 'Board inválido!';
  if (inputFromScreenSize >= 5 && inputFromScreenSize <= 50) {
    removeScreen();
    generatePixelGrid(inputFromScreenSize);
  } else if (inputFromScreenSize < 5) {
    removeScreen();
    generatePixelGrid(5);
    alert(erro);
  } else if (inputFromScreenSize > 50) {
    removeScreen();
    generatePixelGrid(50);
    alert(erro);
  } else {
    alert(erro);
  }
  paintPixel();
};
