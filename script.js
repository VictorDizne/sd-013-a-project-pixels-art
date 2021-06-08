const div1 = document.querySelector('#black');
div1.classList.add('selected');
const div2 = document.querySelector('#red');
const div3 = document.querySelector('#yellow');
const div4 = document.querySelector('#green');

// cores fixas com um selecionador

// criação dos blocoDiv
function createPixels(n) {
  for (let index = 0; index < n; index += 1) {
    const quadrado = document.createElement('div');
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(quadrado);
    quadrado.classList.add('linha');

    for (let index2 = 0; index2 < n; index2 += 1) {
      const quadradinho = document.createElement('div');
      quadradinho.classList.add('pixel');
      quadrado.appendChild(quadradinho);
    }
  }
}
createPixels(5);

/* quando estou no 0, eu coloco a primeira linha no for 2 eu rodo 5 vezes criando 5 quadrados
quando estou no 1, eu coloco a segunda linha do for, no 2 for  eu rodo 5 vezes criando 5 quadrados
quando estou no 2, eu coloco a terceira linha do for, no 3 for eu rodo 5 vezes cirando 5 quadrados.
quando estou no 3 , eu coloco a quarta linha do for, no 4 for eu rodo 5 vezes criando 5 quadrados.
quando estou no 4, eu colco a 5 linha do for, no 4 for eu rodo 5 vezes criando 5 quadrados.
aprendi no plantao que nao posso por a classe pixel no primeiro for porque o primeiro for seriam as linhas criadas.
requisito baseado no exercício da trybe bloco 4.3 exercício 1, lá tem 25 asteriscos também, fiz a troca pela div.
joguei como filha para ficar embaixo */

// codigo que aline hoshino me ajudou.
// evento que seleciona as paletas de cores

function mudaDiv(event) {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  event.target.classList.add('selected');
}
div1.addEventListener('click', mudaDiv);
div2.addEventListener('click', mudaDiv);
div3.addEventListener('click', mudaDiv);
div4.addEventListener('click', mudaDiv);

// AQUI QUE A MAGICA ACONTECE
const pixelBoard = document.querySelector('#pixel-board');
function pincel(event) {
  const evento = event;
  if (evento.target.classList.contains('pixel')) {
    const selectedElement = document.querySelector('.selected');
    const SelectColor = window.getComputedStyle(selectedElement, null)
      .getPropertyValue('background-color');
    evento.target.style.backgroundColor = SelectColor;
  }
}
pixelBoard.addEventListener('click', pincel);

// limpa pixels
const button = document.getElementById('clear-board');
button.innerHTML = 'Limpar';
button.addEventListener('click', () => {
  const clear = document.getElementsByClassName('pixel');
  for (let index = 0; index < clear.length; index += 1) {
    clear[index].style.backgroundColor = 'white';
  }
});

// aumenta pixels
const buttonVqv = document.getElementById('generate-board');

buttonVqv.addEventListener('click', () => {
  const boardPixel = document.getElementById('pixel-board');
  boardPixel.innerHTML = '';
  const inputField = document.getElementById('board-size');
  createPixels(inputField.value);
});

// ------\\
const input = document.getElementById('board-size');
function verificaInput() {
  if (input.value === '') {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value >= 50) {
    input.value = 50;
  }
  document.getElementById('pixel-board').innerHTML = '';
  createPixels(input.value);
}
buttonVqv.addEventListener('click', verificaInput);
