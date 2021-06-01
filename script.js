window.onload = function () {
  const recoverColorBlack = document.querySelector('#color1');

  recoverColorBlack.className = 'color selected';
};

//-----------------------------------------------------------------------------

const colorPalette = document.querySelectorAll('.color');

colorPalette.forEach($color => {
  $color.addEventListener('click', function (event) {
    const whereIsSelected = document.querySelector('.selected');
      whereIsSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
});

//--------------------------------------------------------------------------

const recoverPixelBoard = document.querySelectorAll('.pixel');
recoverPixelBoard.forEach(pixel => {
  pixel.addEventListener('click', function (event) {
    const whereIsSelectedClass = document.querySelector('.selected');
    const backgroundColorSelectedClass = window.getComputedStyle(whereIsSelectedClass, null).getPropertyValue("background-color");  //método getComputedStyle(), seleciona a partir do css

    event.target.style.backgroundColor = backgroundColorSelectedClass;
  });
});

//--------------------------------------------------------------------------------------------------

const buttonClearBoard = document.querySelector('#clear-board');
const colorWhite = 'rgb(255, 255, 255)';

buttonClearBoard.addEventListener('click', function () {
  for (let index = 0; index < recoverPixelBoard.length; index += 1) {
    let onePixel = recoverPixelBoard[index];

    onePixel.style.backgroundColor = colorWhite;
  };
});

//------------------------------------------------------------------------------