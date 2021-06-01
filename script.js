function addEventosClick() {
  let elementosColor = document.getElementsByClassName("color");
  for(let elemento of elementosColor) {
    elemento.addEventListener("click", clickColor)
  }
  let elementosPixel = document.getElementsByClassName("pixel");
  for(let elemento of elementosPixel) {
    elemento.addEventListener("click", clickPixel)
  }
  document.getElementById("clear-board").addEventListener("click", clickClear);
}

function clickColor(event) {
  let elemento = document.querySelector(".selected");
  elemento.classList.remove("selected");
  event.target.classList.add("selected");
}

function clickPixel(event) {
  let id = document.querySelector(".selected").id;
  event.target.id = id;
}

function clickClear() {
  let elementos = document.getElementsByClassName("pixel");
  for(let elemento of elementos) {
    elemento.id = "";
  }
}

addEventosClick();