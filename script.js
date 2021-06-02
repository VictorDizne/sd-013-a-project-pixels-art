window.onload = function () {
  document.getElementById('colorOne').className = 'selected';
};

let colorOne = document.getElementById('colorOne'); 
let colorTwo = document.getElementById('colorTwo'); 
let colorThree = document.getElementById('colorThree'); 
let colorFour = document.getElementById('colorFour'); 

colorOne.addEventListener('click', selected);
colorTwo.addEventListener('click', selected);
colorThree.addEventListener('click', selected);
colorFour.addEventListener('click', selected);

function selected(event) {
  const colorElement = document.querySelector('.color');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
  input.value = 'color';
}


