let qtdPixels = 5
let linha = document.createElement("div")
let quadroDePixel = document.querySelector("#pixel-board")
let paleta = document.getElementById("color-palette")


function createDivs () {
	let criarLinha = document.createElement("div");
	criarLinha.className = "pixel tamanhoqdd white";
	 quadroDePixel.appendChild(criarLinha)
}

function createNullDivs () {
	let criarLinha = document.createElement("div");
	 quadroDePixel.appendChild(criarLinha)
}


function createLines (number) {
	let contador = 0;
  for (let i = 0 ; i < number ; i+= 1) {
    for (let index = 1 ; index < number ; index += 1) {
        contador += 1;
				if (contador === number) {
					contador = 1;
					createNullDivs ()
				}
				createDivs();
			}
			createDivs();
	}

}
createLines(5);