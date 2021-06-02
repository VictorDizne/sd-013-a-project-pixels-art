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
const pixel = document.getElementsByClassName('pixel');
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
function paintColor(event){
  const selectedElement = document.querySelector('.selected');
  const SelectedColor = window.getComputedStyle(selectedElement).getPropertyValue("background-color");
  event.target.style.backgroundColor = SelectedColor;
}

pixelBoard.addEventListener('click', paintColor)

function selectColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

function cleanFunction() {
  for (index in pixel){
    pixel[index].style.color = 'white';
  }
}

