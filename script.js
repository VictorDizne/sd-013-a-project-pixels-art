const firstColor = document.querySelector('.color');
const colorsArray = document.querySelectorAll('.color');
const quadroDePixel = document.querySelector('#pixel-board');
const paletaDeCores = document.querySelector('#color-palette');
firstColor.className = 'color selected';
const limpaQuadro = document.querySelector('#clear-board');
const vqv = document.querySelector('#generate-board');
const imputNumber = document.querySelector('#board-size');
  console.log(imputNumber);

firstColor.style.backgroundColor = 'black';

function randomHex() {
  const hexaChars = '0123456789ABCDEF';
  // Caracteres do sistema Hexadecimal;
  let cor = '#';
  // Hexadecimal inicia-se com #
  for (let i = 0; i < 6; i += 1) {
    // Hexadecimal possui 6 caracteres após o hex
    cor += hexaChars[Math.floor(Math.random() * 16)];
    // math.floor retorna o menor inteiro dentro do parenteses, math.random multiplica um numero aleatório de 0 a 1 por 16, ao final cor adiciona um elemento da string hexChars para si, após o #, a cada iteração.
  }
  return cor;
}

function coloreColor() {
  for (let index = 1; index <= 3; index += 1) {
    const color = randomHex();
    colorsArray[index].style.backgroundColor = color;
  }
}

coloreColor();

// Fiz com a ajuda de Matheus Camillo, eu estava usando 'div' no lugar de 'tr' e 'td' e mesmo forçando o tamanho do .pixel-board a ficar exatamente do tamanho das linhas e colunas, o bot estava reclamando que não eram do mesmo tamanho, ao usar 'tr' e 'td' o meu quadro adquire as propriedades de uma tabela e o robô consegue identificar o mesmo tamanho

function criaQuadro(tamanho) {
  for (let linha = 0; linha < tamanho; linha += 1) {
    const novaLinha = document.createElement('tr');
    novaLinha.className = 'linhaDePixels';
    for (let pixel = 0; pixel < tamanho; pixel += 1) {
      const novoPixel = document.createElement('td');
      novoPixel.className = 'pixel';
      novoPixel.style.backgroundColor = 'white';
      novaLinha.appendChild(novoPixel);
    }
    quadroDePixel.appendChild(novaLinha);
  }
  let dimensaoCorreta = 42*tamanho;  
  let tamanhoQuadro = document.getElementById('pixel-board');
  tamanhoQuadro.style.width = `${dimensaoCorreta}px`;
  tamanhoQuadro.style.height = `${dimensaoCorreta}px`;
}

criaQuadro(5);

function selecionaCor(origem) {
  if (origem.target.className === 'color') {
    const selecionada = document.querySelector('.selected');
    origem.target.className = 'color selected';
    selecionada.className = 'color';
  }
}

paletaDeCores.addEventListener('click', selecionaCor);

function colorePixel(origem) {
  const corSelecionada = document.querySelector('.selected').style.backgroundColor;
  const pixelSelecionado = origem.target;
  if (pixelSelecionado.className === 'pixel') {
    pixelSelecionado.style.backgroundColor = corSelecionada;
  }
}

quadroDePixel.addEventListener('click', colorePixel);

function resetarQuadro() {
  const pixel = document.querySelectorAll('.pixel');
  for (let reset = 0; reset < pixel.length; reset += 1) {
    pixel[reset].style.backgroundColor = 'white';
  }
}

limpaQuadro.addEventListener('click', resetarQuadro);

function gerarQuadro(input) {
  if (imputNumber.value < 5) {
    input = 5;
    criaQuadro(input);
    alert('O tamanho mínimo é 5');
  } 
  if (imputNumber.value > 50) {
    input = 50;
    criaQuadro(input);
    alert('O tamanho máximo é 50') 
      } else {
      criaQuadro(input.value);
   }
}

function apagaOriginal() {
  const linhaDePixels = document.querySelectorAll('.linhaDePixels');
  for (let nDaLinha = 0; nDaLinha < linhaDePixels.length; nDaLinha += 1) {
  quadroDePixel.removeChild(linhaDePixels[nDaLinha]);
  }
}

function botaoVqv() {
  if (imputNumber.value === '') {
    alert('Board inválido!');
  } else { 
    apagaOriginal();
    gerarQuadro(imputNumber);
    }
}

vqv.addEventListener('click', botaoVqv);

