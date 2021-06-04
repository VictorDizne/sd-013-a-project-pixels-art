function createPixels(n=5) {
  for (let index = 0; index < n; index += 1) {
    const quadrado = document.createElement('div');
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(quadrado);
    quadrado.classList = 'linha';

    for (let index2 = 0; index2 < n; index2 += 1) {
      const quadradinho = document.createElement('div');
      quadradinho.classList = 'pixel';
      quadrado.appendChild(quadradinho);
    }
  }
}
createPixels();
/*quando estou no 0, eu coloco a primeira linha no for 2 eu rodo 5 vezes criando 5 quadrados
quando estou no 1, eu coloco a segunda linha do for, no 2 for  eu rodo 5 vezes criando 5 quadrados
quando estou no 2, eu coloco a terceira linha do for, no 3 for eu rodo 5 vezes cirando 5 quadrados.
quando estou no 3 , eu coloco a quarta linha do for, no 4 for eu rodo 5 vezes criando 5 quadrados.
quando estou no 4, eu colco a 5 linha do for, no 4 for eu rodo 5 vezes criando 5 quadrados.
aprendi no plantao que nao posso por a classe pixel no primeiro for porque o primeiro for seriam as linhas criadas.
requisito baseado no exercício da trybe bloco 4.3 exercício 1, lá tem 25 asteriscos também, fiz a troca pela div.
joguei como filha para ficar embaixo */


function corAleatoria() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${g},${b},${r})`;
  document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${g},${r})`;
  document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${r},${b},${g})`;
};

corAleatoria();

function addClassSelect(event){
   let corSelecionada= document.querySelector('.selected');
   corSelecionada.classList.remove('selected');
   event.target.classList.add('selected');
}

const cor1= document.querySelector('.um')
const cor2= document.querySelector('.dois')
const cor3= document.querySelector('.tres')
const cor4= document.querySelector('.quatro')

cor1.addEventListener('click', addClassSelect);
cor2.addEventListener('click', addClassSelect);
cor3.addEventListener('click', addClassSelect);
cor4.addEventListener('click', addClassSelect); 

/* addClassSelect foi baseado no bloco 5.3 do conteúdo parte 2, toda cor recebeu um evento, que ao clicar remove a classe de quem está e add a classe para o que é escolhido*/




function pintar(event){
  if(event.target.classList.contains('pixel')){
    let elementoSelecionado = document.querySelector('.selected');
    let corSelecionada = window.getComputedStyle(elementoSelecionado,null).getPropertyValue("background-color");
    event.target.style.backgroundColor = corSelecionada;
  }
  
}

const pixels = document.querySelector("#pixel-board")
pixels.addEventListener('click', pintar);

/* Com a ajuda do Luiz Furtado, ele me mostrou a dica que a Trybe passou que a função getComputedStyle pega todos os valores de propriedade e passa para o javascript.*/
/*Com a ajuda da Luiza Antiques parou de pintar a linha também, precisava criar um if que só pegasse dentro do board os filhos dele, por isso usou o contain"*/
function Limpar() {
  let buttonClean = document.querySelector('#clear-board');
  let pixels = document.getElementsByClassName('pixel');

  buttonClean.addEventListener('click', function() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = "white";
    }
  });
}
Limpar();

function DefineBoard(){
if(number<5){
return 5;
}
else if (number>50){
return 50;
}else {
  return number;
}
}

DefineBoard();

/* Ajuda da Júlia nesse exercício, precisa dos ifs para que sempre que for maior que 50 ou menor que 5 fique nesses números
*/
