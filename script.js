// Pode ser usado tambem: document.addEventListener('DOMContentLoaded',()) =>
// função que acrescenta colunas a área de pintura.
window.onload = function tabela (linha, coluna) {
  let linhas = 5;
  let lines = document.querySelectorAll(".pixel");

  fillPixels(lines);
  function fillPixels(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
    }
  }

  function createPixels(pixelsDiv) {
    let divPixel = document.createElement("div");
    divPixel.className = pixelsDiv;
    return divPixel;
  }

  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= linhas; lineColumn += 1) {
      let pixel = createPixels("pixel");
      divLine.appendChild(pixel);
    }
  }
}
/*
let pixelBoard = document.querySelector(".containerDePixels");

pixelBoard.addEventListener('click', function (event){
  event.target.classList.toggle('black');
});
*/

function pintaPixelDePreto (event) {
  let divSelecionada = event.target;
  divSelecionada.classList.toggle('black');
}
let divs = document.querySelectorAll("*");

for (let indice = 0; indice < divs.length; indice += 1) {
  divs[indice].addEventListener('click', pintaPixelDePreto);
};

function pintaDePreto() {
    document.querySelector("#pixel-board").style.backgroundColor = "pink";
  }

