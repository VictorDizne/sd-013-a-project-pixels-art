function selectedBlack() {
  const blackColor = document.querySelector('#colorBlack');
  blackColor.classList.add('selected');
}

window.onload = selectedBlack;
  
//Requisito 7 resolvido com a ajuda de Gabriel Moraes
//Função para remover a classe "selected"
function removeSelected() {
  const palette = document.querySelector('#color-palette'); 
  const colors = document.getElementsByClassName('color');

  function changeSelected (event) {
    for (let i = 0; i < colors.length; i += 1) { //For para percorrer todo elemento "colors"
      if (colors[i].classList.contains('selected')) { //Caso contenha a classe "selected", ela é removida
        colors[i].classList.remove('selected');
      }
    }
      event.target.classList.add('selected'); //Adiciona a classe "selected"
    }

    palette.addEventListener('click', changeSelected); //Adiciona evento "ao clicar" realiza a função
  }

  removeSelected();

  


