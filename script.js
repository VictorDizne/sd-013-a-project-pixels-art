let cor1 = document.getElementsByClassName("color")[0]
cor1.style.background = "black"

let cor2 = document.getElementsByClassName("color")[1]
cor2.style.background = "red"

let cor3 = document.getElementsByClassName("color")[2]
cor3.style.background = "blue"

let cor4 = document.getElementsByClassName("color")[3]
cor4.style.background = "green"

/* Pixel Board
?
*/

const tabelaPixels = document.getElementById('pixel-board');

function gerartabelaPixels(Tamanho) {
  for (let i = 0; i < Tamanho; i += 1 ) {
    const linha = document.createElement('tr');
    tabelaPixels.appendChild(linha);
    gerarPixel(Tamanho, linha);
  }
}

function gerarPixel(Tamanho, linha) {
  for (let i = 0; i < Tamanho; i += 1 ) {
    const pixel = document.createElement('td');
    linha.appendChild(pixel);
    pixel.classList = 'pixel';
  }
}
gerartabelaPixels(5);

/* cor preta defaut
?
*/

function sempreBlack() {
  cor1.classList.add('selected');
}
sempreBlack();

/* selecionar outras cores
?
*/

const cores = document.getElementsByClassName("color");

for (let i = 0; i < cores.length; i+=1) {
  cores[i].addEventListener('click', selecionar);
}

function selecionar(event) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected')
  event.target.classList.add('selected')
}


/* preencher cores
?
*/
const cor = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

function seletor() {
  for (let i = 0; i < cor.length; i += 1) {
    if (cor[i].classList.contains('selected')) {
      return cor[i].style.backgroundColor;
    }
  }
}

function mudanssa(event) {
  const evento = event;
  evento.target.style.backgroundColor = seletor();
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', mudanssa);}

