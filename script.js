function createPixels() {
  let quadroInicio=5
  for (let index = 0; index < quadroInicio; index += 1) {
    const quadrado = document.createElement('div');
    const pixelBoard= document.querySelector('#pixel-board')
    pixelBoard.appendChild(quadrado);
    quadrado.className="pixel";
  
    for (let index2 = 1; index2 <= quadroInicio; index2 += 1) {
      const quadrado2 = document.createElement('div');
      quadrado2.className = "pixel";
      quadrado.appendChild(quadrado2);
    }
  }
};

createPixels();