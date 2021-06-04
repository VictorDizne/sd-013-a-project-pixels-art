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

//8//

           
    function pixelColor() {

    const pixels = document.querySelectorAll('.pixel');
    
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', (event) => {
            const colorSelected = document.querySelector('.selected');
            const colorToPrint = getComputedStyle(colorSelected).getPropertyValue('background-color')
            event.target.style.backgroundColor = colorToPrint;
        });
        }
  }
        pixelColor();

//9//

  function cleanAll() {

    const button = document.querySelector("#clear-board")
    const pixels = document.querySelectorAll('.pixel');
    button.addEventListener('click', function() {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].backgroundColor = "white";
        };
    });
};
        cleanAll();