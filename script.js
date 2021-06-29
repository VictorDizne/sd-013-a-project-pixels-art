// Pega a section pixel-board.
const pixelBoard = document.getElementById('pixel-board');

// Pega a id color-palette da section da paleta.
const sectionColorPalette = document.getElementById('color-palette');

// Pega a classe color das div da paleta.
const divColorPalette = document.getElementsByClassName('color');

// Pega o botão de limpar o board.
const cleanButton = document.getElementById('clear-board');

// Puxa botão VQV
const vqv = document.getElementById('generate-board');

// Puxa o input
const size = document.querySelector('#board-size');

// Função responsável por criar as linhas e colunas.
function createBoard(BoardSize) {
  // Cria as linhas
  for (let index = 0; index < BoardSize; index += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    pixelBoard.appendChild(newRow);
    for (let index = 0; index < BoardSize; index += 1) {
      const newColumn = document.createElement('div');
      newColumn.classList.add('column');
      newColumn.classList.add('pixel');
      newRow.appendChild(newColumn);
    }
  }
}
createBoard(5);

// Cria o board de acordo com o input do usuário.
function createNewBoard() {
  // Apaga o board anterior
  const everyPixel = document.getElementsByClassName('pixel');
  while (everyPixel.length > 0) {
    const father = everyPixel[0].parentNode;
    father.removeChild(everyPixel[0]);
  }
  if (size.value < 5) {
    size.value = 5;
  } else if (size.value > 50) {
    size.value = 50;
  }
  createBoard(size.value);
}

// Checa se o input recebido pelo usuário, por meio do clique no botão 'vqv' é valido.
vqv.addEventListener('click', () => {
  if (size.value.length === 0) {
    // Dispara o alarme de que o valor passado pelo usuário é inválido.
    window.alert('Board inválido!');
  } else {
    createNewBoard();
  }
});

// Função responsável por gerar, toda vez que a página web for carregada, uma paleta de cores diferente.
function randomColorPalette() {
  // Estabelece que a cor, na posição zero, dentro do array (primeira cor que aparece na paleta), sempre seja a cor preta e, também, assim que a página for carregada, é ela quem estará portando a classe 'selected'.
  divColorPalette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  divColorPalette[0].classList.add('selected');
  // Laço for que vasculha todos os elementos do array, um a um, e, na posição index, aplica ao elemento as cores rgb geradas aleatoriamente por meio da constante randomColor, que utiliza os métodos math.random para gerar um número aleatório entre 0 e 255, como também o método math.floor, para arredondar esses números para baixo, impedindo, dessa maneira, que sejam gerados números quebrados.
  for (let index = 1; index < divColorPalette.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${r},${g},${b})`;
    divColorPalette[index].style.backgroundColor = randomColor;
  }
}
// Executa a função.
randomColorPalette();

let colorSelected = 'rgb(0, 0, 0)';

// Função responsável por, de fato, colocar a cor selecionada na paleta no board.
function colorBoard() {
  // Seleciona a cor.
  sectionColorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < divColorPalette.length; index += 1) {
      divColorPalette[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
    colorSelected = event.target.style.backgroundColor;
  });
  // Coloca a cor selecionada no board.
  pixelBoard.addEventListener('click', (event) => {
    const pixelSelected = event.target;
    pixelSelected.style.backgroundColor = colorSelected;
  });
}
colorBoard();

// Limpa a tabela
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  cleanButton.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
// Executa a função.
clearBoard();
