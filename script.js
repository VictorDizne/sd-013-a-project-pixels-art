
let colorPalette = document.getElementById("color-palette");
let pixelSelected =  document.getElementById("pixel-board");
let clearButton = document.getElementById("clear-board");
let pixels =  document.querySelectorAll(".pixel");
let boardSize = document.getElementById("board-size");
let generateButton = document.getElementById("generate-board")
let boardSizeNum = parseInt(boardSize.value)

generateButton.addEventListener("click", generateBoardFunc())

colorPalette.addEventListener("click",selectColor);
pixelSelected.addEventListener("click", paintBoard)

function selectColor(originEvent) {
    let colorPaletteChild = document.getElementById("color-palette").childNodes
    for (let i = 1; i<colorPaletteChild.length; i++){
        colorPaletteChild[i].className = "color"
    }
    originEvent.target.className = "color selected"
}

function paintBoard (originEvent2) {
    let colorSelected = document.getElementsByClassName("selected")[0]
    let selected =  window.getComputedStyle(colorSelected).backgroundColor
    originEvent2.target.style.backgroundColor = selected
}

clearButton.addEventListener("click", clearBoard)

function clearBoard (){
    for(let i = 0 ; i<pixels.length;i++){
        pixels[i].style.backgroundColor = "white"
    }
}

function generateBoardFunc(){
    
    for(i=1;i<=boardSizeNum;i++){
        let lineCreated = document.createElement("div")
            lineCreated.id = "line"
            lineCreated.appendChild(pixelSelected)
        for(j=1;j<=boardSizeNum;j++){
            let pixelCreated =  document.createElement("div")
            pixelCreated.className = "pixel"
            lineCreated.appendChild(pixelCreated)
            }
    }
    }
