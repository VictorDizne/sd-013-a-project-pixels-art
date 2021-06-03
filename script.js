window.onload = function () {
  const pixel = document.getElementsByClassName('pixel')
  let changeColors = document.getElementsByClassName('color');
  let colorArray = ['black', 'red', 'yellow', 'grey'];
  sessionStorage.setItem('color', 'black')
  for (let i = 0; i < changeColors.length; i += 1) {
    changeColors[i].style.backgroundColor = colorArray[i];
  }

  let pixels = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    let linha = criaElemento('tr');
    pixels.appendChild(linha);
    for (let j = 0; j < 5; j += 1) {
      let coluna = criaElemento('td');
      coluna.className = 'pixel';
      pixels.lastElementChild.appendChild(coluna);
    }
  }

  function criaElemento(nome) {
    let elemento = document.createElement(nome);
    return elemento;
  }

   let mudaClasse = document.getElementsByClassName('color');
   for(let i of mudaClasse) {
     i.addEventListener('click', color)
   }

   function color (e) {
     let cor = e.target.style.backgroundColor; 
     sessionStorage.setItem('color', cor)
   }
   
  for(let i of pixel) {
    i.addEventListener('click', paint);
  }
  
  function paint (e) {
    let storage = sessionStorage.getItem('color')
    e.target.style.backgroundColor = storage
  }
  
   };

function maisInfos() {
  let textoMaisInfo = document.getElementById('teste');
  textoMaisInfo.innerText = 'testando';
}
