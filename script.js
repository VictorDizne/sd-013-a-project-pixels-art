
window.onload = selectedDefault

function selectedDefault(){
  let selected = document.querySelector('.black')
  selected.classList.add("selected")
}

function montarQuadro() {
  let pixelBoard = document.querySelector("#pixel-board")
  let quadroPixel = []

  for (let index = 0; index < 25; index++) {

    let quadrado = document.createElement('div')
    quadrado.setAttribute("class", "pixel")
    pixelBoard.appendChild(quadrado)


  }
}
montarQuadro()

let clickBlack = document.querySelector('.black');
clickBlack.addEventListener("click", receberClickBlack);

function receberClickBlack (evento) {
  console.log(evento.target);
  clickBlack.classList.add("selected");
  clickRed.classList.remove("selected")
  clickBlue.classList.remove("selected")
  clickGreen.classList.remove("selected")
}

let clickRed = document.querySelector('.red');
clickRed.addEventListener("click", receberClickRed);

function receberClickRed (evento) {
  console.log(evento.target);
  clickRed.classList.add("selected");
  clickBlack.classList.remove("selected")
  clickBlue.classList.remove("selected")
  clickGreen.classList.remove("selected")
}

let clickBlue = document.querySelector('.blue');
clickBlue.addEventListener("click", receberClickBlue);

function receberClickBlue (evento) {
  console.log(evento.target);
  clickBlue.classList.add("selected");
  clickRed.classList.remove("selected")
  clickBlack.classList.remove("selected")
  clickGreen.classList.remove("selected")
}

let clickGreen = document.querySelector('.green');
clickGreen.addEventListener("click", receberClickGreen);

function receberClickGreen (evento) {
  console.log(evento.target);
  clickGreen.classList.add("selected");
  clickRed.classList.remove("selected")
  clickBlue.classList.remove("selected")
  clickBlack.classList.remove("selected")
}

