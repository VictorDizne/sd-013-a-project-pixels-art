window.onload = function() {

  function classSelected() {
    document.querySelector('#color-palette .color:nth-child(1)').classList.add('selected');
  }
  classSelected();

  function changeClassSelected() {
    let colorPalet = document.querySelector('#color-palette');
    let colorPaletChildren = document.querySelectorAll('#color-palette .color');
    
    colorPalet.addEventListener('click', function(event) {
      
      if(event.target.classList.contains('color')) {
        for (let i = 0; i < colorPaletChildren.length; i += 1) {
          colorPaletChildren[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
        console.log(colorPaletChildren);
      }
    });
  }
  changeClassSelected();

  function createPixelBoard(number = 5) {
    let pixelBoard = document.querySelector('#pixel-board');

    for (let indexLine = 0; indexLine < number; indexLine += 1) {
      let line = document.createElement('div');
      line.classList.add('line');
        for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
          let pixel = document.createElement('div');
          pixel.classList.add('pixel');
          line.appendChild(pixel);
        }
      pixelBoard.appendChild(line);
    }
  }

  createPixelBoard();






  function paintPixel() {

    let pixelBoard = document.querySelector('#pixel-board');

    pixelBoard.addEventListener('click', function(event) {

      if (event.target.classList.contains('pixel')) {
        let selected = document.querySelector('.selected');
        let bgcolor = window.getComputedStyle(selected).backgroundColor;
        event.target.style.backgroundColor = bgcolor;
      }
    })
  }
  paintPixel();


  function clearBoard() {
    let btnClearBoard = document.querySelector('#clear-board');
    let pixelList = document.querySelectorAll('#pixel-board .pixel');
    
    btnClearBoard.addEventListener('click', function() {
      for (let i = 0; i < pixelList.length; i += 1) {
        pixelList[i].style.backgroundColor = "white";
      }
    });
  }
  clearBoard();


  function paletteColors() {

  }



}







