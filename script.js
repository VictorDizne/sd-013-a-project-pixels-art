// pode ser usado tambem: document.addEventListener('DOMContentLoaded',()) =>
window.onload = function () {
  let colum = 5;
  let numberOfLines = colum;
  let controlLeft = numberOfLines;
  let controlRight = numberOfLines;
  let lines = document.querySelectorAll(".line");

  fillPixels(lines);

  function fillPixels(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
      controlRight += 1;
      controlLeft -= 1;
    }
  }

  function createBox(classN) {
    let box = document.createElement("div");
    box.className = classN;
    return box;
  }

  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= colum; lineColumn += 1) {
        let box = createBox("box");
        divLine.appendChild(box);

    }
  }

}
