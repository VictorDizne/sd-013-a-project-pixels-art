//Substituição da div color-pallete
function paleta() { 
    const paletaGrade = document.getElementById('color-palette');
    
    const colorBlack = document.createElement('div');
    colorBlack.className = 'color black selected';
    paletaGrade.appendChild(colorBlack);
    
    const colorYellow = document.createElement('div')
    colorYellow.className = 'color yellow';
    paletaGrade.appendChild(colorYellow);
    
    const colorGreen = document.createElement('div');
    colorGreen.className = 'color green';
    paletaGrade.appendChild(colorGreen);
    
    const colorRed = document.createElement('div');
    colorRed.className = 'color red';
    paletaGrade.appendChild(colorRed);
}
paleta();


//seleciona cor da paleta
let cor = document.querySelector('.selected');
function colorSelect() {
    const totalcolor = document.getElementsByClassName('color');

    for (let i = 0; i < totalcolor.length; i += 1) {
    totalcolor[i].addEventListener('click', (event) => {
    cor.className = cor.className.replace(' selected', '');
    event.target.className += ' selected';
    cor = document.querySelector('.selected');
    });
  }
}
colorSelect();

//dando cor aos vlocos
function colorBlocks() {
    const allBlocks = document.getElementById('pixel-board');

    allBlocks.addEventListener('click', (event) => {
    const colorBlock = 
    window.getComputedStyle(cor, null)
    window.getPropertyValue('background-color');
    event.target.style.backgroundColor = colorBlock;
    console.log(cor.backgroundColor);
    });
}
colorBlocks();
