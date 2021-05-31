// Constante de Elementos
const elementLiPaleta = document.querySelectorAll('.color')
const elementLiQuadro = document.querySelectorAll('.pixel')


// Eventos
//Marca a cor na paleta
for (let index = 0; index < elementLiPaleta.length; index += 1){
  elementLiPaleta[index].addEventListener('click', function(event) {
      switch (index) {
        case 0:
          elementLiPaleta[0].className = "color colorblack selected";
          elementLiPaleta[1].className = "color colorred";
          elementLiPaleta[2].className = "color colorblue";
          elementLiPaleta[3].className = "color coloryellow";
          break;
        case 1:
          elementLiPaleta[0].className = "color colorblack";
          elementLiPaleta[1].className = "color colorred selected";
          elementLiPaleta[2].className = "color colorblue";
          elementLiPaleta[3].className = "color coloryellow";
          break;
        case 2:
          elementLiPaleta[0].className = "color colorblack";
          elementLiPaleta[1].className = "color colorred";
          elementLiPaleta[2].className = "color colorblue selected";
          elementLiPaleta[3].className = "color coloryellow";
          break;
        case 3:
          elementLiPaleta[0].className = "color colorblack";
          elementLiPaleta[1].className = "color colorred";
          elementLiPaleta[2].className = "color colorblue";
          elementLiPaleta[3].className = "color coloryellow selected";
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
        console.log("É diferente")
        elementPixelSelected[index2].className = "pixel";
      }
    }
  })
}


//Altera cor do Elemento Li
function alteraCorDoPixel (){
  const elementSelectedPaleta = document.querySelector('.selected');
  const elementSelectedQuadro = document.querySelector('.pixel selected');
  elementSelectedQuadro.style.backgroundColor = elementSelectedPaleta.style.backgroundColor
}