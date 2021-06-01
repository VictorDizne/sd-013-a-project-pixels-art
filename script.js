
function fncCreateHexColor(nCharacters) {
  let strLettersAndNumbers = "ABCDEF0123456789"
  let arrLettersAndNumbers = strLettersAndNumbers.split('');
  let strHexaColor = "#";
  for (let index = 0; index < nCharacters; index += 1) {
    let i = parseInt(Math.random() * (arrLettersAndNumbers.length - 1));
    let char = arrLettersAndNumbers[i];
    strHexaColor += char;
  }
  return strHexaColor;
}

function createColorPalette (QuantidadeDeCores) {    
  for (let index = 0; index < QuantidadeDeCores; index += 1) {                    
    let divIndividualColor = document.createElement("div");        
    divIndividualColor.className = 'color';
    if (index == 0) {      
      divIndividualColor.style.backgroundColor = 'rgb(0,0,0)';      
      // divIndividualColor.className = 'selected';
    } else {      
      strBackgroundColor = fncCreateHexColor(6);
      divIndividualColor.style.backgroundColor = strBackgroundColor;
    }
    document.querySelector('#color-palette').appendChild(divIndividualColor);    
  }
}

createColorPalette(4);

function createTable(rows, columns) {  
  let divTable = document.querySelector('#pixel-board');  
  for (let index = 0; index < rows; index += 1) {
    let divRow = document.createElement('div');
    divRow.className = 'table-row';
    divTable.appendChild(divRow);
    for (let i = 0; i < columns; i += 1) {
      let divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divRow.appendChild(divPixel);
    }
  }
}

createTable(5,5);

window.addEventListener('load', function() {
  let firsColorSelected = document.getElementsByClassName('color')[0];
  firsColorSelected.className = 'color selected';
}) 

let listDivsColorsPalette = document.querySelector('#color-palette');

listDivsColorsPalette.addEventListener('click', function(elemento) {
  document.getElementsByClassName('color selected')[0].className = 'color';
  let strColorSelected = elemento.target.style.backgroundColor;
  elemento.target.className = 'color selected';
  sessionStorage.setItem('Color Selected', strColorSelected);
});

let divPixel = document.getElementsByClassName('pixel');

for (let elemento of divPixel) {
  elemento.addEventListener('click', function(elementoDiv) {
    let strColorToApply = sessionStorage.getItem('Color Selected');
    elementoDiv.target.style.backgroundColor = strColorToApply;
  })
}

btnClearBoard = document.createElement('button');
btnClearBoard.id = 'clear-board';
btnClearBoard.innerHTML = 'Limpar';
btnClearBoard.style.margin = '0px 0px 15px 0px'
document.getElementById('btn-place').appendChild(btnClearBoard);

btnClearBoard.addEventListener('click', function() {
  let divPixel = document.getElementsByClassName('pixel');
  for (let elemento of divPixel) {      
    elemento.style.backgroundColor = 'rgb(255,255,255)';
  }
})
