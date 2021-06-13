// recupero a paleta de cores e boto no array chamado cores (as 4)
let cores = document.getElementsByClassName('color');

// recupero os pixels
let pixels = document.getElementsByClassName('pixel');

// seto as cores em cada indice do array
cores[0].style.backgroundColor="black" 
cores[1].style.backgroundColor=ramdomColor();
cores[2].style.backgroundColor=ramdomColor();
cores[3].style.backgroundColor=ramdomColor();

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


//https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function ramdomColor(){
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}
//agradecimento ao Luiz Furtado por ter resolvido comigo 2 bugs do projeto.