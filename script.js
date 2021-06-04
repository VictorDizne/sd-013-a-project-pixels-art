const listaDeCor = 'lista-de-cor';
const pixelBoard = '#pixel-board';
const input = document.querySelector('input');

function criaUlDeCor(id) {
  const ul = document.createElement('ul');
  const nav = document.getElementById(id);
  nav.appendChild(ul);
  ul.id = listaDeCor;
}

criaUlDeCor('color-palette');

function criaLiCores(id, n) {
  const ul = document.getElementById(id);
  for (let index = 1; index <= n; index += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (document.getElementsByClassName('selected')[0] == undefined) {
      li.className = 'color';
      li.classList.add("selected");
    } else {
      li.className = 'color';
    }
  }
}

criaLiCores(listaDeCor,4)


function AdicionaPixels() {
  let quant = NumeroValidoInput()
  const criarBoard = document.createElement('section');
  document.body.appendChild(criarBoard);
  criarBoard.setAttribute('id', 'pixel-board');
  const lugarDaLinha = document.querySelector(pixelBoard);
  let pixelNumeroN = 0; for (let linha = 1; linha <= quant; linha += 1) {
    const line = document.createElement('ul');
    lugarDaLinha.appendChild(line);
    for (let coluna = 1; coluna <= quant; coluna += 1) {
      const column = document.createElement('li');
      line.appendChild(column);
      column.className = 'pixel';
      column.id = `pixel ${pixelNumeroN}`; column.style.backgroundColor = "white"
      column.addEventListener('click', mudaCor)
      pixelNumeroN += 1;
    }
  }
  mudaCorDoPixel();
}

AdicionaPixels();

function removePixels() {
  const tabelaDePixel = document.querySelector(pixelBoard);
  tabelaDePixel.parentNode.removeChild(tabelaDePixel);
}

document.getElementById("generate-board").addEventListener('click', () => {
  removePixels();
  AdicionaPixels(input);
});

function changeColor(event) {
  const NovaCor = event.target;
  const CorAntiga = document.getElementsByClassName('selected');
  CorAntiga[0].classList.remove('selected');
  NovaCor.classList.add('selected');
}
let classSelecionada = document.querySelector('#lista-de-cor');
classSelecionada.addEventListener('click', changeColor);

function mudaCorDoPixel() {
  let pixelNumeroN = 0;
  let quantidade = NumeroValidoInput();
  for (let i = 0; i < quantidade; i += 1) {
    let elementoDaTabelaPixelada = document.getElementById(`pixel ${pixelNumeroN}`);
    elementoDaTabelaPixelada.addEventListener('click', mudaCor);
    pixelNumeroN += 1;
  }
}
function mudaCor(event) {
  const pixelClicado = event.target;
  const corBase = document.getElementsByClassName('selected');
  pixelClicado.style.backgroundColor = corBase[0].style.backgroundColor;
  pixelClicado.setAttribute('id','colorido');
}

mudaCorDoPixel();

document.querySelector('#clear-board').addEventListener('click', () => {
  let pixelsColoridos = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsColoridos.length; i += 1) {
    pixelsColoridos[i].style.backgroundColor = 'white';
    pixelsColoridos[i].setAttribute('id','');
  }
});

// 5) Verifica se o input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento `input`
// 6) Verifica se nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: 'Board inválido!'-----------------------------------------------------------------------------
function removeCores() {
  const nav = document.getElementsByTagName('nav')[0];
  const ul = document.getElementsByTagName('ul')[0];
  nav.removeChild(ul);
}

function gerarCor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let cor = `rgb(${r}, ${g}, ${b})`
  return cor;
}

document.querySelector('#mudarCores').addEventListener('click', CriandoCoresAleatórias)

function CriandoCoresAleatórias() {
  removeCores();
  criaUlDeCor('color-palette');
  criaLiCores(listaDeCor, 6);  
  let lista = document.getElementById('lista-de-cor');
  for (let i = 0; i < lista.children.length; i += 1) {
    if (i == 0 ) {
      lista.children[i].style.backgroundColor = 'black'
    } else {
    let cor = gerarCor();
    lista.children[i].style.backgroundColor = cor;
    }
  }
  let classSelecionada = document.querySelector('#lista-de-cor');
  classSelecionada.addEventListener('click', changeColor);

}

CriandoCoresAleatórias();

function NumeroValidoInput() {
  let Inputvalor = document.querySelector('#board-size').value
  if (Inputvalor < 5 && Inputvalor > -1) {
    Inputvalor = 5
    return Inputvalor
  } else if (Inputvalor > 50){
    Inputvalor = 50
    return Inputvalor
  } else if (Inputvalor >= 5 && Inputvalor <= 50 ) {
    return Inputvalor
  } else {
    return alert('Board inválido!');
  }
}

NumeroValidoInput()