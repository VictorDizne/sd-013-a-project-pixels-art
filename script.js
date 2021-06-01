// Função que faz as dizem terem cores diferente.
// função retorna uma valor de 0 ao numero
function randomNumber(numero) {
  return Math.floor(Math.random() * numero);
}

function randomColorDiv() {
  const listCor = ['red', 'blue', 'yellow', 'green'];
  const listaCorDiv = document.getElementsByClassName('color');
  listaCorDiv[0].style.backgroundColor = 'black'; // Primeiro div Black

  for (let el of listaCorDiv) {
    if (el.style.backgroundColor !== 'black') {
      el.style.backgroundColor = listCor.splice(randomNumber(listCor.length), 1);
    }
  }
}

window.onload = () => {
  randomColorDiv();
};
