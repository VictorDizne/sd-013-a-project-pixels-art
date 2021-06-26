let btnBlack = document.querySelector(".black");
let btnBlue = document.querySelector(".blue");
let btnRed = document.querySelector(".red");
let btnYellow = document.querySelector(".yellow");
let qdrPixels = document.querySelectorAll(".pixel"); 
let btnClear = document.querySelector("#clear-board");
let input = document.querySelector("#board-size");
let btnVqv = document.querySelector("#generate-board");
let paletaCores = document.querySelector("color-palette");
let quadroPixel = document.querySelector('#pixel-board');

let coresAleatorias = document.querySelectorAll(".color");

for (cor of coresAleatorias) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  cor.style.backgroundColor = `rgb(${r},${g},${b})`;
  console.log(cor);

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

function pintarQuadro() {
  let qdrPixels = document.querySelectorAll(".pixel");
  for (pixel of qdrPixels) {
    pixel.addEventListener('click', (event) => {
      let selected = document.querySelector(".selected");
      let selectedColor = window.getComputedStyle(selected).backgroundColor;
      let evento = event.target;
      evento.style.backgroundColor = selectedColor;
    });
  };
};

pintarQuadro();

btnClear.addEventListener("click", function () {
  for (pixel of qdrPixels) {
    pixel.style.backgroundColor = "white";
  }
});


function removerQuadro() {
  while (quadroPixel.firstChild) {
    quadroPixel.removeChild(quadroPixel.firstChild);
  }
}

function criarQuadro(num) {
  const numDivs = num * num;

  for (index = 0; index < numDivs; index += 1) {
    console.log(index);
    const novaDiv = document.createElement('div');
    novaDiv.className = 'pixel';
    quadroPixel.appendChild(novaDiv);

    quadroPixel.style.gridTemplateColumns = "repeat(" + num + ", 42px)";
  }
}

btnVqv.addEventListener('click', function () {
  let valorInput = input.value;

  if (valorInput === "") {
      alert("Board inválido!");
  } else if (valorInput < 5) {
    valorInput = 5;
  } else if (valorInput > 50) {
    valorInput = 50;
  }

  removerQuadro();
  criarQuadro(valorInput);
  pintarQuadro();
});









