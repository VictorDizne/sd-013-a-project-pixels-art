let colorPalette = document.getElementById("color-palette");
let pixelSelected =  document.getElementById("pixel-board");
let clearButton = document.getElementById("clear-board");
let pixels =  document.querySelectorAll(".pixel");
let boardSize = document.getElementById("board-size");
let generateButton = document.getElementById("generate-board")

generateButton.addEventListener("click", () => {
    let size = parseInt(boardSize.value, 10)
    if (boardSize.value.length === 0) {
      window.alert('Board inválido!');
    } else {
        console.log (size)
        generateBoardFunc(size);
    }
}

)

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
function generateBoardFunc(boardSizeNum){
        if(boardSizeNum>50){
            boardSizeNum = 50
        }else if(boardSizeNum<5){
            boardSizeNum = 5
        }
            let lines = document.querySelectorAll(".line")
            for (let x = 0; x<lines.length; x++){
                lines[x].remove()
            }
            for(let y = 1;y<=boardSizeNum;y++){
                let lineCreated = document.createElement("div")
                    lineCreated.className = "line"
                    pixelSelected.appendChild(lineCreated)
                for(j=1;j<=boardSizeNum;j++){
                    let pixelCreated =  document.createElement("div")
                    pixelCreated.className = "pixel"
                    lineCreated.appendChild(pixelCreated)
                    }
            }
    }


