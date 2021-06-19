const pixel1 = document.getElementsByClassName('pixel');
window.onload = function () {
let lines = document.getElementById("pixel-board");
  for (let count1 = 0; count1 < 5; count1++) {
    let lines1 = lines.appendChild(document.createElement("div"))
    lines1.className = "lines";
      for(let count2 = 0; count2 < 5; count2++) {
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

