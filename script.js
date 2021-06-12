window.onload = function () {
  let caixa1 = document.getElementsByClassName('color')[0];
  let caixa2 = document.getElementsByClassName('color')[1];
  let caixa3 = document.getElementsByClassName('color')[2];
  let caixa4 = document.getElementsByClassName('color')[3];
  let pixelBoard = document.getElementById('pixel-board');
  let colorPallete = document.getElementById('color-palette');

  caixa1.classList.add('selected');
  caixa1.style.backgroundColor = 'black';
  caixa2.style.backgroundColor = 'purple';
  caixa3.style.backgroundColor = 'red';
  caixa4.style.backgroundColor = 'yellow';

//R7
// quando for executado o click no mouse, a classe selected é removida do elemento atual; 
//inserir a classe selected no elemento clicado;

//quando for clicado no elemento pai, não acontecerá nada;

  function selecionandoCor (event) {
    if (event.target.id !== 'color-palette') {
      let elementoAtual = document.querySelector('.selected')
      elementoAtual.classList.remove('selected');
      event.target.classList.add('selected')
    }
  }



  colorPallete.addEventListener('click', selecionandoCor) 
}




