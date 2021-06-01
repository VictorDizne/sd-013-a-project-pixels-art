
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
createPalette(['green', 'blue', 'orange', 'gray'])

