//THE TITLE -> DESAFIO 1

// Coloca o título 'Paleta de Cores' na página:

const title = document.querySelector('#title');
title.innerHTML = 'Paleta de Cores';

// ------------------------------------------------------------

// THE PALETTE -> DESAFIOS 2 E 3

// Cria um array com as li's  de classe .color:
const palette = document.querySelectorAll('.color');
palette[0].style.backgroundColor = 'black'
palette[1].style.backgroundColor = 'lightgreen'
palette[2].style.backgroundColor = 'yellow'
palette[3].style.backgroundColor = 'violet'

// ------------------------------------------------------------

// THE BOARD -> DESAFIO 4

// Cria um quadro 
// (para conter todos os quadrados a serem coloridos pelo usuário):

const board = document.querySelector('#pixel-board');

// Define uma função para preencher o quadro criado anteriormente
// (com os quadrados a serem coloridos pelo usuário):

function fillBoard(number) {
  for (let row = 0; row < number; row += 1) {

    // Cria uma linha para ser preenchida por quadrados.
    let squareRow = document.createElement('div');

    // Preenche a linha criada anteriormente com quadrados. 
    for (let column = 0; column < number; column += 1) {
      let square = document.createElement('div');
      square.className = 'pixel';
      square.style.backgroundColor = 'white';
      squareRow.appendChild(square);
    }

    // Anexa a linha preenchida ao board.
    board.appendChild(squareRow);
  }
}
fillBoard(5);

// ------------------------------------------------------------

// APPEARANCE OF SQUARES -> DESAFIO 5

// Define largura, altura, e borda dos quadrados. Ver CSS (.pixel).

// ------------------------------------------------------------

// THE FIRST COLOR -> DESAFIO 6

// Coloca 'black' como cor inicial:

localStorage.setItem('corInicial', palette[0].style.backgroundColor);
let corInicial = localStorage.getItem('corInicial');
if (corInicial) corPixel(corInicial);

// ------------------------------------------------------------

// THE COLOR SELECTION -> DESAFIO 7

// Define função para selecionar uma cor específica 
// (pelo mouse, ao clicar na cor desejada na paleta de cores):

for (let index = 0; index < palette.length; index += 1) {
  palette[index].addEventListener
    (
      'click', function (aSelecao) {
        let corSelecionada = document.querySelector('.selected');
        if (aSelecao.target.className !== 'color selected') {
          aSelecao.target.classList.add('selected');
          corSelecionada.classList.remove('selected');
          corPixel(aSelecao.target.style.backgroundColor);
        }
      }
    );
}

// ------------------------------------------------------------

// THE SQUARE COLORATION -> DESAFIO 8

// Define função para colorir os quadrados dentro do quadro:

function corPixel(cor) {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener
      (
        'click', function (event) {
          event.target.style.backgroundColor = cor;
        }
      );
  }
}
