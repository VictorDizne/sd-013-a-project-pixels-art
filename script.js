const size = 10;
const sorte = size * size
const paletaDeCores = document.querySelectorAll('.pallete');
function colorgen(){
const blackColor = document.querySelector('#first-color');
  blackColor.classList.add('selected');
  function randomColors() {
    const orange = Math.random() * 255;
    const blue = Math.random() * 255;
    const grey = Math.random() * 255;

    return `rgb(${orange},${blue},${grey})`;
  }

  for (let color = 1; color < paletaDeCores.length; color += 1) {
    paletaDeCores[color].style.backgroundColor = randomColors();
  }
};


function createPaleta() {
    let paleta = document.createElement('table')
    paleta.className = "paleta"
    paleta.id = 'cores'
    document.getElementById('paleta').appendChild(paleta)
}

function createPaleta2(){
    for (let index = 0; index < 5; index++)
    var pop = document.createElement('tr') 
    pop.className = 'pallete'
    pop.id = 'color-palette'
    document.getElementById('cores').appendChild(pop)

}

function fillPaleta(){
    
    var bounce = document.createElement('th') 
    bounce.className = 'pallete'
    bounce.id = 'first-color'
    document.getElementById('color-palette').appendChild(bounce) 

    var bounce = document.createElement('th') 
    bounce.className = 'pallete'
    bounce.id = 'second-color'
    document.getElementById('color-palette').appendChild(bounce) 

    var bounce = document.createElement('th') 
    bounce.className = 'pallete'
    bounce.id = 'third-color'
    document.getElementById('color-palette').appendChild(bounce) 

    var bounce = document.createElement('th') 
    bounce.className = 'pallete'
    bounce.id = 'fourth-color'
    document.getElementById('color-palette').appendChild(bounce) 
    
}

function createTable(size) {
    let table = document.createElement('table')
    table.className = "tabela"
    table.id = "minhaTable"
    document.getElementById('pixelart').appendChild(table)

}

function tamanhoPixel(){
    for (let index = 0; index < size; index++) {
    let tr = document.createElement('tr')
    tr.className = "coluna"
    document.getElementById('minhaTable').appendChild(tr) }
    

    for (let index = 0; index < size; index++) {
    for (let index = 0; index < size; index++) {
        let th = document.createElement('th')
        th.className = "box"
        document.querySelector('body').children[2].children[0].children[index].appendChild(th)

    }
}


let cor = 'black';

function selecionaCor(corSelecionada) {
  const corEscolhida = corSelecionada.target;
  if (corEscolhida.classList.contains('pixel')) {
    corEscolhida.style.backgroundColor = cor;
  } else if (corEscolhida.classList.contains('color')) {
    document.querySelector('.selected').className = ('color');
    corEscolhida.className = ('color selected');
    cor = window.getComputedStyle(corEscolhida).backgroundColor;
  }
}

document.addEventListener('click', selecionaCor);

}

window.onload = function() {
    createTable();
    tamanhoPixel();
    createPaleta();
    createPaleta2();
    fillPaleta();
    colorgen();
  };