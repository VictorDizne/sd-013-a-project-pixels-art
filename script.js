const size = 5;
const paletaDeCores = document.querySelectorAll('.pallete');

function colorgen() {
  const blackColor = document.querySelector('#first-color');
  blackColor.classList.add('selected');
};

function randomColors() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  let fundo1 = document.getElementById('second-color')
  fundo1.style.backgroundColor = `rgb(${blue},${green},${red})`
  let fundo2 = document.getElementById('third-color')
  fundo2.style.backgroundColor = `rgb(${red},${green},${blue})`
  let fundo3 = document.getElementById('fourth-color')
  fundo3.style.backgroundColor = `rgb(${green},${red},${blue})`
  return `rgb(${red},${green},${blue})`;

}


function createPaleta() {
  let paleta = document.createElement('table')
  paleta.className = "paleta"
  paleta.id = 'cores'
  document.getElementById('paleta').appendChild(paleta)
}

function createPaleta2() {
  for (let index = 0; index < 5; index++)
    var pop = document.createElement('tr')
  pop.className = 'pallete'
  pop.id = 'color-palette'
  document.getElementById('cores').appendChild(pop)

}

function fillPaleta() {

  var bounce = document.createElement('th')
  bounce.className = 'color'
  bounce.id = 'first-color'
  document.getElementById('color-palette').appendChild(bounce)

  var bounce = document.createElement('th')
  bounce.className = 'color'
  bounce.id = 'second-color'
  document.getElementById('color-palette').appendChild(bounce)

  var bounce = document.createElement('th')
  bounce.className = 'color'
  bounce.id = 'third-color'
  document.getElementById('color-palette').appendChild(bounce)

  var bounce = document.createElement('th')
  bounce.className = 'color'
  bounce.id = 'fourth-color'
  document.getElementById('color-palette').appendChild(bounce)


  for (let color = 1; color < paletaDeCores.length; color += 1) {
    paletaDeCores[color].style.backgroundColor = randomColors();
  }
}

function createTable(size) {
  let table = document.createElement('table')
  table.className = "tabela"
  table.id = "pixel-board"
  document.getElementById('pixelart').appendChild(table)

}

function tamanhoPixel() {
  for (let index = 0; index < size; index++) {
    let tr = document.createElement('tr')
    tr.className = "coluna"
    document.getElementById('pixel-board').appendChild(tr)
  }


  for (let index = 0; index < size; index++) {
    for (let index = 0; index < size; index++) {
      let td = document.createElement('td')
      td.className = "pixel"
      td.style.width = '41px'
      document.querySelector('body').children[2].children[0].children[index].appendChild(td)

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


function createButton() {
  let btn = document.createElement('button')
  btn.className = 'btn'
  btn.id = 'clear-board'
  btn.innerText = 'Limpar'
  document.getElementById('paleta').appendChild(btn)
  btn.addEventListener('click', clean)
}

function createInput() {
  let btn = document.createElement('button')
  btn.className = 'btn'
  btn.id = 'generate-board'
  document.getElementById('paleta').appendChild(btn)
  let input = document.createElement('input')
  input.className = 'input'
  input.id = 'generate-board'
}

function clean() {
  const pixelSquare = document.querySelectorAll('.pixel')
  for (let index = 0; index < pixelSquare.length; index += 1) {
    pixelSquare[index].style.backgroundColor = 'white'

  }
}


window.onload = function() {
  createTable();
  tamanhoPixel();
  createPaleta();
  createPaleta2();
  fillPaleta();
  colorgen();
  randomColors();
  createButton();
  createInput()
};