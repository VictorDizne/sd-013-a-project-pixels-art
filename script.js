window.onload = function () {
  let caixa1 = document.getElementsByClassName('color')[0];
  let pixelBoard = document.getElementById('pixel-board');
  let colorPallete = document.getElementById('color-palette');

  caixa1.classList.add('selected');
 
//R7
// quando for executado o click no mouse, a classe selected é removida do elemento atual; 
//inserir a classe selected no elemento clicado;

//quando for clicado no elemento pai, não acontecerá nada;

function selecionandoCor (event) {
  if (event.target.id !== 'color-palette') {
    let elementoAtual = document.querySelector('.selected');
    elementoAtual.classList.remove('selected');
    event.target.classList.add('selected');
  }
}
  colorPallete.addEventListener('click', selecionandoCor) 
}


//Agradecimentos a Lucas Caribé Tribo B pela ajuda!

//R8

const paintingPixels = () => {
  const selected = document.getElementsByClassName('selected');
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i++) {
    let pixel = pixels[i];
    pixel.addEventListener('click', () => {
      for (let index = 0; index < selected.length; index++) {
        let select = selected[index];
        pixel.style.backgroundColor = select.style.backgroundColor;
      }
    })
  }
}

paintingPixels();

//Agradecimentos ao Greg, Gildo Santos, Emanoel Mattos e Guilherme Rodrigues;