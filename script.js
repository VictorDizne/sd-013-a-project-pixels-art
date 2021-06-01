window.onload = function () {

let colorOne = document.getElementById('colorOne'); 
let colorTwo = document.getElementById('colorTwo'); 
let colorThree = document.getElementById('colorThree'); 
let colorFour = document.getElementById('colorFour'); 

document.querySelector('color').className = 'selected';

colorOne.addEventListener('click', selected);
colorTwo.addEventListener('click', selected);
colorThree.addEventListener('click', selected);
colorFour.addEventListener('click', selected);

  
  function selected(evento) {
    
    if (evento.target == colorOne) {
      colorOne.className = "selected";
      colorTwo.className = "color";
      colorThree.className = "color";
      colorFour.className = "color";
    } else if (evento.target == colorTwo) {
      colorOne.className = "color";
      colorTwo.className = "selected";
      colorThree.className = "color";
      colorFour.className = "color";
    } else if (evento.target == colorThree) {
      colorOne.className = "color";
      colorTwo.className = "color";
      colorThree.className = "selected";
      colorFour.className = "color";
    } else {
      colorOne.className = "color";
      colorTwo.className = "color";
      colorThree.className = "color";
      colorFour.className = "selected";
    }
  }
}