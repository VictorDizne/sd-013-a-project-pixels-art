/*  1- cria titulo */
let titulo = document.createElement('h1');
document.querySelector('body').appendChild(titulo);
titulo.innerText = 'Paleta de Cores';
titulo.id = 'title';

/* 2 - Adicione à página uma paleta de quatro cores distintas.*/

let coresPaleta = 3;


let criaSection = document.createElement('section');
document.querySelector('body').appendChild(criaSection);
criaSection.className = 'sectionClass';
criaSection.id = 'color-palette'

let div = document.createElement('div');
  div.style.display = 'inline-block';
  div.style.padding = '15px';
  div.className = 'color';
  div.style.margin = '2px';
  div.style.backgroundColor = 'black'
  criaSection.appendChild(div);

for( let index = 0; index < coresPaleta; index += 1){
  let div = document.createElement('div');
  div.style.display = 'inline-block';
  div.style.padding = '15px';
  div.className = 'color';
  div.style.margin = '2px';
  criaSection.appendChild(div);
  
  div.style.backgroundColor = corAleatoria();
}

function corAleatoria() {
  let caracteres = '0123456789ABCDEF';
  let cor = '#';
  
  for ( let index = 0; index < 6; index += 1 ) {
    cor += caracteres[Math.floor(Math.random() * 16)];
    if (cor == '#ffffff') {
      cor = '#ff5fff';
    }
  }
  return cor;
  /*  fonte: stackOverFlow */
}
