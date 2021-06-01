
function createPalette(colors) {
    for (let i = 0; i < colors.length; i++) {
        let getColorPalette = document.getElementById('color-palette');
        let color = document.createElement('div');
        color.className = 'color';
        color.style.backgroundColor = colors[i];
        color.style.width = '50px';
        color.style.height = '50px';
        color.style.display = 'inline-block';
        color.style.border = '1px solid black'
        color.style.margin = "2px"
        getColorPalette.appendChild(color);
        getColorPalette.style.textAlign = 'center';
    }
}
createPalette(['black', 'blue', 'orange', 'gray']);

function createPixelSquares(number) {
    for (let i = 0; i < number; i++) {
        let getPixelBoard = document.querySelector('#pixel-board');
        let linhaPixel = document.createElement('div');
        linhaPixel.className = 'pixel';
        linhaPixel.style.width = '40px';
        linhaPixel.style.height = '40px';
        linhaPixel.style.display = 'inline-block';
        linhaPixel.style.border = '1px solid black'
        linhaPixel.style.marginBottom = "-5px";
        linhaPixel.style.padding = "0px";
        getPixelBoard.appendChild(linhaPixel);
        getPixelBoard.style.width = '210px';
        getPixelBoard.style.margin = "auto";
        getPixelBoard.style.height = "226px";


    }
    for (let j = 0; j < number[j]; j += 5) {
        linhaPixel[j].style.display = 'block';
    }
}
createPixelSquares(25);
function selected (){
    let getPixelBoard = document.querySelector('#pixel-board');
    let firstElement = getPixelBoard.firstChild;
    firstElement.className += ' selected';
}
selected();
//function setBlackColor() {
    // let pixel = document.querySelector(".pixel");
    // pixel.addEventListener('click', function (event) {
    //     event.target.style.backgroundColor = 'black';
    // })
//};

setBlackColor();