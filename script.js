function addSelected (event){
  let x = event.target;
  let element = document.getElementsByClassName('color')

  for (let i = 0; i < element.length; i++){
    element[i].classList.remove('selected')
  }

  x.classList.add('selected')
} 

function applyColor(){
  let y = document.getElementsByClassName('color selected');
  let pixels = document.querySelector('#pixel-board');

  pixels.addEventListener('click', function(event){
    if (y.length > 0){
      let color = y[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    }
  });
};

function clear(){
  let b = document.getElementsByClassName("pixel")
  let button = document.querySelector("#clear-board")
  let c = "white"

  button.addEventListener("click", function(){
    for (let i = 0; i < b.length; i++){
      if (b[i].style.backgroundColor !== "white"){
        b[i].style.backgroundColor = "white"
      }
    }
  })
}

applyColor();
clear();