function createPixels() {
  let quadroInicio = 5;
  for (let index = 0; index < quadroInicio; index += 1) {
    const quadrado = document.createElement('div');
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(quadrado);
    quadrado.className = 'linha';

    for (let index2 = 0; index2 < quadroInicio; index2 += 1) {
      const quadradinho = document.createElement('div');
      quadradinho.className = 'pixel';
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




function addClassSelect(event){
   let corSelecionada= document.querySelector('.selected');
   corSelecionada.classList.remove('selected');
   event.target.classList.add('selected');
}

const corPreta= document.querySelector('.black')
const corVerde= document.querySelector('.green')
const corCinza= document.querySelector('.gray')
const corVermelha= document.querySelector('.red')

corPreta.addEventListener('click', addClassSelect);
corVerde.addEventListener('click', addClassSelect);
corCinza.addEventListener('click', addClassSelect);
corVermelha.addEventListener('click', addClassSelect); 

/* addClassSelect foi baseado no bloco 5.3 do conteúdo parte 2, toda cor recebeu um evento, que ao clicar remove a classe de quem está e add a classe para o que é escolhido*/




function pintar(event){
  let elementoSelecionado = document.querySelector('.selected');
  let corSelecionada = window.getComputedStyle(elementoSelecionado).getPropertyValue("background-color");
  event.target.style.backgroundColor = corSelecionada;
}

pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', pintar)

/* Com a ajuda do Luiz Furtado, ele me mostrou a dica que a Trybe passou que a função getComputedStyle pega todos os valores de propriedade e passa para o javascript.*/

function corAleatoria() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${g},${b},${r})`;
  document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${g},${r})`;
  document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${r},${b},${g})`;
};

corAleatoria();
