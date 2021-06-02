const div1 = document.querySelector("#black");
div1.classList.add("selected")
const div2 = document.querySelector("#red")
const div3 = document.querySelector("#yellow")
const div4 = document.querySelector("#green")

//cores fixas com um selecionador

//criação dos blocoDiv
function createPixels(n=5) {
  for (let index = 0; index < n; index += 1) {
    const quadrado = document.createElement('div');
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(quadrado);
    quadrado.classList = 'linha';
    for (let index2 = 0; index2 < n; index2 += 1) {
      const quadradinho = document.createElement('div');
      quadradinho.classList = 'pixel';
      quadrado.appendChild(quadradinho);
    }
  }
}
createPixels();
/*quando estou no 0, eu coloco a primeira linha no for 2 eu rodo 5 vezes criando 5 quadrados
quando estou no 1, eu coloco a segunda linha do for, no 2 for  eu rodo 5 vezes criando 5 quadrados
quando estou no 2, eu coloco a terceira linha do for, no 3 for eu rodo 5 vezes cirando 5 quadrados.
quando estou no 3 , eu coloco a quarta linha do for, no 4 for eu rodo 5 vezes criando 5 quadrados.
quando estou no 4, eu colco a 5 linha do for, no 4 for eu rodo 5 vezes criando 5 quadrados.
aprendi no plantao que nao posso por a classe pixel no primeiro for porque o primeiro for seriam as linhas criadas.
requisito baseado no exercício da trybe bloco 4.3 exercício 1, lá tem 25 asteriscos também, fiz a troca pela div.
joguei como filha para ficar embaixo */

//codigo de aline hoshino
//evento que seleciona as paletas de cores


function mudaDiv(event) {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  event.target.classList.add('selected');
}
div1.addEventListener("click", mudaDiv)
div2.addEventListener("click", mudaDiv)
div3.addEventListener("click", mudaDiv)
div4.addEventListener("click", mudaDiv)

//era pra pintar
const pixels = document.querySelectorAll(".pixel");
const pixelBoard = document.querySelector("#pixel-board");

function pincel(event) {
  const evento = event;
  if(evento.target.classList.contains("pixel")){
  const selectedElement = document.querySelector('.selected');
  const SelectColor = window.getComputedStyle(selectedElement, null). getPropertyValue('background-color');
  evento.target.style.backgroundColor = SelectColor;
  }
}

pixelBoard.addEventListener("click", pincel)

















































// function setBackground(element) {
//   const pixelElement = element;
//   const selectElement = document.getElementsByClassName('selected')[0];

//   pixelElement.style.backgroundColor = selectElement.style.backgroundColor;

//   return pixelElement;
// }

// function drawColor() {
//   const pixelsListElements = document.getElementsByClassName('pixel');

//   for (let elementIndex = 0; elementIndex < pixelsListElements.length; elementIndex += 1 ) {
//     const pixelElement = pixelsListElements[elementIndex];
//     pixelElement.addEventListener('click', () => setBackground(pixelElement));
//   }
// }

// function clearButton() {
//   const buttonElement = document.getElementById('clear-board');
//   const pixelBoardItems = document.getElementsByClassName('pixel');

//   buttonElement.addEventListener('click', () => {
//     for (let index = 0; index < pixelBoardItems.length; index += 1) {
//       pixelBoardItems[index].style.backgroundColor = 'white';
//     }
//   });
// }

// function createPixel() {
//   const pixelElement = document.createElement('li');
//   pixelElement.className = 'pixel';
//   pixelElement.addEventListener('click', () => setBackground(pixelElement));

//   return pixelElement;
// }