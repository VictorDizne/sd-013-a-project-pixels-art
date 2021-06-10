let blocks = document.getElementById('color-palette');
let corClick = "#000";
blocks.addEventListener('click', function changeSelector(evento){
  document.getElementsByClassName('selected')[0].classList.remove('selected')
  evento.target.classList.add('selected');
  let newColor = evento.target;
  if(newColor === document.getElementById('black')){
    corClick = "#000";
  }else if(newColor === document.getElementById('red')){
    corClick = "red";
  }else if(newColor === document.getElementById('blue')){
    corClick = "#0000ff";
  }else if(newColor === document.getElementById('green')){
    corClick = "green";
  }
})


let pixelBlocks = document.getElementById('pixel-board');
pixelBlocks.addEventListener('click', function pintandoPixel(bloco){
  bloco.target.style.backgroundColor = corClick;
})
