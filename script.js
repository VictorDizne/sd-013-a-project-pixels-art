
window.onload = function () {

function black () {
document.getElementById('colorOne').classList.add('selected');
document.getElementById('colorOne').style.backgroundColor = 'black'
}
black();

// função de criar tabela
function createBoard(num) {
  for (let i=0; i < num; i += 1) {
  line = document.createElement('tr')
  document.getElementById('pixel-board').appendChild(line);
  line.classList.add('tr');
    for (let j=0; j < num; j += 1) {
      column = document.createElement('td')
      document.getElementById('pixel-board').lastChild.appendChild(column);
      column.classList.add('pixel');
      }
  }
}
createBoard(5);

// função para deixar cores aleatórias na paleta




// Função para Selecionar cor
let colorOne = document.getElementById('colorOne'); 
let colorTwo = document.getElementById('colorTwo'); 
let colorThree = document.getElementById('colorThree'); 
let colorFour = document.getElementById('colorFour');
let ranColTwo = randomColor();
let ranColThree = randomColor();
let ranColFour = randomColor();

colorOne.addEventListener('click', selected);
colorTwo.addEventListener('click', selected);
colorThree.addEventListener('click', selected);
colorFour.addEventListener('click', selected);

colorTwo.style.backgroundColor = ranColTwo 
colorThree.style.backgroundColor = ranColThree 
colorFour.style.backgroundColor = ranColFour 

function selected(event) {
  let colorChoose = document.querySelector('.selected');
  colorChoose.classList.remove('selected');
  event.target.classList.add('selected');
}

// função para identificar o quadrado clicado e função para escolher a cor que irá pintar
let bigSquare = document.querySelector('.table');

bigSquare.addEventListener('click', pixels);

function pixels(event) {  
  let pixel = document.querySelector('.painted');
  if (pixel == null) {
    event.target.classList.add('painted');
  } else {
    pixel.classList.remove('painted');
    event.target.classList.add('painted');
  };
  paintSquare();
}; 

function paintSquare () {
  let colorChoose = document.querySelector('.selected');
  let squareChoose = document.querySelector('.painted');
  squareChoose.className = '';
    
  if (colorChoose == colorOne) {
    squareChoose.style.backgroundColor = 'black';
  } else if (colorChoose == colorTwo) {
    squareChoose.style.backgroundColor = ranColTwo;
  } else if (colorChoose == colorThree) {
    squareChoose.style.backgroundColor = ranColThree;
  } else if (colorChoose == colorFour) {
    squareChoose.style.backgroundColor = ranColFour;
  };
  squareChoose.classList.add('pixel');
}; 

// função para Limpar o quadro
let clean = document.getElementById('clear-board');

clean.addEventListener('click', eraseButton);

function eraseButton () {
  let pixelList = document.querySelectorAll('.pixel');
  for (let j = 0; j < pixelList.length; j += 1) {
    pixelList[j].className = 'pixel';
    pixelList[j].style.backgroundColor = 'white';
  }; 
};

// função para excluir tabela
function excluir () {
  let bigSquare = document.getElementById('pixel-board');
  while (bigSquare.firstChild) {
    bigSquare.removeChild(bigSquare.firstChild);
  }
} 

// função para criar a nova tabela com mais pixels
let boardSize = document.getElementById('board-size');
let createButton = document.getElementById('generate-board');

createButton.addEventListener('click', newTable);

function newTable () {
  let aux = parseInt(boardSize.value);
  if (aux < 5) {
    aux = 5;
  } else if (aux > 50) {
    aux = 50;
    excluir();
    createBoard(aux);
  } else if (aux >= 5 && aux <= 50) {
    excluir();
    createBoard(aux);
  } else {
    alert('Board inválido!');
  }
}

// função para criar cores aleatórias

function randomColor () {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

}





