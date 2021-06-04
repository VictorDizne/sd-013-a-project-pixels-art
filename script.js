function questionOne() {
  const h1 = document.createElement('h1');
  h1.innerText = 'Paleta de Cores';
  h1.setAttribute('id', 'title');
  h1.style.textAlign = 'center'
  document.body.appendChild(h1);
}
questionOne();

function questionTwoThreeSix() {
  let divPallet = document.createElement('div');
  divPallet.setAttribute('id', 'color-palette');
  let arrayCores = ['black', 'yellow', 'blue', 'red'];

  for(let i = 0; i < 4; i += 1) {
    let div = document.createElement('div');
    div.style.backgroundColor = arrayCores[i];
    if(div.style.backgroundColor == 'black') {
      div.classList.add('selected');
    }
    div.style.border = '1px solid black';
    div.style.display = 'inline-block'
    div.classList.add('color');
    divPallet.appendChild(div);
    document.body.appendChild(divPallet);
  }
}
questionTwoThreeSix();

function questionFour() {
  let divBoard = document.createElement('div');
  divBoard.setAttribute('id', 'pixel-board');

  for(let i = 1; i <= 25; i += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = 'white';
    pixel.style.border = '1px solid black';

      pixel.style.display = 'inline-block';

    divBoard.appendChild(pixel);
  }
  document.body.appendChild(divBoard);
}
questionFour();
