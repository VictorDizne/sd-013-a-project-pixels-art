function setListenersOfColors(){
  let colors = document.querySelectorAll(".color");
  for(let color of colors){
    color.addEventListener("click", function (event){
      unselectAllColors();
      event.target.classList.add("selected");
    })
  }
}
function randomizedColors(){
  let result = [];

  for (let i = 0; i < 3; i += 1) {
    let randomRed = Math.floor(Math.random() * (255 - 0)) + 0;
    let randomGreen = Math.floor(Math.random() * (255 - 0)) + 0;
    let randomBlue = Math.floor(Math.random() * (255 - 0)) + 0;
    result.push(`rgb(${randomRed}, ${randomGreen}, ${randomBlue})`);
  }

  return result;
}
function setColors(){
  let colors = document.querySelectorAll(".color");
  // Regra em que a primeira deve ser preta.
  colors[0].style.backgroundColor = "black";
  // Regra em que o preto é o primeiro selected
  colors[0].classList.add("selected");
  let colorsUser = randomizedColors();
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = colorsUser[i-1];
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
    pixel.addEventListener("click", function (event) {
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

function ajustBoardSize(board, n){
  let boardWidth = (n * 40) + 50;
  let boardHeight = (n * 40) + 50; 
  board.style.width = `${boardWidth}px`;
  board.style.height = `${boardHeight}px`;
}
function createBoard(n){
  let board = document.querySelector("#pixel-board");
  ajustBoardSize(board, n);
  for (let row = 0; row < n; row += 1) {
    let divRow = document.createElement("div");
    divRow.className = "row";
    for(let column = 0; column < n; column += 1) {
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
function setButtonCleanBoard(){
  let button = document.querySelector("#clear-board");
  let board = document.querySelector("#pixel-board");
  button.addEventListener("click", function (event) {
    let rows = board.children;
    for(let row of rows){
      let pixels = row.children;
      for(let pixel of pixels){
        pixel.style.backgroundColor = "white";
    }
  }
  });
}
function setButtonCreateBoard(){
  let board = document.querySelector("#pixel-board");
  let button = document.querySelector
  ("#generate-board");
  let input = document.querySelector("#board-size");
  button.addEventListener("click", function (event) {
    let n = input.value;
    if (n === '') {
      alert('Board inválido!');
    } else if(n < 5){
      board.innerHTML = '';
      createBoard(5);
    } else if(n > 50){
      board.innerHTML = '';
      createBoard(50);
    } else {
      // Retira o tabuleiro antigo, artigo de referência https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript.
      board.innerHTML = '';
      createBoard(n);
    }
  })
}
window.onload = function (){
  setButtonCreateBoard();
  setButtonCleanBoard();
  setColors();
  createBoard(5);
}
