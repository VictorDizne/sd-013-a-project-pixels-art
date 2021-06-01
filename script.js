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

criaUl("color-palette")
criaLi('lista-de-cor',4)

function CriandoCoresAleatórias() {
	let r = parseInt(Math.random() * 255);
	let g = parseInt(Math.random() * 255);
	let b = parseInt(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
}

function atribuindoCores (){
	listaDeCor = document.querySelectorAll(".color")
	for (let i = 0; i < listaDeCor.length; i += 1) {
		listaDeCor[i].style.backGroundColor = CriandoCoresAleatórias()
	}
}