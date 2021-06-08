window.onload = function () {
  function boardCreator() {
    let pixelTotal = 25;
    for (let i = 1; i <= pixelTotal; i+=1) {
      let pixelBoard = document.getElementById('pixel-board');
      let divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      pixelBoard.appendChild(divPixel); 
    }
  }
    boardCreator();

  function colors() {
    let pallete = document.getElementsByClassName('color');
    let otherColors = ['blue', 'red', 'yellow'];
      for (let i = 0; i < pallete.length; i+=1) {
      pallete[0].style.background = 'black';
      pallete[0].id = 'black';
      pallete[0].classList.add('selected');
      if (i>0) {
      pallete[i].style.background = otherColors[i - 1];
      pallete[i].id = otherColors[i - 1];
      }
      }
  }
  colors();
  function selectColors() {
  const paletaDeCores = document.getElementById('color-palette');
  paletaDeCores.addEventListener('click', function(i) {
  clicar(i.target.id); 
  });
  }
  selectColors()

  function clicar(idColor) {
  const classeSelecionada = document.querySelector('.selected');  
  classeSelecionada.classList.remove('selected');
  const itenSelector = document.getElementById(idColor);
  itenSelector.classList.add('selected');
  }
}


