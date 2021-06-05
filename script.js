function createPixels(number = 5) {
  for (let index = 0; index < number; index += 1) {
    const quadrado = document.createElement('div');
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(quadrado);
    quadrado.classList = 'linha';

    for (let index2 = 0; index2 < number; index2 += 1) {
      const quadradinho = document.createElement('div');
      quadradinho.classList = 'pixel';
      quadrado.appendChild(quadradinho);
    }
  }
}
createPixels();
/* quando estou no 0, eu coloco a primeira linha no for 2 eu rodo 5 vezes criando 5 quadrados
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

function addClassSelect(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

const cor1 = document.querySelector('.um');
const cor2 = document.querySelector('.dois');
const cor3 = document.querySelector('.tres');
const cor4 = document.querySelector('.quatro');

cor1.addEventListener('click', addClassSelect);
cor2.addEventListener('click', addClassSelect);
cor3.addEventListener('click', addClassSelect);
cor4.addEventListener('click', addClassSelect);

/* addClassSelect foi baseado no bloco 5.3 do conteúdo parte 2, toda cor recebeu um evento, que ao clicar remove a classe de quem está e add a classe para o que é escolhido */

function pintar(event) {
  if (event.target.classList.contains('pixel')) {
    const elementoSelecionado = document.querySelector('.selected');
    const corSelecionada = window.getComputedStyle(elementoSelecionado, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = corSelecionada;
  }
}

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', pintar);

/* Com a ajuda do Luiz Furtado, ele me mostrou a dica que a Trybe passou que a função getComputedStyle pega todos os valores de propriedade e passa para o javascript. */
/* Com a ajuda da Luiza Antiques parou de pintar a linha também, precisava criar um if que só pegasse dentro do board os filhos dele, por isso usou o contain" */
function Limpar() {
  const buttonClean = document.querySelector('#clear-board');
  const pixels = document.getElementsByClassName('pixel');

  buttonClean.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
Limpar();

// Ajuda da Júlia nesse exercício, precisa dos ifs para que sempre que for maior que 50 ou menor que 5 fique nesses números
function DefineBoard(number) {
  if (number < 5) {
    return 5;
  }
  if (number > 50) {
    return 50;
  }
  return number;
}

DefineBoard();

/* Nesse exercício a Julia me explicou passo a passo,
primeiro precisamos ver se o input ta vazio, se tiver vazio da board invalido, porque tem de por um
numero, depois zeramos para nao ficar nenhum quadro,
depois criou a variavel numero que tem o valor colocado no input
depois cria uma nova variavel numero que vai pegar o valor correto, porque se o usuário por Ex: 51
no input é para retornar 50, e se por 1 é para retonar 5
daí puxa a funcao que cria os pixels e dá esse nuemro para ela
depois zera o input
*/

function resizeBoard() {
  const input = document.querySelector('#board-size');
  const buttonSize = document.querySelector('#generate-board');

  buttonSize.addEventListener('click', () => {
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      pixelBoard.innerHTML = ''; // zera o quadro
      const number = input.value;
      const newNumber = DefineBoard(number); // chama a funcção anterior para que o número não passe de 50
      createPixels(newNumber);
      input.value = '';// zera o input
    }
  });
}

resizeBoard();
