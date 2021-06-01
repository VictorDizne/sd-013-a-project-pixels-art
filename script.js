let colors = ['red', 'blue', 'green', 'yellow'];

for ( i = 0; i < 4; i += 1){
  let div = document.createElement('div');
  div.className = 'color';
  let colorPallete = document.querySelector('#color-palette');
  colorPallete.appendChild(div);
};

function setColor(){
  let colorsAvaiable = document.querySelectorAll('#color-palette div');
  for (i = 0; i < colorsAvaiable.length; i += 1){
    colorsAvaiable[i].style.backgroundColor = colors[i];
  }
}
setColor();