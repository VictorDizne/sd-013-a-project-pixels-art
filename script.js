const paletaColor = document.getElementById('color-palette')

// função retorna uma valor de 0 ao numero
function randomNumber(numero) {
  return Math.floor(Math.random() * numero);
}

// Criar as div com cores diferente
function randomColorDiv() {
  const listCor = ['red', 'blue', 'yellow', 'green'];
  const listaCorDiv = document.getElementsByClassName('color');
  listaCorDiv[0].style.backgroundColor = 'black'; // Primeiro div Black
  listaCorDiv[0].className

  for (let el of listaCorDiv) {
    if (el.style.backgroundColor !== 'black') {
      // Usa a cor e deleta ela da lista.
      el.style.backgroundColor = listCor.splice(randomNumber(listCor.length), 1);
    }
  }
}

// Criar o quadro de pixels
function createPixelBord() {
  const pixelBoard = document.getElementById('pixel-board')

  for (let linha = 0; linha < 5; linha++) {
    let divLinha = document.createElement('div')
    for (let coluna = 0; coluna < 5; coluna++) {
      let divCelular = document.createElement('div')
      divCelular.className = 'pixel'
      divLinha.appendChild(divCelular)
    }
    pixelBoard.appendChild(divLinha)
  }
}

// Função que seleciona a cor
function selectCorClick(elemet) {
  const listPaleta = document.getElementsByClassName('color')
  for (let select of listPaleta) {
    if(elemet.target.className !== ''){
      select.className = 'color'
    }
  }

  if(elemet.target.className === 'color'){
    elemet.target.className = 'color selected '
  }
}


paletaColor.addEventListener('click', selectCorClick)
window.onload = () => {
  randomColorDiv();
  createPixelBord();
};
