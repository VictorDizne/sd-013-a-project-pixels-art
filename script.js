/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
window.onload = () => {
  clickColorPalette();
  // paintBox();
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

function getSelected() {
  const selected = document.getElementsByClassName("selected");
  return selected[0].style.backgroundColor;
}

console.log(getSelected());

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
