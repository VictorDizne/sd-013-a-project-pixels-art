//=======================================================================
const elementPixel = 5;
let elementPixelBoard = document.querySelector('#pixel-board');

function fillFrame(value) {
  // Varre a linha
  for (let line = 0; line < value; line += 1) {
    let boxLine = document.createElement("div");
    boxLine.className = 'linha';
    elementPixelBoard.appendChild(boxLine);

    // Varre a coluna
    for (let column = 0; column < value; column += 1) {
      let boxColumn = document.createElement("div");
      boxColumn.className = 'pixel';
      boxLine.appendChild(boxColumn);
    }
  }
}
fillFrame(elementPixel);

//=======================================================================
const paleta = document.getElementsByClassName('color');
const color1 = paleta[0];
const color2 = paleta[1];
const color3 = paleta[2];
const color4 = paleta[3];

color1.addEventListener('click', changeSelected);
color2.addEventListener('click', changeSelected);
color3.addEventListener('click', changeSelected);
color4.addEventListener('click', changeSelected);

function changeSelected(evento) {
  console.log(evento.target);
  console.log(evento.type);
  const seleciona = document.querySelector('.selected');
  seleciona.classList.remove('selected');
  evento.target.classList.add('selected');
  console.log(paleta);
}

//=======================================================================
const quadro = document.getElementsByClassName('pixel')
const pixel1 = quadro[0];
const pixel2 = quadro[1];
const pixel3 = quadro[2];
const pixel4 = quadro[3];
const pixel5 = quadro[4];
const pixel6 = quadro[5];
const pixel7 = quadro[6];
const pixel8 = quadro[7];
const pixel9 = quadro[8];
const pixel10 = quadro[9];
const pixel11 = quadro[10];
const pixel12 = quadro[11];
const pixel13 = quadro[12];
const pixel14 = quadro[13];
const pixel15 = quadro[14];
const pixel16 = quadro[15];
const pixel17 = quadro[16];
const pixel18 = quadro[17];
const pixel19 = quadro[18];
const pixel20 = quadro[19];
const pixel21 = quadro[20];
const pixel22 = quadro[21];
const pixel23 = quadro[22];
const pixel24 = quadro[23];
const pixel25 = quadro[24];

pixel1.addEventListener('click', changeColor);
pixel2.addEventListener('click', changeColor);
pixel3.addEventListener('click', changeColor);
pixel4.addEventListener('click', changeColor);
pixel5.addEventListener('click', changeColor);
pixel6.addEventListener('click', changeColor);
pixel7.addEventListener('click', changeColor);
pixel8.addEventListener('click', changeColor);
pixel9.addEventListener('click', changeColor);
pixel10.addEventListener('click', changeColor);
pixel11.addEventListener('click', changeColor);
pixel12.addEventListener('click', changeColor);
pixel13.addEventListener('click', changeColor);
pixel14.addEventListener('click', changeColor);
pixel15.addEventListener('click', changeColor);
pixel16.addEventListener('click', changeColor);
pixel17.addEventListener('click', changeColor);
pixel18.addEventListener('click', changeColor);
pixel19.addEventListener('click', changeColor);
pixel20.addEventListener('click', changeColor);
pixel21.addEventListener('click', changeColor);
pixel22.addEventListener('click', changeColor);
pixel23.addEventListener('click', changeColor);
pixel24.addEventListener('click', changeColor);
pixel25.addEventListener('click', changeColor);

function changeColor(eventPixel) {
  console.log(eventPixel.target);
  console.log(eventPixel.type);
  const classeSelected = document.querySelector('.selected')
  
  //eventPixel.target.classList.add('selected2')
  var theCSSprop = window.getComputedStyle(classeSelected, null).getPropertyValue("background-color");
  console.log(theCSSprop);
  eventPixel.target.style.backgroundColor = theCSSprop;
  console.log(document.body);

}

//=======================================================================
let clickB = document.getElementById('clear-board');

clickB.addEventListener('click', recebeClick);

function recebeClick() {
  const recuperaPixel = document.getElementsByClassName('pixel');
  
  for (let index = 0; index < recuperaPixel.length; index += 1){
  recuperaPixel[index].style.backgroundColor = 'white';
  }
  console.log(recuperaPixel);
}

//=======================================================================
console.log(document.body)
