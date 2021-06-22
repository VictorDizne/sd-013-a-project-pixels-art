let btnBlack = document.querySelector(".black");
let btnBlue = document.querySelector(".blue");
let btnRed = document.querySelector(".red");
let btnYellow = document.querySelector(".yellow");
let qdrPixels = document.querySelectorAll(".pixel"); 
let btnClear = document.querySelector("#clear-board");
let input = document.querySelector("#board-size");
let btnVqv = document.querySelector("#generate-board");
let paletaCores = document.querySelector("color-palette");



let coresAleatorias = document.querySelectorAll(".color");

for (cor of coresAleatorias) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

   console.log(cor) 
   cor.style.backgroundColor = `rgb(${r},${g},${b})`;

}

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
    let selectedColor = window.getComputedStyle(selected).backgroundColor;
    this.style.backgroundColor = selectedColor;
  });
};

btnClear.addEventListener("click", function () {
  for (pixel of qdrPixels) {
    pixel.style.backgroundColor = "white";
  }
});


btnVqv.addEventListener('click', function () {
  if (input.innerText === "") {
    alert("Board inválido!")
  }
})












