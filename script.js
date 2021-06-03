function selectedBlack() {
  const blackColor = document.querySelector('#colorBlack');
  blackColor.classList.add('selected');
}

window.onload = selectedBlack; /*Ao carregar a página, a paleta de cor preta estará com "selected".*/
  
//Requisito 7 resolvido com a ajuda de Gabriel Moraes.
//Função para remover a classe "selected".
function removeSelected() {
  const palette = document.querySelector('#color-palette'); 
  const colors = document.getElementsByClassName('color');

  function changeSelected (event) {
    for (let i = 0; i < colors.length; i += 1) { /*For para percorrer todo elemento "colors".*/
      if (colors[i].classList.contains('selected')) { /*Caso contenha a classe "selected", ela é removida.*/
        colors[i].classList.remove('selected');
      }
    }
      event.target.classList.add('selected'); /*Adiciona a classe "selected".*/
    }

    palette.addEventListener('click', changeSelected); /*Adiciona evento "ao clicar" realiza a função.*/
  }

  removeSelected(); /*Chama a função.*/

  /*Requisito 8 também foi resolvido com a ajuda do aluno Gabriel Moraes em uma call nas salas de estudo da truma no Zoom.*/
  const pixels = document.getElementsByClassName('pixel');
  /*Função para trocar a cor dos pixels ao clicar.*/
  function changePixelColor() {
    function clickChange(event) {
      let selected = document.querySelector('.selected');
      let color = window.getComputedStyle(selected).backgroundColor; /*"getComputedStyle" foi uma dica do Gabriel Moraes. https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp documentação nesse link.*/  

      event.target.style.backgroundColor = color;
    }
    for(let j = 0; j < pixels.length; j += 1) {
      pixels[j].addEventListener('click', clickChange);
    }
  }
  changePixelColor(); /*Chama a função.*/

/*Requisito 9
Botão para limpar o quadro de pixels*/
function clearBoard () {
  let button = document.getElementById('clear-board');
  
  function clickClear () {
    for (let i = 0; i < pixels.length; i += 1) { /*For para percorrer todos os pixels e trocar a cor para branco*/
      pixels[i].style.backgroundColor = 'white';
    }
  }
  button.addEventListener('click', clickClear); /*Adiciona evento "ao clicar" realiza a função de limpar o quadro de pixels*/
}
clearBoard(); /*Chama a função.*/