
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


function montarQuadro() {
  let pixelBoard = document.querySelector("#pixel-board")

  for (let index = 0; index < 25; index++) {

    let quadrado = document.createElement('div')
    quadrado.setAttribute("class", "pixel")
    pixelBoard.appendChild(quadrado)
  }
}

montarQuadro()

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
