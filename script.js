window.onload = function(){
  selectedBlack();
  initialPixelColor('white');
 
}

function selectedBlack(){
  let initialSelected = document.querySelector('#color-black');
  initialSelected.classList.add('selected');
}

function initialPixelColor(color){
  let initialPixel = document.getElementsByClassName('pixel');
  for(i=0; i < initialPixel.length; i+=1){
  initialPixel[i].style.background = color;
  }
}