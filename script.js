const pixel1 = document.getElementsByClassName('pixel');
const btnGenerate = document.getElementById('generate-board');
const inputNumber = document.getElementById('board-size');


function generateBoard(linesN) {
let lines = document.getElementById('pixel-board');

lines.innerHTML = '';

  for (let count1 = 0; count1 < linesN; count1++) {
    let lines1 = lines.appendChild(document.createElement("div"))
    lines1.className = "lines";
      for(let count2 = 0; count2 < linesN; count2++) {
        let lines2 = lines1.appendChild(document.createElement("div"));
        lines2.className = "pixel";
      }
  }
  for (let i = 0, len = pixel1.length; i < len; i++)
  {
    (function(index){
        pixel1[i].onclick = function(){
              pixel1[i].style.backgroundColor = 'black';
        }    
    })(i);

  }
}

function printColor() {
  const selected = document.querySelector('.selected');
  const color1 = getColor(selected);
  const pixel1 = document.getElementsByClassName('pixel');
  console.log(pixel1);
  for (let i = 0, len = pixel1.length; i < len; i++)
  {
    (function(index){
        pixel1[i].onclick = function(){
              pixel1[i].style.backgroundColor = color1;
        }    
    })(i);

  }
  }

function getColor(color) {
  const colorG = window.getComputedStyle(color).getPropertyValue('background-color');
  let qr = document.querySelectorAll('.selected');
  qr.forEach(e => e.classList.remove('selected'));
  color.classList.add('selected');
  return colorG;
  }

function printColor() {
  const selected = document.querySelector('.selected');
  const color1 = getColor(selected);
  console.log(pixel1);
    for (let i = 0, len = pixel1.length; i < len; i++)
    {
    (function(index){
        pixel1[i].onclick = function(){
              pixel1[i].style.backgroundColor = color1;
        }    
    })(i);

    }
}

function cleanBtn() {
  for (let i = 0, len = pixel1.length; i < len; i++)
  {
    pixel1[i].style.backgroundColor = 'white';
  }
}

function customBoard(input) {
  if (input.value > 50) {
    alert('O tamanho máximo é 50');
    generateBoard(50);
  }
  if (input.value < 5) {
    alert('O tamanho mínimo é 5');
    generateBoard(5);
  } if (input.value >= 5 && input.value <= 50) {
    generateBoard(input.value);
  }
}

function btnVqv() {
  if (inputNumber.value === '') {
    alert('Board inválido!');
  } else {
    customBoard(inputNumber);
  }
}

btnGenerate.addEventListener('click', btnVqv);
window.onload = generateBoard(5);