/*  1- cria titulo */
let titulo = document.createElement('h1');
document.querySelector('body').appendChild(titulo);
titulo.innerText = 'Paleta de Cores';
titulo.id = 'title';

/* 2 - Adicione à página uma paleta de quatro cores distintas.*/

let criaSection = document.createElement('section');
document.querySelector('body').appendChild(criaSection);
criaSection.className = 'sectionClass';
criaSection.id = 'color-palette';

let div = document.createElement('div');
  div.style.display = 'inline-block';
  div.style.padding = '15px';
  div.className = 'color';
  div.style.margin = '2px';
  div.style.backgroundColor = 'black'
  criaSection.appendChild(div);

  let div2 = document.createElement('div');
  div2.style.display = 'inline-block';
  div2.style.padding = '15px';
  div2.className = 'color';
  div2.style.margin = '2px';
  div2.style.backgroundColor = 'green'
  criaSection.appendChild(div2);

  let div3 = document.createElement('div');
  div3.style.display = 'inline-block';
  div3.style.padding = '15px';
  div3.className = 'color';
  div3.style.margin = '2px';
  div3.style.backgroundColor = 'red'
  criaSection.appendChild(div3);
  
  let div4 = document.createElement('div');
  div4.style.display = 'inline-block';
  div4.style.padding = '15px';
  div4.className = 'color';
  div4.style.margin = '2px';
  div4.style.backgroundColor = 'pink'
  criaSection.appendChild(div4);
  let coresPaleta = 3;

/* for( let index = 0; index < coresPaleta; index += 1){
  let div = document.createElement('div');
  div.style.display = 'inline-block';
  div.style.padding = '15px';
  div.className = 'color';
  div.style.margin = '2px';
  criaSection.appendChild(div);
  
  div.style.backgroundColor = corAleatoria();
} */

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

/* aqui crio a outra section */
let allFunction = document.createElement('section');
document.querySelector('body').appendChild(allFunction);
allFunction.id = 'pixel-board';
 

function criaLinha1(){
    let numeroLinhas = 5;
    let criaOutraSection = document.createElement('section');
  document.querySelector('#pixel-board').appendChild(criaOutraSection);
  criaOutraSection.className = 'sectionClass1';
  
  
  for( let index = 0; index < numeroLinhas; index += 1){
    let div2 = document.createElement('div');
    div2.style.display = 'inline-block';
    div2.style.padding = '15px';
    div2.className = 'color';
    div2.style.margin = '0px';
    div2.style.backgroundColor = 'white';
    div2.classList.add('pixel');
    criaOutraSection.appendChild(div2);
    
  }

} 
criaLinha1();

function criaLinha2(){
  let section3  = document.createElement('section');
  document.querySelector('#pixel-board').appendChild(section3);
  section3.className = 'sectionClass1';
  let numeroLinhas = 5;

  for( let index = 0; index < numeroLinhas; index += 1){
    let divSec3 = document.createElement('div');
      divSec3.style.display = 'inline-block';
      divSec3.style.padding = '15px';
      divSec3.className = 'color';
      divSec3.style.backgroundColor = 'rgb(255, 255, 255)'
      divSec3.style.margin = '0px';
      divSec3.style.marginTop = '-5px';
      divSec3.classList.add('pixel');;
      section3.appendChild(divSec3);
  }
} 
criaLinha2();

function criaLinha3(){
  let section4  = document.createElement('section');
  document.querySelector('#pixel-board').appendChild(section4);
  section4.className = 'sectionClass1';
  let numeroLinhas = 5;

  for( let index = 0; index < numeroLinhas; index += 1){
    let divSec4 = document.createElement('div');
      divSec4.style.display = 'inline-block';
      divSec4.style.padding = '15px';
      divSec4.className = 'color';
      divSec4.style.backgroundColor = 'rgb(255, 255, 255)'
      divSec4.style.margin = '0px';
      divSec4.style.marginTop = '-4px';
      divSec4.classList.add('pixel');
      section4.appendChild(divSec4);
  }
} 
criaLinha3();

function criaLinha4(){
  let section5  = document.createElement('section');
  document.querySelector('#pixel-board').appendChild(section5);
  section5.className = 'sectionClass1';
  let numeroLinhas = 5;

  for( let index = 0; index < numeroLinhas; index += 1){
    let divSec5 = document.createElement('div');
      divSec5.style.display = 'inline-block';
      divSec5.style.padding = '15px';
      divSec5.className = 'color';
      divSec5.style.backgroundColor = 'rgb(255, 255, 255)'
      divSec5.style.margin = '0px';
      divSec5.style.marginTop = '-5px';
      divSec5.classList.add('pixel');
      section5.appendChild(divSec5);
  }
} 
criaLinha4();

function criaLinha5(){
  let section6  = document.createElement('section');
  document.querySelector('#pixel-board').appendChild(section6);
  section6.className = 'sectionClass1';
  let numeroLinhas = 5;

  for( let index = 0; index < numeroLinhas; index += 1){
    let divSec6 = document.createElement('div');
      divSec6.style.display = 'inline-block';
      divSec6.style.padding = '15px';
      divSec6.className = 'color';
      divSec6.style.backgroundColor = 'rgb(255, 255, 255)'
      divSec6.style.margin = '0px';
      divSec6.style.marginTop = '-4px';
      divSec6.classList.add('pixel');
      section6.appendChild(divSec6);
  }
} 
criaLinha5();