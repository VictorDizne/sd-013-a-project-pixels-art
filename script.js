// recupero a paleta de cores e boto no array chamado cores (as 4)
let cores = document.getElementsByClassName('color');

// recupero os pixels
let pixels = document.getElementsByClassName('pixel');

// seto as cores em cada indice do array
cores[0].style.backgroundColor="black" 
cores[1].style.backgroundColor="#2c3e50";
cores[2].style.backgroundColor="#7f8c8d";
cores[3].style.backgroundColor="#1abc9c";

// adiciono a classe selected na cor preta
cores[0].classList.add('selected');

// Percorro o array cores para adicionar a classe selected quando for clicado.
// Utilizo as funções pintar e remover a classe selected
for (let index = 0; index <cores.length; index +=1) {
	cores[index].addEventListener('click', (event) => {
		console.log("teste");
		removeAllSelectors();
		event.target.classList.add('selected');
		paint();
	});
};

// função pra remover a classe selected por todo o array cores
function removeAllSelectors() {
	for (let index = 0; index <cores.length; index +=1) {
			cores[index].classList.remove('selected');
	};
};

// Aqui faço uma verificação para saber se tem alguma cor selecionada e depois percorro o array pixels para pintar
function paint() {
	for(let i =0; i<cores.length; i+=1) {
		if(cores[i].classList.contains('selected')){
			for(let j=0; j<pixels.length; j+=1) {
				pixels[j].addEventListener('click', () => {
					pixels[j].style.backgroundColor = cores[i].style.backgroundColor;
				});
			};
		};
	};
};

paint();

// recupera o botao btnClear e depois percorre no array dos pixels para setar o bg pra white
let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', function(){
	console.log("teste");
	for(let index = 0; index < pixels.length; index +=1 ){
		pixels[index].style.backgroundColor = "white";
	};
});
//agradecimento ao Luiz Furtado por ter resolvido comigo 2 bugs do projeto.