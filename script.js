function setColors(){
  let colors = document.querySelectorAll(".color");
  // Regra em que a primeira deve ser preta.
  colors[0].style.backgroundColor = "black";
  // Regra em que o preto é o primeiro selected
  colors[0].classList.add("selected");

  let colorsUser = ["black", "green", "red", "blue"];
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = colorsUser[i];
  }
}
function createPixel(){
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  return pixel;
}
function createBoard(){
  let board = document.querySelector("#pixel-board");
  for (let row = 0; row < 5; row += 1) {
    let divRow = document.createElement("div");
    divRow.className = "row";
    for(let column = 0; column < 5; column += 1) {
      let pixel = createPixel();
      divRow.appendChild(pixel);
    }
    board.appendChild(divRow);
  }
}
setColors();
createBoard();