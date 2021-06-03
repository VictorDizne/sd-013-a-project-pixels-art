
function createPalette(colors) {
    for (let i = 0; i < colors.length; i += 1) {
        const ColorPalette = document.getElementById('color-palette');
        const color = document.createElement('div');
        color.className = 'color';
        color.style.backgroundColor = colors[i];
        color.style.width = '50px';
        color.style.height = '50px';
        color.style.display = 'inline-block';
        color.style.border = '1px solid black';
        color.style.margin = "2px";
        ColorPalette.appendChild(color);
        ColorPalette.style.textAlign = 'center';
    }
}
createPalette(['black', getRandomColor(), getRandomColor(), getRandomColor()]);
function createBoard(number) {
    const getPixelBoard = document.getElementById('pixel-board');
    let table = document.createElement('table');
    table.id = 'table';
    for (let i = 0; i < number; i++) {
        let line = document.createElement('tr');
        for (let j = 0; j < number; j++) {
            column = document.createElement('td');
            column.className = 'pixel';
            column.style.backgroundColor = 'white';
            line.appendChild(column); //preenche as linhas
        }
        table.appendChild(line); // preenche a table
    }
    getPixelBoard.appendChild(table); //após as tables estiverem preenchidas

    table.style.borderSpacing = '0';
    table.style.backgroundColor = 'white';
    getPixelBoard.style.margin = 'auto';
    getPixelBoard.style.display = 'table';
}
createBoard(5);

function selected() {
    let getPixelBoard = document.querySelector('#color-palette');
    let firstElement = getPixelBoard.firstChild;
    firstElement.className += ' selected';
}
selected();
// mudar classe
function changeClass(event) {
    const colors = document.getElementsByClassName('color');
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].className = 'color';
    }
    event.target.className += " selected";
};
// adiciona escutador
let colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', changeClass);

function changePixel(event) {
    let currentColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = currentColor
}
let getPixelBoard = document.querySelector('#pixel-board');
getPixelBoard.addEventListener('click', changePixel);

// criar  botão
function clearPixels() {
    let pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white';
    }
}
let button = document.getElementById('clear-board');
button.style.marginBottom = '15px';
button.addEventListener('click', clearPixels);
clearPixels();

function chooseNumberPixels() {
    let button = document.getElementById('generate-board');
    button.addEventListener('click', function () {
        table = document.getElementById('table');
        if (table) {
            table.remove();
        }
        let number = document.getElementById('board-size').value;
        if (number > 0) {
            createBoard(limitBoard(number));
        } else {
            alert('Board inválido!')
        }
    })
}
chooseNumberPixels();

function limitBoard(input) {
    if (input < 5) {
        return 5;
    } else if (input > 50) {
        return 50;
    } else {
        return input;
    }           
}
// funcion got from stackoverflow
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }