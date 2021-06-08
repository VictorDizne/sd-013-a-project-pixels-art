// Cria o Título do documento. Requisito 1
function createTitle() {
  const titulo = document.querySelector('#titulo');
  const h1 = document.createElement('h1');
  h1.setAttribute('id', 'title');
  titulo.appendChild(h1);
  h1.innerHTML = '"Paleta de Cores"';
}
createTitle();

// Criar a peleta de cores e de quebra já resolve o requisito 3. Requistos 2 e 3.
function createPaletaDeCores() {
  const sessaoCores = document.querySelector('#color-palette');
  const arrayCores = ['black', 'red', 'green', 'blue'];
  for (let index = 0; index < 4; index += 1) {
    const cores = document.createElement('div');
    cores.style.backgroundColor = arrayCores[index];
    cores.classList.add('color');
    sessaoCores.appendChild(cores);
  }
}
createPaletaDeCores();

// Cria quadro de pixel no formato 5x5 e de quebra ja resolve o requisito 5. Requisitos 4 e 5.
function createPixelSquare() {
  const square = 5;
  const pixel = document.querySelector('#pixel-board');
  pixel.classList.add('pixel-board');
  for (let index = 0; index < square; index += 1) {
    const squareLine = document.createElement('div');
    squareLine.classList.add('line');
    pixel.appendChild(squareLine);
    for (let i = 0; i < square; i += 1) {
      const squareCollun = document.createElement('div');
      squareCollun.classList.add('pixel');
      pixel.appendChild(squareCollun);
    }
  }
}
createPixelSquare();

// Define a cor preta como a cor selecionada ao carregar a página. Requisito 6.
function selectBlack() {
  const black = document.getElementsByClassName('color')[0];
  black.classList.add('selected');
}
selectBlack();
window.onload = selectBlack;

// Seleciona a cor que irá pintar o pixel. Requisito 7.
function selectColor() {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    color.addEventListener('click', ((event) => {
      for (let j = 0; j < colors.length; j += 1) {
        const colorDiv = colors[j];
        colorDiv.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }));
  }
}
selectColor();

// Criar o botão para limpar a tabela de pixel. Requisito 9.
function createButton() {
  const div = document.createElement('div');
  const pixels = document.getElementsByClassName('pixel');
  const pixelsBoard = document.getElementById('pixel-board');
  const button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'clear-board');
  button.setAttribute('value', 'Limpar');
  button.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      const pixel = pixels[i];
      pixel.style.backgroundColor = ('White');
    }
  });
  div.appendChild(button);
  document.body.insertBefore(div, pixelsBoard);
}
createButton();
