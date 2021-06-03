function correction(){
  let corrigir = document.querySelectorAll('.color');
  corrigir[0].style.backgroundColor = 'black';
  corrigir[1].style.backgroundColor = 'blue';
  corrigir[2].style.backgroundColor = 'red';
  corrigir[3].style.backgroundColor = 'green';
}

correction();

function req41() {
  let box1 = document.querySelector('#pixel-board');
 
  for (let i = 0; i < 5; i += 1) {
    let row = document.createElement('div');
    row.className = 'row';
    box1.appendChild(row);
    for (let i = 0; i < 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixels.style.backgroundColor = 'white';
      row.appendChild(pixels);
  
   }
  }
}
req41();

function req4() {

  let makebox = document.querySelector('#generate-board');

  
  makebox.addEventListener('click', function () {

  let box1 = document.querySelector('#pixel-board');
  let areaofbox = document.querySelector('#board-size').value;
  let number = areaofbox;
  
  for (let i = 0; i < number; i += 1) {
  let row = document.createElement('div');
  row.className = 'row';
  box1.appendChild(row);
    for (let i = 0; i < number; i += 1) {
    let pixels = document.createElement('div');
    pixels.className = 'pixel';
    row.appendChild(pixels);
  
   }
  }
 })
}
req4();

window.onload = function(){
  let blackcolor = document.querySelector('#black');
  blackcolor.classList.add('selected'); 
};

function req7() {
  let seleciona = document.querySelector('#color-palette');
  let selected = document.querySelector('.color');


  seleciona.addEventListener('click', (event) => {
    if (selected.classList.contains('selected') == false && event.target.classList.contains('color-palette') == false) {
      event.target.classList.add('selected');
      selected = document.querySelector('.selected');
    } else {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
      selected = document.querySelector('.selected');
    }

  })
}
req7();

function req8() {

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel') == true) {

    event.target.style.backgroundColor =  document.querySelector('.selected').style.backgroundColor;
      
  }
}, false);
}

req8();

// function req9(){
//   let clearall = document.querySelector('#clear-board')
 
//   document.addEventListener('click', (event) => {
//     if(event.target.classList.contains('limpar') == true)
//     for (let i = 0; i < 25; i +=1) {
//     let clearpixels = document.querySelectorAll('.pixel');

//     clearpixels.style.backgroundColor = 'white';
//     }
    
//   }, false);
// }

// req9();

