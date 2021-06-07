// Puxa o pixelboard
const pixelBoard = document.getElementById('pixel-board');
// Puxa a paleta
var palette = document.getElementsByClassName('color');
var paletteDois = document.getElementById('color-palette');
function createTable (tableSize) {
  // Cria as linhas
  for (let r = 0; r < tableSize; r += 1){
    const newRow = document.createElement('div');
    newRow.id = 'Row number ' + r;
    newRow.classList.add('row');
    pixelBoard.appendChild(newRow);
    for (let c = 0; c < tableSize; c += 1){
      const newColumn = document.createElement('div');
      newColumn.classList.add('column');
      newColumn.classList.add('pixel');
      newRow.appendChild(newColumn);
    }
  }
}
createTable(5);
// Preenche a paleta de cores
function fillPalette () {
  palette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  palette[0].classList.add('selected');
  for (let i = 1; i < palette.length; i += 1){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = 'rgb('+r+','+g+','+b+')';
    palette[i].style.backgroundColor = randomColor;
  }
}
fillPalette();
let selectedColor = 'rgb(0, 0, 0)';
// Colore a pixel-board em preto quando carrega página
pixelBoard.addEventListener('click' , (event) => {
  event.target.style.backgroundColor = selectedColor;
})
// Colore a pixel-board com a cor selecionada da paleta

function colorBoard (){
// Seleciona a cor
  paletteDois.addEventListener('click', (event) => {
    for (let i = 0; i < palette.length; i += 1){
      palette[i].classList.remove('selected')
    }
    event.target.classList.add('selected');
    selectedColor = event.target.style.backgroundColor;
  })
  // Coloca a cor
  pixelBoard.addEventListener('click' , (event) => {
    event.target.style.backgroundColor = selectedColor;
  })
}
colorBoard();