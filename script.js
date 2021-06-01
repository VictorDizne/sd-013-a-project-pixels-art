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