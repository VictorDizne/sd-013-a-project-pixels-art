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