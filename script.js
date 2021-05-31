// Constante de Elementos
const elementLiPaleta = document.querySelectorAll('.color')
const elementLiQuadro = document.querySelectorAll('.pixel')


// Eventos
//Marca a cor na paleta
for (let index = 0; index < elementLiPaleta.length; index += 1){
  elementLiPaleta[index].addEventListener('click', function(event) {
      switch (index) {
        case 0:
          elementLiPaleta[0].id = "selected";
          elementLiPaleta[1].id = "unset";
          elementLiPaleta[2].id = "unset";
          elementLiPaleta[3].id = "unset";
          break;
        case 1:
          elementLiPaleta[0].id = "unset";
          elementLiPaleta[1].id = "selected";
          elementLiPaleta[2].id = "unset";
          elementLiPaleta[3].id = "unset";
          break;
        case 2:
          elementLiPaleta[0].id = "unset";
          elementLiPaleta[1].id = "unset";
          elementLiPaleta[2].id = "selected";
          elementLiPaleta[3].id = "unset";
          break;
        case 3:
          elementLiPaleta[0].id = "unset";
          elementLiPaleta[1].id = "unset";
          elementLiPaleta[2].id = "unset";
          elementLiPaleta[3].id = "selected"
          break;
      }
    }
  )
}  

//Dou um nome id para cada quadrante
const elementLiNomes = document.getElementsByClassName('pixel')
for (let index = 0; index < elementLiNomes.length; index += 1) {
  elementLiNomes[index].id = index +1;
}

//Lê todos os pixels e adiciona o evento click nelas
for (let index = 0; index < elementLiQuadro.length; index += 1){
  elementLiQuadro[index].addEventListener('click', function(event) {
    //Muda a classe para selecionada quando houver o click
    elementLiQuadro[index].className = "pixel selectedPixel";
    //Busca/Puxa todas as classes selecionadas
    const elementPixelSelected = document.getElementsByClassName('pixel selectedPixel')
    //Lê todas os elementos selecionados
    for (index2 = 0; index2 < elementPixelSelected.length; index2 += 1){
      //Se o id que foi alterado para selected for igual ao que será modificando,
      //então, ele não faz nada, só altera quando não tiver id igual
      if (elementLiQuadro[index].id !== elementPixelSelected[index2].id) {
        elementPixelSelected[index2].className = "pixel";
      }
    }
    const elementSelectedPaleta = document.querySelector('#selected');
    const elementSelectedQuadro = document.getElementsByClassName('pixel selectedPixel');
    console.log(elementSelectedPaleta.className)
    //console.log(elementSelectedQuadro[0])
    let corPaleta = 'white'
    switch (elementSelectedPaleta.className){
      case 'color colorblack':
        corPaleta = 'black';
        break;
      case 'color colorred':
        corPaleta = 'red';
        break;
      case 'color colorblue':
        corPaleta = 'blue';
        break;
      case 'color coloryellow':
        corPaleta = 'yellow';
        break;
    }
    console.log("Cor: " + corPaleta)
    elementSelectedQuadro[0].style.backgroundColor = corPaleta
  })
}

//Cria o botão Clear - requisito 9
 const colorPalette = document.querySelector('#color-palette')
 const elementButtonClear = document.createElement('button')
 elementButtonClear.id = 'clear-board';
 elementButtonClear.style.height = '20px';
 elementButtonClear.style.width = '80px';
 elementButtonClear.style.marginLeft = '40px';
 elementButtonClear.innerText = 'Limpar';
 colorPalette.append(elementButtonClear)
 //Executa o clear ao clicar
 elementButtonClear.addEventListener('click', 'clearPixels')
 function clearPixels() {
   const buscaPixels = document.querySelectorAll('.pixel')
   for (let index = 0; index < buscaPixels.length; index += 1) {
     buscaPixels[index].style.backgroundColor = 'white';
   }
 }