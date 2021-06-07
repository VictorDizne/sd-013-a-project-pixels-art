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
  let pixels = document.getElementsByClassName('pixel');
  let buttom = document.querySelector('#clear-board');
  let color = 'white';

  buttom.addEventListener('click', function(){
    for (let index = 0; index < pixels.length; index += 1){
      if (pixels[index].style.backgroundColor !== color) {
        pixels[index].style.backgroundColor = color;
      }
    }
  });
};

function colorPallete(){
  const colorPixel1 = document.getElementsByClassName('color')[0];
  colorPixel1.style.backgroundColor = 'black';
  const colorPixel = document.getElementsByClassName('color');
  for (index = 1; index < colorPixel.length; index += 1){
    colorPixel[index].style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    if (colorPixel[1].backgroundColor === colorPixel[2].backgroundColor || colorPixel[1].backgroundColor === colorPixel[3].backgroundColor){
      colorPixel[index].style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    }
    else if (colorPixel[index].backgroundColor === '#ffffff'){
      colorPixel[index].style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    } 
  }
};

/* function getRandomColor() {
  let color;
  do {
    
    color = Math.floor(Math.random() * 16777215).toString(16);
  } while (color.length !== 6 || color === 'ffffff');

  return `#${color}`;
}  */
 
window.onload = function () {
  colorPallete()
  setPixelColor();
  buttomClear();
};
