window.onload = function () {
  let elementPixel = 5;
  let elementPixelBoard = document.querySelector('#pixel-board');

  fillFrame(elementPixel);

  function fillFrame(value) {
    //Varre a linha
    for (let line = 0; line < value; line += 1) {
      let boxLine = document.createElement("div");
      boxLine.className = 'linha';
      elementPixelBoard.appendChild(boxLine);

      //Varre a coluna
      for (let column = 0; column < value; column += 1) {
        let boxColumn = document.createElement("div");
        boxColumn.className = 'pixel';
        boxLine.appendChild(boxColumn);
      }
    }
  }
  console.log(document.body)
}
