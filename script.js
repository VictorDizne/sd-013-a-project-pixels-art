const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function createPaletteDivs () {
	const colors = ['black', 'red', 'gray', 'green'];
	for (let index = 0; index < colors.length; index++) {
		if (index == 0) {
			let div = document.createElement('div');
			div.classList.add('color');
			div.classList.add('selected')
			colorPalette.appendChild(div);
			div = document.querySelector('#color-palette').lastElementChild;
			div.style.backgroundColor = colors[index];
		} else {
			let div = document.createElement('div');
			div.className = 'color';
			colorPalette.appendChild(div);
			div = document.querySelector('#color-palette').lastElementChild;
			div.style.backgroundColor = colors[index];
		}

	}
}

createPaletteDivs();

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

for (let index = 0; index < 5; index++){
	let colorDiv = document.querySelectorAll('.color')[index];
	colorDiv.addEventListener('click', () => {
		let selected = document.querySelector('.selected');
		selected.classList.remove('selected');
		colorDiv.classList.add('selected');
	})
}

for (let index = 0; index < 25; index++){
	let toPaint = document.querySelectorAll('.pixel')[index];
	toPaint.addEventListener('click', () => {
		let selected = document.querySelector('.selected');
		toPaint.style.backgroundColor = selected.style.backgroundColor;
	})
}
