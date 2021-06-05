const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const eraser = document.querySelector('#clear-board');
const colorSelected = [`${randomColors()}`, `${randomColors()}`, `${randomColors()}`];

// Cria as divs da paleta de cores para selecionar a cor para pintar
function createPaletteDivs () {
	for (let index = 0; index < 4; index++) {
		if (index == 0) {
			let div = document.createElement('div');
			div.classList.add('color');
			div.classList.add('selected')
			colorPalette.appendChild(div);
			div = document.querySelector('#color-palette').lastElementChild;
			div.style.backgroundColor = 'black';
		} else {
			let div = document.createElement('div');
			div.className = 'color';
			colorPalette.appendChild(div);
			div = document.querySelector('#color-palette').lastElementChild;
			div.style.backgroundColor = colorSelected[index - 1];
		}

	}
}

createPaletteDivs();

// cria as divs da main que serão pintadas
function createMainDivs () {
	for (let index = 0; index < 5; index++) {
		let div1 = document.createElement('div');
		div1.className = 'pixel';
		pixelBoard.appendChild(div1);
		for (let index = 0; index < 4; index++) {
			let div1 = document.createElement('div');
			div1.className = 'pixel';
			pixelBoard.appendChild(div1);
			div1 = document.querySelector('#pixel-board').lastElementChild;
		}
		div1 = document.querySelector('#pixel-board').lastElementChild;
		// div1.style.gridColumn = (index + 2)/(index + 3);
		// div1.style.gridRow = 2/3;
	}
}

createMainDivs ();

// Adiciona o evento de selecionar a cor ao clicar numa cor da paleta de cores
const colorDiv = document.querySelectorAll('.color');

colorDiv[0].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[0].classList.add('selected');
})

colorDiv[1].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[1].classList.add('selected');
})

colorDiv[2].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[2].classList.add('selected');
})

colorDiv[3].addEventListener('click', () => {
	let selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	colorDiv[3].classList.add('selected');
})

for (let index = 0; index < 25; index++){
	let toPaint = document.querySelectorAll('.pixel')[index];
	toPaint.addEventListener('click', () => {
		let selected = document.querySelector('.selected');
		toPaint.style.backgroundColor = selected.style.backgroundColor
	})
}

// 'Apaga' a cor das divs da main que foram pintadas, retornando para a cor de background original (white)
eraser.addEventListener('click', () => {
	let squares = document.querySelectorAll('.pixel');
	for (index in squares) {
		let square = squares[index];
		square.style.backgroundColor = 'white'
	}
})

// Gera cores hexadecimais aleatórias
function randomColors () {
	let abc = 'ABCDEF';
	let letter1 = abc[Math.floor(Math.random() * 6)];
	let numbers1 = Math.floor(Math.random() * 10);
	let letter2 = abc[Math.floor(Math.random() * 6)];
	let numbers2 = Math.floor(Math.random() * 10);
	let letter3 = abc[Math.floor(Math.random() * 6)];
	let numbers3 = Math.floor(Math.random() * 10);
	let color = `#${letter1}${numbers1}${letter2}${numbers2}${letter3}${numbers3}`;
	return color;
}
