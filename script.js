// Requisito 7

function clickSelect(event){
  let colorSelect = document.querySelectorAll(".color");
  for(index = 0; index < colorSelect.length; index += 1){
    colorSelect[index].classList.remove("selected");
  }
  event.target.classList.add("selected");
}
// Requisito 8

function paintpixel(evento){

  let selectColor = document.querySelector('.selected').id;
    
  if(evento.target.className === 'pixel'){
    console.log(evento.target.id = selectColor);
  }
}
document.body.addEventListener('click', paintpixel);


// Requisito 9 - Arrumar


function limpar() {
const botao = document.querySelector('button');
const pixels = document.querySelectorAll(".pixel");

  for (let index = 0; index < pixels.length; index += 1) {
    botao.addEventListener('click', function() {
      let pinta = document.querySelector('#pixel-board');
      pinta.classList.add('pixels');
      pixels[index].style.backgroundColor = 'white';
  })
}
}
