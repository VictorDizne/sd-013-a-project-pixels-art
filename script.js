function setListenersOfColors(){
  let colors = document.querySelectorAll(".color");
  for(let color of colors){
    color.addEventListener("click", function (event){
      unselectAllColors();
      event.target.classList.add("selected");
    })
  }
}
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
  setListenersOfColors();
}
function unselectAllColors(){
  let colors = document.querySelectorAll(".color");
  for(let color of colors){
    color.classList.remove("selected");
  }
}
function setListenersOfPixels(){
  let pixels = document.querySelectorAll(".pixel");
  for(let pixel of pixels){
    pixel.addEventListener("click", function (event){
      let colorToPaint = currentSelectedColor();
      pixel.style.backgroundColor = colorToPaint;
    })
  }
}
function createPixel(){
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  pixel.style.backgroundColor = "white";
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
  setListenersOfPixels();
}
function currentSelectedColor(){
  let colors = document.querySelectorAll(".color");
  for(let color of colors){
    if(color.classList.contains("selected")){
      return color.style.backgroundColor;
    }
  }
  alert("erro");
  return "white";
}
setColors();
createBoard();