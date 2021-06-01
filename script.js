window.onload = function () {

  // Cria quadrado de pixels 5 x 5
  for (let line = 0 ; line < 5 ; line++) {
    let pixelLine = document.createElement('tr');
      for (let colum = 0 ; colum < 5 ; colum++) {
        let pixelData = document.createElement('td');
        pixelData.className = 'pixel';
        pixelLine.appendChild(pixelData);
      }  
    document.getElementById('pixel-board').appendChild(pixelLine);
  }

  // Inicia com cor preta selecionada
  let black = document.getElementById('black');
  let red = document.getElementById('red');
  let green = document.getElementById('green');
  let blue = document.getElementById('blue');

  black.className += ' selected';

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
    black.className += ' selected';
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
    green.className += ' selected';
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
    red.className += ' selected';
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
    blue.className += ' selected';
  }


 
  /* let color;
  black.onclick = function () {
    color = 'black';
  }
  red.onclick = function () {
    color = 'red';
  }
  green.onclick = function () {
    color = 'green';
  }
  blue.onclick = function () {
    color = 'blue';
  } */

  
  
    


  
}



