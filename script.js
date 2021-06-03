// CRIA PIXELS
function criaPixels() {
  for (let index =0; index < 25; index += 1){
    let divPixel = document.createElement('div');
    document.querySelector('#pixel-board').appendChild(divPixel);
    divPixel.className = 'pixel'
  }
  }
  criaPixels();
  
  // ---------------------------------------------------------------------------
  
  // Seleciona Cor da Paleta
  let coresPaleta =  document.querySelectorAll('.color');
  
  function selected (event) {
    for (let index = 0; index < coresPaleta.length; index += 1 ) {
      coresPaleta[index].className = 'color';
    }
    event.target.className = 'selected color';
  }
  
  for (let index = 0; index < coresPaleta.length; index += 1 ) {
    coresPaleta[index].addEventListener('click', selected);
  }
  
  
  // Atribui a class selected ao pixel (pinta pixel)
  let pixelSelecionado = document.querySelectorAll('.pixel');
  
  function pintaPixel (event) {
    let corSelecionada = document.querySelector('.selected');
    event.target.style.backgroundColor = window.getComputedStyle(corSelecionada).getPropertyValue('background-color');
  }
  
  for (let index = 0; index < pixelSelecionado.length; index += 1 ) {
    pixelSelecionado[index].addEventListener('click', pintaPixel);
  }