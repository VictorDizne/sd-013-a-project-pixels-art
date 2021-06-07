
window.onload = selectedDefault

let forColors = document.getElementsByClassName('color');

function selectedDefault() {
  for (let i = 0; i < forColors.length; i++) {
    if (i === 0) {
      forColors[i].classList.add("selected")
    }
  }
}

function paletteColor() {
  for (let i = 0; i < forColors.length; i++) {
    if (i === 0) {
      forColors[i].style.backgroundColor = "black";
    } else if (i === 1) {
      forColors[i].style.backgroundColor = "red";
    } else if (i === 2) {
      forColors[i].style.backgroundColor = "blue";
    } else if (i === 3) {
      forColors[i].style.backgroundColor = "Green";
    }
  }
}
paletteColor()

let pixelBoard = document.querySelector("#pixel-board")


function montarQuadro(param) {
  for (let index = 0; index < param * param; index++) {

    let pixels = document.createElement('div')
    pixels.setAttribute("class", "pixel")
    pixelBoard.appendChild(pixels)
    pixelBoard.style.display = "grid";
    pixelBoard.style.gridTemplateColumns = "repeat(" + param + ", 1fr)";
  }
}

montarQuadro(5)

function grid() {
  let numColumns = inputPixel.value
  pixelBoard.style.display = "grid";
  pixelBoard.style.gridTemplateColumns = "repeat(" + numColumns + ", 1fr)";
}

let inputPixel = document.querySelector("#board-size")
let btnVqv = document.querySelector("#generate-board")
btnVqv.addEventListener("click", createPixels)

function removeTag () {
  let pixelBoardRemove = document.getElementById("pixel-board");
  pixelBoardRemove.innerText= "";
  
}

function validInput (){
  if (inputPixel.value == 0){
    alert('Board inválido!')
  }
}


function qtdPixels() {
  if (inputPixel.value < 5) inputPixel.value = 5;
  if (inputPixel.value > 50) inputPixel.value = 50;
}

function createPixels() {
  validInput ()
  removeTag()
  qtdPixels()
  grid()
  for (let index = 0; index < inputPixel.value * inputPixel.value; index++) {

    let pixels = document.createElement('div')
    pixels.setAttribute("class", "pixel")
    pixelBoard.appendChild(pixels)
    montarQuadro(inputPixel)
    backgroundPixel()
  }
}

function classRemove() {
  for (let i = 0; i < forColors.length; i++) {
    if (forColors[i].classList.contains("selected")) {
      forColors[0].classList.remove("selected")
      forColors[1].classList.remove("selected")
      forColors[2].classList.remove("selected")
      forColors[3].classList.remove("selected")
    } else if (forColors[0].classList.contains("selected")) {
      forColors[1].classList.remove("selected")
      forColors[2].classList.remove("selected")
      forColors[3].classList.remove("selected")
    } else if (forColors[1].classList.contains("selected")) {
      forColors[0].classList.remove("selected")
      forColors[2].classList.remove("selected")
      forColors[3].classList.remove("selected")
    } else if (forColors[2].classList.contains("selected")) {
      forColors[0].classList.remove("selected")
      forColors[1].classList.remove("selected")
      forColors[3].classList.remove("selected")
    } else if (forColors[3].classList.contains("selected")) {
      forColors[0].classList.remove("selected")
      forColors[1].classList.remove("selected")
      forColors[2].classList.remove("selected")
    }
  }
}

for (let i = 0; i < forColors.length; i++) {
  forColors[i].addEventListener("click", classSelected);
}

function classSelected(param) {
  classRemove()
  param.target.classList.add("selected");
}


function selected() {
  for (let i = 0; i < forColors.length; i++) {
    if (forColors[i].classList.contains('selected'))
      return forColors[i].style.backgroundColor;
  }
}

function recebeEvento(evento) {
  let clicado = evento;
  clicado.target.style.backgroundColor = selected();
}

let pixels = document.getElementsByClassName('pixel');

function backgroundPixel() {
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].addEventListener("click", recebeEvento)
  }
}

backgroundPixel()

let btnLimpar = document.querySelector("#clear-board");
btnLimpar.addEventListener("click", clearBoard)

function clearBoard() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = "white";
  }
}