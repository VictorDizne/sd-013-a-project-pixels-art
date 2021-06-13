// Feito com ajuda de vitor dos santos, luiz furtado e gabriel gaspar
// Requisito 7
const colors = document.querySelectorAll('.color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', recebeClick);
}

function recebeClick(e) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

// Requisito 8
const pixel = document.querySelectorAll('.pixel');

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', clicar);
}
function clicar(event) {
  const colorToPaint = document.getElementsByClassName('selected');
  const colorTarget = getComputedStyle(colorToPaint[0]).getPropertyValue('background-color');
  event.target.style.backgroundColor = colorTarget;
}

// Requisito 9 pesquisado em https://cursos.alura.com.br/forum/topico-duvida-criar-botao-para-voltar-ao-estado-anterior-de-uma-pagina-87729
const botao = document.querySelector("#clear-board");

botao.addEventListener('click', clicaBotao);

function clicaBotao() {
  location.reload();
}

function corAleatoria1 () {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

 return `rgb(${r}, ${g}, ${b})`;
 }

 let cor1 = document.getElementById('color-2');
cor1.style.backgroundColor = corAleatoria1();

function corAleatoria2 () {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

 return `rgb(${r}, ${g}, ${b})`;
 }
let cor2 = document.getElementById('color-3');
cor2.style.backgroundColor = corAleatoria2();

function corAleatoria3 () {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

 return `rgb(${r}, ${g}, ${b})`;
 }
let cor3 = document.getElementById('color-4');
cor3.style.backgroundColor = corAleatoria3();