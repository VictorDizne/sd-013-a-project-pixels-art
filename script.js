let paleta = document.querySelector('#color-palette');
let quadro = document.querySelector('#pixel-board');
let botao = document.createElement('button');
let tools = document.querySelector('#tools');
botao.setAttribute('id', 'clear-board');
botao.innerText = 'Limpar';
tools.appendChild(botao);



for (let i = 0; i < 25; i += 1) {
    let board = document.querySelector('#pixel-board');
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    board.appendChild(pixel);
}

function selectColor(event) {
    let color = document.querySelectorAll('.color');
    for (let i = 0; i < color.length; i += 1) {
        color[i].className = 'color ' + 'c' + i;
        
    }
    event.target.className += ' selected';
}

function pinta(event) {
    let elem = document.querySelector('.selected');
    let cor = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    event.target.style.backgroundColor = cor;
}

function reset(event) {
    let pixel = document.querySelectorAll('.pixel');
    console.log(pixel);
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'white';
        
    }
}

paleta.addEventListener('click', selectColor);
quadro.addEventListener('click', pinta);
botao.addEventListener('click', reset);





