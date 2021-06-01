let paleta = document.querySelector('#color-palette');
let quadro = document.querySelector('#pixel-board');
let botao = document.createElement('button');
let tools = document.querySelector('#tools');

botao.setAttribute('id', 'clear-board');
botao.innerText = 'Limpar';
tools.appendChild(botao);
input = document.createElement('input');
input.setAttribute('id', 'board-size');
input.setAttribute('type', 'number');
input.setAttribute('min', '1');
input.innerText = 'Gerar quadro';
tools.appendChild(input);
defineboard = document.createElement('button');
defineboard.setAttribute('id', 'generate-board');
defineboard.innerText = 'VQV';
tools.appendChild(defineboard);
let size = 0;
let aux = 0;



for (let i = 0; i < 25; i += 1) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    quadro.appendChild(pixel);
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

function createBoard(event) {
    if (size == 0) {
        alert('Board inválido!')
    }
    else if (size >= 5 && size <= 50) {
        let pixel = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixel.length; i += 1) {
            quadro.removeChild(pixel[i])
        }
        for (let i = 0; i < aux; i += 1) {
            let newPixel = document.createElement('div');
            newPixel.setAttribute('class', 'pixel');
            quadro.appendChild(newPixel);
        }
        quadro.style.width = ((40 * size) + 20) + 'px';
        console.log(quadro.style.width);
    }

}

function boardSize(event) {
    if (event.target.value >= 5 && event.target.value <= 50) {
        size = event.target.value;
        aux = size * size;
    }
}

paleta.addEventListener('click', selectColor);
quadro.addEventListener('click', pinta);
botao.addEventListener('click', reset);
input.addEventListener('keyup', boardSize);
defineboard.addEventListener('click', createBoard);





