const board = document.querySelector("#pixel-board");

function createPixels() {

  //cria uma div e à atribui à variável "thePixel".

  const thePixel = document.createElement("div");

  //add a classe "pixel" à variável "thePixel".

  thePixel.className = "pixel"; 

  //atribui a cor "white" à variável "thePixel".

    thePixel.style.backgroundColor = "white";

  //anexa o conteúdo da variável "thePixel" como filho do conteúdo da variável "board".

  board.appendChild(thePixel);

}




