let paletaDeCores = document.querySelectorAll('.color');
let pixelBoard = document.querySelector('#pixel-board');
let pixels = document.querySelectorAll('.pixel');
let botao = document.querySelector('#clear-board');

// Inicia com a cor Preta Selecionada
function startBlack(){
	document.querySelector('#black').classList.add("selected");
}
startBlack();

//Reset Class selected
function removeSelected(){
	for(let i = 0; i < paletaDeCores.length; i += 1){
		if(paletaDeCores[i].classList.contains('selected')){
			paletaDeCores[i].classList.remove('selected');
		}
	}
}


// Add Class selected na Cor Escolhida
 	for(let i = 0; i < paletaDeCores.length; i += 1){
 		paletaDeCores[i].addEventListener('click', selecionaCor);			
 	}
 	function selecionaCor(event){
 	removeSelected();
 	event.target.classList.add('selected');
 	}	

//Grava o Background da Cor
function gravaCor(){
for(let index = 0; index < paletaDeCores.length; index += 1){
	if(paletaDeCores[index].classList.contains('selected')){
	let element = paletaDeCores[index];
	let background = window.getComputedStyle(element, null).getPropertyValue("background-color");
	return background;
		}
	}
}

function pintaBoard(event){
	event.target.style.backgroundColor = gravaCor();
}

function board(){
	for(let i = 0; i < pixels.length; i += 1){
		pixels[i].addEventListener('click', pintaBoard)
	}
}
board();
// Com ajuda do Luiz Furtado

// Crie um botão
function resetBoard(){
	for(let i = 0; i < pixels.length; i += 1){
		pixels[i].style.backgroundColor = "#fff"
		console.log(pixels[i]);
	}
}
botao.addEventListener('click', resetBoard);

