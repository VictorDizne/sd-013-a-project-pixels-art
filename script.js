const paletaCores = document.getElementsByClassName('color');
const colorArray = ['black', 'red', 'blue', 'green'];
let bgColor = 'black';


for (let i = 0; i < paletaCores.length; i += 1) {
  paletaCores[i].style.backgroundColor = colorArray[i];
  paletaCores[i].addEventListener('click', (e) => {
    for (let paleta of paletaCores) {
      paleta.classList.remove('selected');
    }
    e.target.classList.add('selected');
  });
}

function criaElemento(nome) {
  let elemento = document.createElement(nome);
  return elemento;
}
let pixels = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  let horizontal = criaElemento('tr');
  pixels.appendChild(horizontal);

  for (let j = 0; j < 5; j += 1) {
    let vertical = criaElemento('td');
    vertical.className = 'pixel';
    pixels.lastElementChild.appendChild(vertical);
  }
}
let coresPaleta = document.getElementsByClassName('color');
for (let corPaleta of coresPaleta) {
  corPaleta.addEventListener('click', setColor);
}
function setColor(e) {
  let bg = e.target.style.backgroundColor;
  bgColor = bg;
}
let pixelColor = document.getElementsByClassName('pixel');
for (let classColor of pixelColor) {
  classColor.addEventListener('click', pintaPixel);
}
function pintaPixel(e) {
  e.target.style.backgroundColor = bgColor;
}

const botao = document.getElementById('clear-board');
let quadroCor = document.querySelectorAll('#pixel-board .pixel');
botao.addEventListener('click', () => {
  for (let cor of quadroCor) {
    cor.style.backgroundColor = 'white' 
  } 
});



