const listaDeCor = 'lista-de-cor';
const pixelBoard = '#pixel-board';

function criaUlDeCor(id) {
  const ul = document.createElement('ul');
  const nav = document.getElementById(id);
  nav.appendChild(ul);
  ul.id = listaDeCor;
}

function criaLiCores(id, n) {
  const ul = document.getElementById(id);
  for (let index = 1; index <= n; index += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (index === 1) {
      li.className = 'color selected';
    } else {
      li.className = 'color';
    }
  }
}

function atribuindoCoresSelecionadas() {
  const cor = document.querySelectorAll('.color');
  const cores = CoresDisponiveis();
  for (let i = 0; i < cores.length; i += 1) {
    cor[i].style.backgroundColor = cores[i];
  }
}

function CoresDisponiveis() {
  const cores = ['black', 'green', 'orange', 'red'];
  return cores;
}

function removePixels() {
  const tabelaDePixel = document.querySelector(pixelBoard);
  tabelaDePixel.parentNode.removeChild(tabelaDePixel);
}

criaUlDeCor('color-palette');
criaLiCores(listaDeCor, 4);
atribuindoCoresSelecionadas();

function AdicionaPixels(referencia) {
  const quantidade = document.querySelector(referencia).value;
  const criarBoard = document.createElement('section');
  document.body.appendChild(criarBoard);
  criarBoard.setAttribute('id', 'pixel-board');
  const lugarDaLinha = document.querySelector(pixelBoard);
  let pixelNumeroN = 0;
  for (let linha = 1; linha <= quantidade; linha += 1) {
    const line = document.createElement('ul')
    lugarDaLinha.appendChild(line)
    for (let coluna = 1; coluna <= quantidade; coluna += 1 ) {
      let column = document.createElement('li');
      line.appendChild(column);
      column.className = "pixel";
      column.id = `pixel ${pixelNumeroN}`;
      pixelNumeroN += 1;
    }
}

}


input = document.querySelector('input');
input.addEventListener('keyup',AdicionaPixels);
AdicionaPixels(input)

function SelecionaColor (){
	let classSelecionada = document.querySelector('lista-de-cor');
	classSelecionada.addEventListener("click", changeColor);

	function changeColor(event) {
		let classCor = event.target;
		let elementoSelecionado = document.getElementsByClassName('selected');
		elementoSelecionado[0].classList.remove('selected');
		classCor.classList.add('selected');
	}
}

SelecionaColor();


function changeColorBox() {
	pixelBoard.addEventListener('click', (event) => {
	  const boxPixel = event.target;
	  if (boxPixel.className === 'pixel') {
		const selectedColor = document.querySelector('.selected').style.backgroundColor;
		boxPixel.style.backgroundColor = selectedColor;
	  }
	});
  }
  changeColorBox();

function mudaCorDoPixel (){
	let tabelaPixelada = document.querySelector(pixelBoard)
	tabelaPixelada.addEventListener('click',mudaCor)
	function mudaCor(event){
		let pixelClicado = event.target
		let corBase = document.getElementsByClassName('selected')
		pixelClicado.style.backgroundColor = corBase[0].style.backgroundColor
	}
}
mudaCorDoPixel()




function CriandoCoresAleatórias(argumento) {
	let ObjectColor = {};
	let coisa = document.querySelectorAll(argumento)
	for (let index = 0; index < coisa.length; index += 1){
		let r = parseInt(Math.random() * 255);
		let g = parseInt(Math.random() * 255);
		let b = parseInt(Math.random() * 255);
		ObjectColor[`cor: ${index}`] = `rgb(${r}, ${g}, ${b})`
	}
	return ObjectColor;
}
