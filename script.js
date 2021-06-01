let currentSelectedColor = 'rgb(0, 0, 0)';

function clicouCor(evento) {
  const paletteElement = evento.target;
  const paletteElementBackgroundColor = window.getComputedStyle(paletteElement).backgroundColor;
  currentSelectedColor = paletteElementBackgroundColor
}

function onLoad() {
let elementos= document.querySelectorAll('.color')
console.log(elementos);
  for (let elemento of elementos){
    elemento.onclick = clicouCor;
  }

}
onLoad();