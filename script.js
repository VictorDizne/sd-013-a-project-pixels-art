let btnBlack = document.querySelector(".black");
let btnBlue = document.querySelector(".blue");
let btnRed = document.querySelector(".red");
let btnYellow = document.querySelector(".yellow");
let qdrPixels = document.querySelectorAll(".pixel"); 
let btnClear = document.querySelector("#clear-board");

function limparSelecao() {
  document.querySelector(".selected").classList.remove("selected");
};

function selecionar(elemento) {
  elemento.classList.add("selected");
};

btnBlack.addEventListener('click', function () {
  limparSelecao();

  selecionar(this);
});

btnBlue.addEventListener('click', function () {
  limparSelecao();

  selecionar(this);
});

btnRed.addEventListener('click', function () {
  limparSelecao();

  selecionar(this);
});

btnYellow.addEventListener('click', function () {
  limparSelecao();

  selecionar(this);
});

for (pixel of qdrPixels) {
  pixel.addEventListener('click', function() {
    let selected = document.querySelector(".selected");
    let selectedColor = selected.classList.item(1);
    this.classList.remove("black", "red", "blue", "yellow");
    this.classList.add(selectedColor);
  });
};

btnClear.addEventListener("click", function () {
  for (pixel of qdrPixels) {
    pixel.classList.remove("black", "red", "yellow", "blue");
  }
});











