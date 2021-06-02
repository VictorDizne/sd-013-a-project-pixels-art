window.onload = function () {
  const elementPixel = 5;
  const paleta = document.getElementsByClassName('color');
  const color1 = paleta[0];
  const color2 = paleta[1];
  const color3 = paleta[2];
  const color4 = paleta[3];

  let elementPixelBoard = document.querySelector('#pixel-board');
  let clickB = document.getElementById('clear-board');

  clickB.addEventListener('click', recebeClick);
  color1.addEventListener('click', changeSelected);
  color2.addEventListener('click', changeSelected);
  color3.addEventListener('click', changeSelected);
  color4.addEventListener('click', changeSelected);

  function recebeClick() {
    console.log('botão');
  }

  function changeSelected(evento) {
    console.log(evento.target);
    console.log(evento.type);
    const seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    evento.target.classList.add('selected');
    console.log(paleta);
  }

  function fillFrame(value) {
    // Varre a linha
    for (let line = 0; line < value; line += 1) {
      let boxLine = document.createElement("div");
      boxLine.className = 'linha';
      elementPixelBoard.appendChild(boxLine);

      // Varre a coluna
      for (let column = 0; column < value; column += 1) {
        let boxColumn = document.createElement("div");
        boxColumn.className = 'pixel';
        boxLine.appendChild(boxColumn);
      }
    }
  }
  fillFrame(elementPixel);
};
console.log(document.body)
