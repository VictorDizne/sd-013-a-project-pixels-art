
  //document.getElementById('colorOne').classList.add('selected');


let colorOne = document.getElementById('colorOne'); 
let colorTwo = document.getElementById('colorTwo'); 
let colorThree = document.getElementById('colorThree'); 
let colorFour = document.getElementById('colorFour'); 
let squares = document.querySelectorAll('.pixel')
 
colorOne.addEventListener('click', selected);
colorTwo.addEventListener('click', selected);
colorThree.addEventListener('click', selected);
colorFour.addEventListener('click', selected);

for (let i=0; i < squares.length; i += 1) {
  squares[index].addEventListener('click', changeColor);
}

function selected(event) {
  let colorChoose = document.querySelector('.selected');
  colorChoose.classList.remove('selected');
  event.target.classList.add('selected');
}

function changeColor(event) {
  // let square = document.querySelector('.printed');
  // squares.classList.remove('printed');
  event.target.classList.add('printed');
}







