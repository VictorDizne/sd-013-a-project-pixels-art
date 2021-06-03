//Color Palette
const blackButton = document.getElementById("black");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const pinkButton = document.getElementById("pink");
const grayButton = document.getElementById("gray");
const yellowButton = document.getElementById("yellow");

blackButton.style.backgroundColor = "black";
blackButton.className = "color selected";

redButton.style.backgroundColor = "red";
blueButton.style.backgroundColor = "blue";
greenButton.style.backgroundColor = "green";
pinkButton.style.backgroundColor = "pink";
grayButton.style.backgroundColor = "gray";
yellowButton.style.backgroundColor = "yellow";

function generateColorsButton() {
  const randomButton = document.querySelector("[data-button]");
  randomButton.addEventListener("click", generateColors);
}

function generateColors(){
  const colorsButton = document.getElementsByClassName("color");
  let r, g, b;
  
  for(let i = 1; i < colorsButton.length - 1; i += 1) {
    const buttonStyle = colorsButton[i].style;
    let currentColor = buttonStyle.backgroundColor;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    if(buttonStyle.backgroundColor === currentColor) {
      buttonStyle.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
}
generateColorsButton();

function colorSelector() {
  const colors = document.getElementsByClassName("color");

  for(let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener("click", () => {
      for(let j = 0; j < colors.length; j += 1) {
        colors[j].classList.remove("selected");
      }

      colors[i].classList.add("selected");
    })
  }
}
colorSelector();

//Pixel Board 
function setPixels(amount) {
  const pixelBoard = document.querySelector("#pixel-board");
   
  for(let i = 0; i < amount; i += 1) {
    const pixelColumn = document.createElement("div");
    pixelColumn.classList.add("pixel-column");

    for(let j = 0; j < amount; j += 1) {    
      const pixelBlock = document.createElement("div");
      pixelBlock.classList.add("pixel");
      
      pixelColumn.appendChild(pixelBlock);
    }
    pixelBoard.appendChild(pixelColumn);
  }
}
setPixels(5);

function setColor() {
  const getBlocks = document.getElementsByClassName("pixel");

  for(let i = 0; i < getBlocks.length; i += 1) {
    getBlocks[i].addEventListener("click", () => {
      const selectedColor = document.querySelector(".selected");

      getBlocks[i].style.backgroundColor = selectedColor.style.backgroundColor;
    });
  }
}
setColor();

function resetColors() {
  const resetButton = document.createElement("button");
  const resetDiv = document.querySelector("#reset-button");

  resetButton.id = "clear-board";
  resetButton.innerText = "Resetar";
  resetDiv.appendChild(resetButton);

  resetButton.addEventListener("click", () => {
    const getBlocks = document.getElementsByClassName("pixel");
    for(let i = 0; i < getBlocks.length; i += 1) {
      getBlocks[i].style.backgroundColor = "white";
    }
  });
}
resetColors();
