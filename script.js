// Cria quadrado de pixels 5 x 5
let table = document.createElement('table');
table.id = 'table';
document.getElementById('pixel-board').appendChild(table);
for (let line = 0 ; line < 5 ; line++) {
  let pixelLine = document.createElement('tr');
    for (let colum = 0 ; colum < 5 ; colum++) {
      let pixelData = document.createElement('td');
      pixelData.className = 'pixel';
      pixelLine.appendChild(pixelData);
    }  
  document.getElementById('table').appendChild(pixelLine);
}

// Inicia com cor preta selecionada
let black = document.getElementById('black');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

black.className += ' selected';
//document.querySelector('.selected').style.backgroundColor = 'black';


// Recupera a cor do elemento clicado
black.onclick = function() {
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  black.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'black';
}

green.onclick = function() {
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  green.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'green';
}

red.onclick = function() {
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  red.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'red';
}

blue.onclick = function() {
  if (black.className === 'color selected') {
    black.classList.remove('selected');
  }
  if (red.className === 'color selected') {
    red.classList.remove('selected');
  }
  if (green.className === 'color selected') {
    green.classList.remove('selected');
  }
  if (blue.className === 'color selected') {
    blue.classList.remove('selected');
  }
  blue.className += ' selected';
  document.querySelector('.selected').style.backgroundColor = 'blue';
}

let pixel = document.getElementsByClassName('pixel');
pixel.onclick = function () {
  console.log('ok');
}




  




