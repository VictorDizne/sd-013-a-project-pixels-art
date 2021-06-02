window.onload = function () {
    let changeColors = document.getElementsByClassName('color');
    let colorArray = ['black', 'red', 'yellow', 'grey'];
    for (let i = 0; i < 4; i += 1) {
        changeColors[i].style.backgroundColor = colorArray[i];
    }

    let pixels = document.getElementById('pixel-board');
    for (let i = 0; i < 5; i += 1) {
        let linha = criaElemento('tr')
        pixels.appendChild(linha)
        for (let j = 0; j < 5; j += 1) {
            let coluna = criaElemento('td')
            coluna.className = 'pixel'
            pixels.lastElementChild.appendChild(coluna)
        }
    }

    function criaElemento(nome) {
        let elemento = document.createElement(nome);
        return elemento;
    }

}


