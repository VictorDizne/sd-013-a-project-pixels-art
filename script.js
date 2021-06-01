
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

// console.log(fncCreateHexColor(6)); 

function createColorPalette (QuantidadeDeCores) {  
  //Selecao e criacao de Elementos HTML      
  for (let index = 0; index < QuantidadeDeCores; index += 1) {                
    let containerColorPalette = document.querySelector('#color-palette');
    let divIndividualColor = document.createElement("div");        
    divIndividualColor.className = 'color';
    divIndividualColor.style.width = '40px';    
    divIndividualColor.style.height = '40px';    
    divIndividualColor.style.border = '1px solid black';    
    divIndividualColor.style.margin = '0px 5px 10px 5px';
    divIndividualColor.style.display = 'inline-block';

    if (index == 0) {      
      divIndividualColor.style.backgroundColor = 'black';      
      // containerColorPalette.appendChild(divIndividualColor);
    } else {      
      strBackgroundColor = fncCreateHexColor(6);
      divIndividualColor.style.backgroundColor = strBackgroundColor;
      // containerColorPalette.appendChild(divIndividualColor);
    }
    document.querySelector('#color-palette').appendChild(divIndividualColor);    
  }
}

createColorPalette(4);