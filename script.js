const quadroPixels = document.getElementById('pixel-board');
const classColor = document.getElementsByClassName('color');
const classPixel = document.getElementsByClassName('pixel');
const clean = document.getElementById('clear-board');

//  Funções para gerar o quadro de pixels

function generate(tamanho, linha) {
  for (let index = 0; index < tamanho; index += 1) {
    const square = document.createElement('td');
    linha.appendChild(square);
    square.classList = 'pixel';
  }
}

function geradorDeQuadros(tamanho) {
  for (let index = 0; index < tamanho; index += 1) {
    const linha = document.createElement('tr');
    quadroPixels.appendChild(linha);
    generate(tamanho, linha);
  }
}

geradorDeQuadros(5);

//  Função para gerar cores aleatórias
function generateColors() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
//  Função para adicionar as cores aleatórias na paleta de cores
function paletteColors() {
  for (let i = 0; i < classColor.length; i += 1) {
    if (i === 0) {
      classColor[i].style.backgroundColor = '#000';
    } else {
      classColor[i].style.backgroundColor = generateColors();
    }
  }
}
paletteColors();
//  Função para deixar selecionado a cor preta quando a pagina for carregada
function colorBlack() {
  classColor[0].classList.add('selected');
}
colorBlack();
//  Funções para que apenas uma cor tenha a classe 'selected' por vez
//  1 função = remove a classe 'selected' por
//  2 função = muda a classe 'selected' de lugar
//  3 função = adiciona a classe 'selected' na cor selecionada
function unselected() {
  for (let i = 0; i < classColor.length; i += 1) {
    if (classColor[i].classList.contains('selected')) {
      classColor[i].classList.remove('selected');
    }
  }
}

function changeSelected(event) {
  unselected();
  event.target.classList.add('selected');
}
for (let i = 0; i < classColor.length; i += 1) {
  classColor[i].addEventListener('click', changeSelected);
}

function selectedColor() {
  for (let i = 0; i < classColor.length; i += 1) {
    if (classColor[i].classList.contains('selected')) {
      return classColor[i].style.backgroundColor;
    }
  }
}
//  Função para permitir que os pixels sejam pintados
function changePixelColor(event) {
  const ev = event;
  ev.target.style.backgroundColor = selectedColor();
}
function changePixelColorListener() {
  for (let i = 0; i < classPixel.length; i += 1) { // percorre item por item do array
    classPixel[i].addEventListener('click', changePixelColor); // adiciona evento de click
  }
}
changePixelColorListener();
//  Função para limpar os pixels
function clearBoard() {
  for (let i = 0; i < classPixel.length; i += 1) { // percorre item por item do array
    classPixel[i].style.backgroundColor = 'white'; // altera a propriedade backgroundColor para white
  }
}
clean.addEventListener('click', clearBoard); // adiciona evento de click
