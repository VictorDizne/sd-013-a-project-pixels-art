// Requisito 7

const colorBlack = document.querySelector("#black");
colorBlack.classList.add("selected");
const colors = document.getElementsByClassName("color");

function colorSelection(event) {
    const colorSelected = document.querySelector(".selected");
    colorSelected.classList.remove("selected");
    event.target.classList.add("selected");
}

for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener("click", colorSelection);
}

// Requisito 8

const pixels = document.getElementsByClassName("pixel");

function paintPixel(event) {
    const colorSelected = document.querySelector(".selected");
    const colorToPaint = window.getComputedStyle(colorSelected, null).getPropertyValue("background-color");
    event.target.style.backgroundColor = colorToPaint;
}

for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener("click", paintPixel);
}

// Requisito 9

const button = document.getElementById("clear-board");

function clearPixels (){
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = "white";
    }
}
    button.addEventListener("click", clearPixels);
