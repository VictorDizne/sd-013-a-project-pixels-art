// Requisito 7
window.onload = colorSelection;



function colorSelection() {
    let colorBlack = document.querySelector("#black");
    let colorSelected = colorBlack;
    colorSelected.classList.add("selected");
    const palette = document.querySelector("#color-palette");
    const colors = document.querySelectorAll(".color");
    palette.addEventListener("click", function (event) {
        if (event.target.classList.contains("color")) {
            colors.forEach((item, index ) => {
                colors[index].classList.remove("selected");
            })
            event.target.classList.add("selected");
        } 
    })
}

// Requisito 8
// function paintTable () {
// const colors = document.querySelectorAll(".color");
// const colorToPaint = window.getComputedStyle(colors).getPropertyValue("background-color");
// }