function req41() {
  let box1 = document.querySelector('#pixel-board');
 
  for (let i = 0; i < 5; i += 1) {
    let row = document.createElement('div');
    row.className = 'row';
    box1.appendChild(row);
    for (let i = 0; i < 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
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

// function req8() {
//   let select = document.querySelector('.selected');
//   let paintbox = document.querySelectorAll('.pixel');

//   target.addEventListener('click', (event) => {

    


//   })


// }

// function req9

