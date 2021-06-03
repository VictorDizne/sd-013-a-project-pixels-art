// CRIA A PALETA DE CORES INICIAL PARA ESCOLHA
function palette() {
  const paletteGrid = document.getElementById('color-palette');

  const color1 = document.createElement('div');
  color1.className = 'color black selected';
  paletteGrid.appendChild(color1);

  const color2 = document.createElement('div');
  color2.className = 'color yellow';
  paletteGrid.appendChild(color2);

  const color3 = document.createElement('div');
  color3.className = 'color blue';
  paletteGrid.appendChild(color3);

  const color4 = document.createElement('div');
  color4.className = 'color red';
  paletteGrid.appendChild(color4);
}
palette();

// ACÃO RELOAD PARA LIMPAR A TELA
function clear() {
  const buttonClear = document.querySelector('#clear-board');

  buttonClear.addEventListener('click', function () {
    location.reload();
  });
}
clear();

// CRIA O TAMANHO INICIAL DO GRID
const pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 5; index += 1) {
  const line = document.createElement('div');
  line.className = 'lines';
  pixelBoard.appendChild(line);

  for (let i = 0; i < 5; i += 1) {
    const blocks = document.createElement('div');
    blocks.className = 'pixel';
    blocks.style.backgroundColor = 'rgb(255, 255, 255)';
    line.appendChild(blocks);
  }
}

// AJUSTA O TAMANHO DO QUADRO APÓS INFORMAR O NÚMERO NO INPUT
let newSize = '';
function gradeSize() {
  const linesRemove = document.querySelectorAll('.lines');
  // FOR PARA REMOVER AS LINHAS
  for (let index = 0; index < linesRemove.length; index += 1) {
    pixelBoard.removeChild(linesRemove[index]);
  }
  // FOR PARA CRIAR NOVAMENTE AS LINHAS E OS BLOCOS
  for (let index = 0; index < newSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);

    for (let i = 0; i < newSize; i += 1) {
      const blocks = document.createElement('div');
      blocks.className = 'pixel';
      blocks.style.backgroundColor = 'rgb(255, 255, 255)';
      line.appendChild(blocks);
    }
  }
}

// BOTAO VQV PARA ADICIONAR UM NOVO TAMANHO AO GRID
function vqvSize() {
  const buttonVQV = document.getElementById('generate-board');
  // ESCUTA O EVENTO CLICK NO BOTÃO VQV E VERIFICA SE ESTÁ VAZIO
  buttonVQV.addEventListener('click', function () {
    newSize = document.getElementById('board-size').value;

    if ((newSize === '') || (newSize === 0)) {
      alert('Board inválido!');
    } else if ((newSize > 0) && (newSize < 5)) {
      newSize = 5;
      gradeSize();
    } else if (newSize > 50) {
      newSize = 50;
      gradeSize();
    } 
    else {
      gradeSize();
    }
  
  });
}
vqvSize();

// FAZ A SELEÇÃO DE COR NA PALETA DE CORES
let colorOk = document.querySelector('.selected');

function colorSelect() {
  const allColors = document.getElementsByClassName('color');

  for (let i = 0; i < allColors.length; i += 1) {
    allColors[i].addEventListener('click', (event) => {
      colorOk.className = colorOk.className.replace(' selected', '');
      event.target.className += ' selected';
      colorOk = document.querySelector('.selected');
    });
  }
}
colorSelect();

// let allBlocks = document.getElementById('pixel');

// function printBlocks() {

//   for (let i = 0; i < allBlocks.length; i += 1) {
//   allBlocks[i].addEventListener('click', function (event) {
//     let colorBlock = window.getComputedStyle(colorOk, null).getPropertyValue('background-color');
//     event.target.style.backgroundColor = colorBlock;
//   });
//   }
// }
// printBlocks();

// CRIA A POSSIBILIDADE DE PINTAR OS BLOCOS DO QUADRO DE ACORDO COM A COR SELECIONADA
function printBlocks() {
  const allBlocks = document.getElementById('pixel-board');

  allBlocks.addEventListener('click', (event) => {
    const colorBlock = window
      .getComputedStyle(colorOk, null)
      .getPropertyValue('background-color');
    event.target.style.backgroundColor = colorBlock;
    console.log(colorOk.backgroundColor);
  });
}
printBlocks();
