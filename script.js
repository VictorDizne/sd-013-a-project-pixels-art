criaPixelBoard();

function resetBoard(){
    window.location.reload();
}

function criaPixelBoard() {
    for (let index = 0; index < 5; index += 1) {
      let pixelBoard = document.querySelector('#pixel-board');
      let line = document.createElement('div');
      pixelBoard.appendChild(line);
      for (let index = 0; index < 5; index += 1) {
        let div = document.createElement('div');
        div.className = 'pixel';
        line.appendChild(div);
      }
    }
  } 
  
function mudaCor(event) {
  let corAtual = document.querySelector('.selected');
  corAtual.className = 'color';
  event.target.className = 'color selected';
};

let paletteArray = document.querySelectorAll('#color-palette div');
for (let i = 0; i < paletteArray.length; i += 1) {
  paletteArray[i].addEventListener('click', mudaCor);
};
  
function changePixels(event) {
  let corAtual = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = corAtual;
}

let pixelsArray = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelsArray.length; i += 1) {
  pixelsArray[i].addEventListener('click', changePixels);
}; 