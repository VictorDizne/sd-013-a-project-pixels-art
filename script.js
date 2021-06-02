const colorPalette = document.querySelector('#color-palette');
const colorBlack = document.querySelector('#black');
const colorBlue = document.querySelector('#blue');
const colorRed = document.querySelector('#red');
const colorGreen = document.querySelector('#green');

const pixelBoard = document.querySelector('#pixel-board');
const tabela = document.querySelector('#table');

let tabelaTd = '<td class="pixel"></td>';
for (let i = 0; i < 4; i += 1) {
  tabelaTd += '<td class="pixel"></td>';
}
tabelaTd = `<tr> ${tabelaTd} </tr>`;
let aux = tabelaTd;
for (let i = 0; i < 2; i += 1) {
  aux += tabelaTd + tabelaTd;
}
tabelaTd = aux;
pixelBoard.innerHTML = `<table id="table"> ${tabelaTd} </table>`;

function seleciona(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
colorBlack.addEventListener('click', seleciona);
colorBlue.addEventListener('click', seleciona);
colorRed.addEventListener('click', seleciona);
colorGreen.addEventListener('click', seleciona);
