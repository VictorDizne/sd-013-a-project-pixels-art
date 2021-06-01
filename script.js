window.onload = function selector() {
  const black = document.getElementsByClassName('color')[0];
  black.classList.add('selected');
}

const palletBlocs = document.getElementById('color-palette');

let inputColor = '#000';

palletBlocs.addEventListener('click', function selectedBlock(clickEvent) {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  const newSelected = clickEvent.target;
  newSelected.classList.add('selected');
  if (newSelected === document.getElementsByClassName('color')[0]){
    inputColor = '#000';
    }
  else if (newSelected === document.getElementsByClassName('color')[1]) {
    inputColor = '#0000ff';
    }
  else if (newSelected === document.getElementsByClassName('color')[2]) {
    inputColor = '#ff0000';
    }
  else if (newSelected === document.getElementsByClassName('color')[3]) {
    inputColor = '#ffff00';
  }
}

);


// document.getElementsByClassName('color')[0].style.background = 'black'
// document.getElementsByClassName('color')[1].style.background = 'blue'
// document.getElementsByClassName('color')[2].style.background = 'red'
// document.getElementsByClassName('color')[3].style.background = 'yellow'

const painting = document.getElementById('pixel-board');

painting.addEventListener('click' ,function paintingBlocks(secondClick) {
  const paintingBlock = secondClick.target;
  // let colorChoose = document.getElementsByClassName('color')[0];
  // console.log(colorChoose);
  paintingBlock.style.backgroundColor = inputColor;

});