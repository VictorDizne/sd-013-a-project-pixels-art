window.onload = function color() {
  const paletaCores = document.getElementsByClassName('color');
  const colorArray = ['black', 'red', 'blue', 'green'];

  for (let i = 0; i < 4; i += 1) {
    paletaCores[i].style.backgroundColor = colorArray[i];
  }
  function criaElemento(nome) {
    let elemento = document.createElement(nome);
    return elemento;
  }
  let pixels = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {

    let horizontal = criaElemento('tr');
    pixels.appendChild(horizontal);
    
    for (let j = 0; j < 5; j += 1) {
      let vertical = criaElemento('td');
      vertical.className = 'pixel';
      pixels.lastElementChild.appendChild(vertical);
    }
  }
};
