//Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function insertColor () {
  
  let colorDefault = document.getElementsByClassName('color');
  
  for (let index = 0; index < colorDefault.length; index += 1) {
      if (index === 0) {
          colorDefault[index].style.backgroundColor = "black";
      } else {
          let r = Math.random() * 255;
          let g = Math.random() * 255;
          let b = Math.random() * 255;
          colorDefault[index].style.backgroundColor = "rgb("+ r + "," + g + "," + b + ")";
      }
  }
}
insertColor();

function boxsPixel (n) {
  
  for (let index = 0; index < n*n; index += 1) {
    let boxPixel = document.createElement('div');
    boxPixel.className = 'pixel';
    document.getElementById("pixel-board").appendChild(boxPixel);
  }
}
boxsPixel(5);
