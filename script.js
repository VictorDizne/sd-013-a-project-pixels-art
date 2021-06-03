/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
window.onload = () => {
  clickColorPalette();
  clearBoard();
  generateBoard();
};

/* exercicio 7 */
function clickColorPalette() {
  const palette = document.querySelector("#color-palette");
  const colors = document.querySelectorAll(".color");

  palette.addEventListener("click", (e) => {
    if (e.target.classList.contains("color")) {
      colors.forEach((_, index) => { // preciso acessar somente o index, mas o 1 param é obrigatório
        colors[index].classList.remove("selected");
      });

      e.target.classList.add("selected");
    }
  });
}

/* exercicio 8 */
const pixels = document.getElementsByClassName("pixel");
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener("click", paint);
}

function paint(event) {
  const e = event;
  const selected = document.querySelector(".selected");
  const color = getComputedStyle(selected).getPropertyValue("background-color");
  e.target.style.backgroundColor = color;
}

// exercicio 9
function clearBoard() {
  const clearBoard = document.querySelector("#clear-board");
  const pixels = document.querySelectorAll(".pixel");

  clearBoard.addEventListener("click", () => {
    pixels.forEach((item) => {
      const pixel = item;
      pixel.style.backgroundColor = "white";
    });
  });
}

function generateBoard() {
  const pixelArea = document.querySelector("#pixel-board");
}