//adiciona paleta de cores a página
const colorBlack = document.getElementById('colorBlack');
colorBlack.style.backgroundColor = 'black';
const colorRed = document.getElementById('colorRed');
colorRed.style.backgroundColor = 'Red';
const colorBlue = document.getElementById('colorGreen');
colorBlue.style.backgroundColor = 'Green';
const colorGreen = document.getElementById('colorBlue');
colorGreen.style.backgroundColor = 'Blue';

//escolhe o tamanho da borda
const inputSize = document.getElementById('board-size');
const btnGenerateBorder = document.getElementById('generate-board');
const accessTable = document.getElementById('pixel-board');

let appliedColor = 'black';

const btnClearBoard = document.getElementById('clear-board');

// função criar linhas 
function rowCreate(size) {
    for (let index = 0; index < size; index += 1) {
      const row = document.createElement('tr');
      accessTable.appendChild(row);
      row.classList.add('pixel-row');
      cellCreate(size, row);
    }
  }rowCreate(5);
  
  const getPixelOnBoard = document.querySelectorAll('.pixel');
  

