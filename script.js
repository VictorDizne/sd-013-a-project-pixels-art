window.onload = function(){
  let colorPixel1 = document.getElementsByClassName('color')[0];
  colorPixel1.style.backgroundColor = 'black';
  setPalleteColor();
  getRandomColor()
}

function getRandomColor()
 {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  let color2 = Math.floor(Math.random() * 16777215).toString(16);
  let color3 = Math.floor(Math.random() * 16777215).toString(16);
   
  let colorPixel2 = document.getElementsByClassName('color')[1];
colorPixel2.style.backgroundColor = '#' + color;
let colorPixel3 = document.getElementsByClassName('color')[2];
colorPixel3.style.backgroundColor = '#' + color2;
let colorPixel4 = document.getElementsByClassName('color')[3];
colorPixel4.style.backgroundColor = '#' + color3;
}

function setPalleteColor() {
    let selectColor = document.getElementsByClassName('color selected');
    let myPalletes = document.querySelector('.color');
     
    myPalletes.addEventListener('click', function(event) {
      if (selectColor.length === 0) {
        event.target.className = 'color selected';
      } else {
        event.target.className = 'color';
      }
    });
  }; 


 





