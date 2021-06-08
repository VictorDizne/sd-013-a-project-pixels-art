function changeClass() {
    const colorBlack = document.querySelector('.black');
    colorBlack.classList.add('selected');
}
    window.onload= changeClass;
    
function colors() {
    const palette = document.querySelector('#color-palette');
    const classColors = document.getElementsByClassName('color');
    palette.addEventListener('click', (event) => {
        for (let index = 0; index < classColors.length; index += 1) {
            classColors[index].classList.remove('selected');
        } 
        event.target.classList.add('selected');
    });
} 
colors();

function getColor() {
    const pixels = document.querySelector('#pixel-board');
    pixels.addEventListener('click', (event) => {
        if (event.target.classList.contains('pixel')) {
        const selected = document.querySelector('.selected');
        const style = window.getComputedStyle(selected, null).getPropertyValue('background-color');
        event.target.style.backgroundColor = style;
            }
        }); 
    }
getColor();