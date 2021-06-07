

window.onload = function() {
let cores = document.getElementsByClassName('color');
let pixels = document.getElementsByClassName('pixel');

cores[0].style.backgroundColor="black" 
cores[1].style.backgroundColor="#2c3e50";
cores[2].style.backgroundColor="#7f8c8d";
cores[3].style.backgroundColor="#1abc9c";

cores[0].classList.add('selected');
console.log(cores[0]);


for (let index = 0; index <cores.length; index +=1) {
	cores[index].addEventListener('click', () => {
		pintar();
		removeAllSelectors();
		cores[index].classList.add('selected');
		
	});
};

function removeAllSelectors() {
	for (let index = 0; index <cores.length; index +=1) {
			cores[index].classList.remove('selected');
	};
};

function pintar() {
	for(let i =0; i<cores.length; i+=1) {
		if(cores[i].classList.contains('selected')){
			for(let j=0; j<pixels.length; j+=1) {
				pixels[j].addEventListener('click', () => {
					pixels[j].style.backgroundColor = cores[i].style.backgroundColor;
				});
			}
		}	
	}
}
};
