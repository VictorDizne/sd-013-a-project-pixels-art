let getBlack = document.getElementsByClassName('black')[0]; 
getBlack.style.backgroundColor = 'black'

let getBlue = document.getElementsByClassName('blue')[0];
getBlue.style.backgroundColor = 'blue'

let getGreen = document.getElementsByClassName('green')[0];
getGreen.style.backgroundColor = 'green'

let getRed = document.getElementsByClassName('red')[0];
getRed.style.backgroundColor = 'red' 


function setSelect () {
  const options = document.getElementsByClassName('color');
  for(option of options) {
    option.addEventListener('click', (event)=>{
      const select = document.querySelector('.selected');
      select.classList.toggle('selected')
      event.target.classList.toggle('selected');
    })
  }
}
setSelect();

function setColor() {
  const pixels = document.querySelectorAll('.pixel');
  for(pixel of pixels) {
    pixel.addEventListener('click', (event) => {
      const getColor = document.querySelector('.selected');
      event.target.style.backgroundColor = getColor.classList.item(1);
    })
  }
}
setColor();

function clearPixels () {
  const getButton = document.getElementById('clear-board');
  getButton.addEventListener('click', (event) => {
    const getPixel = document.querySelectorAll('.pixel');
    getPixel.forEach(element => {
      element.style.backgroundColor = 'white';
    });
  })
}
clearPixels();