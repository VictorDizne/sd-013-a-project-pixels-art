// Requisito 7

function clickSelect(event){
  let colorSelect = document.querySelectorAll(".color");
  for(index = 0; index < colorSelect.length; index += 1){
    colorSelect[index].classList.remove("selected");
  }
  event.target.classList.add("selected");
}
// Requisito 8

function paintpixel(colorpixel){
  let selectColor = document.querySelector('.selected');
  colorpixel.target.style.backgroundColor = selectColor;
}
let pixel = document.querySelectorAll('.pixel');
for(index = 0; index < pixel.length; index += 1){
  pixel[index].addEventListener('click', paintpixel);
}

// Requisito 9

let botao = document.querySelector('#clear-board');
botao.addEventListener('click', function limpa(){
  let pixels = document.querySelectorAll(".pixel");
  for(let i = 0; i < pixels.length; i += 0){
    pixels[i].style.backgroundColor = 'white';
  }
});




/*function limpaBoard(event){
  let pixels = document.querySelectorAll('.pixel');
  for(index = 0; index < pixels.length; index += 0){
    document.querySelectorAll(".pixel")[index].style.backgroundColor = "white";
  }
}
let botao = document.querySelector("#clear-board");
botao.addEventListener('click', limpaBoard);*/