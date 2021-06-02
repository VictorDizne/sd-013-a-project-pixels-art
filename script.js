/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
window.onload = () => {
  clickColorPalette();
};

function clickColorPalette() {
  const colors = document.querySelectorAll(".color");
  const palette = document.querySelector("#color-palette");

  palette.addEventListener("click", (e) => {
    if (e.target.classList.contains("color")) {
      colors.forEach((_, index) => { // preciso acessar somente o index, mas o 1 param é obrigatório
        colors[index].classList.remove("selected");
      });

      e.target.classList.add("selected");
    }
  });
}
