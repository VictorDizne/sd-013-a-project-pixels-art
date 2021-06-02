window.onload = function color() {
  const paletaCores = document.getElementsByClassName('color');
  const colorArray = ['black', 'red', 'blue', 'green'];
  for (let i = 0; i < 4; i += 1) {
    paletaCores[i].style.backgroundColor = colorArray[i];
  }
  function criaElemento(nome) {
    const elemento = document.createElement(nome);
    return elemento;
  }
  const pixels = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const horizontal = criaElemento('tr');
    pixels.appendChild(horizontal);
    for (let j = 0; j < 5; j += 1) {
      const vertical = criaElemento('td');
      vertical.className = 'pixel';
      pixels.lastElementChild.appendChild(vertical);
    }
  }
};
