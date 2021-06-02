/* exported cleanFunction */
// Fonte: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
function createBoard() {
  const b = document.getElementsByTagName('body')[0];
  const t = document.createElement('table');
  t.id = 'pixel-board';
  const tb = document.createElement('tbody');
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('tr');
    for (let i2 = 0; i2 < 5; i2 += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    tb.appendChild(line);
  }
  t.appendChild(tb);
  b.appendChild(t);
}
createBoard();

const divcolor1 = document.getElementsByClassName('color1');
const divcolor2 = document.getElementsByClassName('color2');
const divcolor3 = document.getElementsByClassName('color3');
const divcolor4 = document.getElementsByClassName('color4');
const pixelado = document.querySelectorAll('.pixel');
const pixelBoard = document.querySelector('#pixel-board');

function selectColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

divcolor1[0].addEventListener('click', selectColor);
divcolor2[0].addEventListener('click', selectColor);
divcolor3[0].addEventListener('click', selectColor);
divcolor4[0].addEventListener('click', selectColor);

// Fonte: Li uma thread do requisito no Slack e busquei melhor em:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
function paintColor(acao) {
  const selectedElement = document.querySelector('.selected');
  const SelectColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');
  acao.target.style.backgroundColor = SelectColor;
}

pixelBoard.addEventListener('click', paintColor);

function cleanFunction() {
  pixelado.forEach(posicao => {posicao.style.backgroundColor = 'white';});
}

// for (let index in pixelado) {
// pixelado[index].style.backgroundColor = 'white';
// ESSA FUNçÂO, APESAR DE FUNCIONAR, ESTÁVA RETORNANDO ERRO 'Cannot set property 'backgroundColor' of undefined' NO CONSOLE. NÃO CONSEGUI ACHAR UMA SOLUÇÃO COM ELA. PESQUISANDO EM FORUNS ACHEI ESSA SOLUÇÃO DE UM COMANDO QUE AINDA NÃO ESTUDAMOS, MAS DEU PRA PEGAR A LÓGICA E FUNCIONOU. VOU LEVAR PRO PLANTÃO PRA VER O QUE ACONTECE.
// (https://www.hltv.org/forums/threads/2216651/javascript-help)
