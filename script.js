

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