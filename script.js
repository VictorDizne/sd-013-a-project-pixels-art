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

//Altera cor do Elemento Li
const elementSelected = document.querySelector('.selected');

for (let index = 0; index < elementLiQuadro.length; index += 1){
  elementLiQuadro[index].addEventListener('click', function(event) {
    elementLiQuadro[index].style.backgroundColor = elementSelected.style.backgroundColor
  })
}

console.log(elementLiQuadro)
for (let index = 0; index < elementLiQuadro.length; index += 1){
  elementLiQuadro[index].addEventListener('click', function(event) {
    elementLiQuadro[index].className = "pixel selectedPixel";
    const elementPixelSelected = document.querySelectorAll('.selectedPixel')
    console.log(elementPixelSelected)
    //elementPixelSelected[0].className = "pixel"
  })
}
console.log("Text: " + elementPixelSelected)