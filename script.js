window.onload = function () {
  let colorPixel1 = document.getElementsByClassName('color')[0];
  colorPixel1.style.backgroundColor = 'black';
  let colorPixel2 = document.getElementsByClassName('color')[1];
  colorPixel2.style.backgroundColor = 'green';
  let colorPixel3 = document.getElementsByClassName('color')[2];
  colorPixel3.style.backgroundColor = 'blue';
  let colorPixel4 = document.getElementsByClassName('color')[3];
  colorPixel4.style.backgroundColor = 'yellow';
}

function setPaletteColor (event) {
   let x = event.target;
   let myPalettes = document.getElementsByClassName('color');
   for (let index = 0; index < myPalettes.length; index += 1){
     myPalettes[index].classList.remove("selected");
   }
   x.classList.add("selected");    
  }; 


 





