function initialBoard(number) {
  let board = document.getElementById('pixel-board');
  for(let index = 0; index < number; index += 1){
    let newUl = document.createElement('ul');
    let lines = board.appendChild(newUl)
    lines.id = "pixel-table";
    let pixel = document.querySelectorAll('#pixel-table');
    for(let indexColumn = 0; indexColumn < number; indexColumn += 1) {
      let newLi = document.createElement('li');
      let pixels = pixel[index].appendChild(newLi);
      pixels.className = 'pixel'
    }
  }
}
initialBoard(5);
function removeChild(number) {
  let erase = document.querySelectorAll('#pixel-table')
  let parent = document.querySelector('#pixel-board')
  for(let index = 0; index < number; index += 1) {
    parent.removeChild(erase[index]);
  }
}
let sizeInput = document.querySelector('#board-size')
let btnSize = document.querySelector('#generate-board')
function newBoard() {
  btnSize.addEventListener('click', function() {
    /* let erase = document.querySelectorAll('#pixel-table')
    let parent = document.querySelector('#pixel-board')
    let number = 5;
    for(let index = 0; index < number; index += 1){
      parent.removeChild(erase[index]);
    } */
    let pixelSize = 5;
    removeChild(pixelSize);
    pixelSize = parseInt(sizeInput.value);
    if(sizeInput.value === '') {
      alert('Board inválido!');
    }
    else if(pixelSize < 5){
      pixelSize = 5;
      initialBoard(pixelSize);
    }
    else if(pixelSize > 50){
      pixelSize = 50;
      initialBoard(pixelSize);
    } else {
      initialBoard(pixelSize);
    }
  })
}
newBoard()
function whatIsTheColor() {
  const element = document.querySelector('.selected');
  const style = getComputedStyle(element);
  return style.backgroundColor;
}
function selectColor() {
  let clickC = document.querySelectorAll('.color');
  for (let indexColor = 0; indexColor < clickC.length; indexColor += 1) {
    clickC[indexColor].addEventListener('click',function() {
      let unselectColor = document.getElementsByClassName('selected');
      unselectColor[0].className = 'color';
      let colorSelected = document.getElementsByClassName('color')[indexColor];
      colorSelected.className = 'color selected';
    })
  }
}
selectColor()

function paint(){
let pixel = document.querySelectorAll('.pixel')
for (let indexPaint = 0; indexPaint < pixel.length; indexPaint += 1) {
  pixel[indexPaint].addEventListener('click',function() {
    let string = whatIsTheColor();
    pixel[indexPaint].style.backgroundColor=string;
  })
}
}
paint()

function resetColor(){

  let pixel = document.querySelectorAll('.pixel')
  let reset = document.querySelector('#clear-board')
  reset.addEventListener('click',function() {
    for (let indexReset = 0; indexReset < pixel.length; indexReset += 1) {
      pixel[indexReset].style.backgroundColor = 'white'
  }
})
}
resetColor()
