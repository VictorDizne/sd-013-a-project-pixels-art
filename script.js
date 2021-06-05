
window.onload = function () {

function black () {
document.getElementById('colorOne').classList.add('selected');
}
black();

let colorOne = document.getElementById('colorOne'); 
let colorTwo = document.getElementById('colorTwo'); 
let colorThree = document.getElementById('colorThree'); 
let colorFour = document.getElementById('colorFour'); 
let bigSquare = document.getElementById('pixel-board');
let colorSelected;
let clean = document.getElementById('clear-board');


colorOne.addEventListener('click', selected);
colorTwo.addEventListener('click', selected);
colorThree.addEventListener('click', selected);
colorFour.addEventListener('click', selected);


function selected(event) {
  let colorChoose = document.querySelector('.selected');
  colorChoose.classList.remove('selected');
  event.target.classList.add('selected');
  //colorSelected = event.target;
}

bigSquare.addEventListener('click', Pixels);

 function Pixels(event) {  
  let pixel = document.querySelector('.painted');
  if (pixel == null) {
    
      event.target.classList.add('painted');
  } else {
    pixel.classList.remove('painted');
    event.target.classList.add('painted');
    
  }
  paintSquare();
} 

function paintSquare () {
  let colorChoose = document.querySelector('.selected');
  let squareChoose = document.querySelector('.painted');
  squareChoose.className = '';
  if (colorChoose == colorOne) {
    squareChoose.classList.add('firstColor');
  } else if (colorChoose == colorTwo) {
    squareChoose.classList.add('secondColor');
  } else if (colorChoose == colorThree) {
    squareChoose.classList.add('thirdColor');
  } else if (colorChoose == colorFour) {
    squareChoose.classList.add('fourthColor');
  }
  squareChoose.classList.add('pixel');
}

clean.addEventListener('click', eraseButton);

function eraseButton () {
  let pixelList = document.querySelectorAll('.pixel');
  for (let j = 0; j < pixelList.length; j += 1) {
    pixelList[j].className = 'pixel';
  }; 
}


/* window.onload = function squaresEvent (){
  for (let i=0; i < squares.length; i += 1) {
  squares[i].addEventListener('click', changeColor);
  }
}

function changeColor(event) {
  // let square = document.querySelector('.printed');
  // squares.classList.remove('printed');
  event.target.classList.add('printed');
} */

}





