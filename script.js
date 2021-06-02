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

//botao de apagar
function clear() {
    const clearButton = document.getElementById('clear-board');
    clearButton.addEventListener('click', function(){
        location.reload()//--recarrega a pagina atual--//
    })
}
clear()
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

//dando cor aos blocos
function blocks() {
    const allBlocks = document.getElementById('pixel-board');

    allBlocks.addEventListener('click', (event) => {
    const corBlocos = window
        .getComputedStyle(cor, null) //--retorna um objeto contendo os valores de todas as propriedades CSS de um elemento--//
        .getPropertyValue('background-color');//--retorna o valor de uma propriedade--//
        event.target.style.backgroundColor = corBlocos;
        console.log(cor.backgroundColor);
    });
  }
  blocks();
