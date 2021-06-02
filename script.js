function setPaletteColor(event) {
  let x = event.target;
  let myPalettes = document.getElementsByClassName('color');
  for (let index = 0; index < myPalettes.length; index += 1){
    myPalettes[index].classList.remove("selected");
  }
  x.classList.add("selected");    
}; 

function setPixelColor() {
  let selectedColor = document.getElementsByClassName('color selected');
  let pixels = document.querySelector('#pixel-board');
 
  pixels.addEventListener('click', function(event){
    if (selectedColor.length > 0) {
      let color = selectedColor[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    }  
  });
};

function buttomClear() {
  let pixels = document.querySelector('.pixel');
  let pixelsColor = pixels.style.backgroundColor;
  let buttom = document.getElementById('clear-board');

  buttom.addEventListener('click', function(event){
    if (pixelsColor !== "white") {
      pixelsColor = "white";      
    }  
  });
};

function colorPallete(){
  const colorPixel1 = document.getElementsByClassName('color')[0];
  colorPixel1.style.backgroundColor = 'black';
  const colorPixel2 = document.getElementsByClassName('color')[1];
  colorPixel2.style.backgroundColor = 'green';
  const colorPixel3 = document.getElementsByClassName('color')[2];
  colorPixel3.style.backgroundColor = 'blue';
  const colorPixel4 = document.getElementsByClassName('color')[3];
  colorPixel4.style.backgroundColor = 'yellow';
};

window.onload = function () {
  colorPallete()
  setPixelColor();
  buttomClear();
};
