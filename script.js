
let pixelBd = document.querySelector('#pixel-board')                                    
let buttonInput = document.querySelector('#generate-board');
function geraBoard(linhas){
pixelBd.innerHTML = '';
  for (let i = 0; i < linhas; i ++) {
    let linhaPixel = document.createElement('div');
    linhaPixel.className = 'linha';
    pixelBd.appendChild(linhaPixel);
    for (let pix = 0; pix < linhas; pix ++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      linhaPixel.appendChild(pixel);
    }
   
  }
}
window.onload = function() {
  geraBoard(5);
};

