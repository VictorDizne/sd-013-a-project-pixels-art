/* function initialBoard() {
  let board = document.getElementById('pixel-board');
  for(let index = 0; index < 5; index += 1){
    let newUl = document.createElement('ul');
    let lines = board.appendChild(newUl)
    for(let indexColumn = 0; indexColumn < 5; index += 1) {
      let newLi = document.createElement('li')
      lines.appendChild(newLi);
    }
  }
} */
/* initialBoard() */
function whatIsTheColor() {
  const element = document.querySelector('.selected');
  const style = getComputedStyle(element);
  return style.backgroundColor;
}
let clickC = document.querySelectorAll('.color');
for (let indexColor = 0; indexColor < clickC.length; indexColor += 1) {
  clickC[indexColor].addEventListener('click',function() {
    let unselectColor = document.getElementsByClassName('selected');
    unselectColor[0].className = 'color';
    let colorSelected = document.getElementsByClassName('color')[indexColor];
    colorSelected.className = 'color selected';
  })
}
let pixel = document.querySelectorAll('.pixel')
for (let indexPaint = 0; indexPaint < pixel.length; indexPaint += 1) {
  pixel[indexPaint].addEventListener('click',function() {
    let string = whatIsTheColor();
    pixel[indexPaint].style.backgroundColor=string;
  })
}

let reset = document.querySelector('#clear-board')
reset.addEventListener('click',function() {
  for (let indexReset = 0; indexReset < pixel.length; indexReset += 1) {
  pixel[indexReset].style.backgroundColor = 'white'
  }
})

