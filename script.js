//7 - Criar evento click//

function selectedColor() {

const colorPalette = document.getElementById("color-palette");
const color = document.querySelectorAll(".color");

colorPalette.addEventListener('click', function(event) {

    for (let index = 0; index < color.length; index += 1) {  
        color[index].classList.remove("selected"); 
    }
        event.target.classList.add("selected");
    })
}



    selectedColor();


