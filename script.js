function criaUl(id) {
	let  ul = document.createElement('ul')
	let nav =  document.getElementById(id)
	nav.appendChild(ul)
	ul.id = 'lista-de-cor';
}

function criaLi(id,n){
	let ul = document.getElementById(id)
	for (let index = 1; index <= n; index += 1){
		let li = document.createElement('li')
		ul.appendChild(li)
		li.className = "color"
	}
}

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

criaUl("color-palette")
criaLi('lista-de-cor',4)
CriandoCoresAleatórias('li')
atribuindoCores()
function atribuindoCores (){
	cor = document.querySelectorAll(".color")
	cores = CoresDisponiveis()
	for (let i = 0; i < cores.length; i += 1) {
		cor[i].style.backgroundColor = cores[i]
	}
}

function CoresDisponiveis(){
	let cores = ['black','green','orange','red']
	return cores
}

function AdicionaPixels(referencia) {
	let quantidade = document.querySelector(referencia).value;
	let lugarDaLinha = document.querySelector('#pixel-board');
	pixelNumeroN = 0
	for (let linha = 1; linha <= quantidade; linha += 1){
		let line = document.createElement('ul')
		lugarDaLinha.appendChild(line)
		for(let coluna = 1; coluna <= quantidade; coluna += 1 ){
			let column = document.createElement('li')
			line.appendChild(column)
			column.className = "pixel"
			column.id = `pixel ${pixelNumeroN}`
			pixelNumeroN += 1
		}
	}

}
AdicionaPixels('input')