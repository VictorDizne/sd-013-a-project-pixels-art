function questionOne() {
  let h1 = document.createElement('h1');
  h1.innerText = 'Paleta de Cores';
  h1.setAttribute('id','title');
  h1.style.textAlign = 'center'
  document.body.appendChild(h1);
}
questionOne();

function questionTwo() {
  let divPallet = document.createElement('div');
  divPallet.setAttribute('id','color-palette');
  let arrayCores = ['green','yellow','blue','red'];

  for(let i = 0; i < 4; i += 1) {
    let div = document.createElement('div');
    div.style.backgroundColor = arrayCores[i];
    div.style.border = '1px solid black';
    div.style.display = 'inline-block'
    div.classList.add('color');
    divPallet.appendChild(div);
    document.body.appendChild(divPallet);
  }
}
questionTwo();
