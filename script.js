//h1
function cabeçalho () {

  let header = document.createElement('header');
  document.querySelector('body').appendChild(header);

  let h1 = document.createElement('h1');
  document.querySelector('header').appendChild(h1);
  h1.id = 'title';
  h1.className = 'centraliza';
  h1.innerHTML = 'Paleta de Cores';
}
cabeçalho();

//paleta de cores 1 section
function PaletCor () {
  // 1 section
  let palet = document.createElement('section');
  document.querySelector('body').appendChild(palet);
  palet.id = 'color-palette';
  palet.className = 'centraliza';
  
    //aplicar cor preta no primeiro quadrado da paleta
    let div1 = document.createElement('div');
    palet.appendChild(div1);
    div1.className = ' style1';
    div1.classList.add('color');
    div1.id ='click';
    div1.style.backgroundColor = 'black';
    

    let div2 = document.createElement('div');
    palet.appendChild(div2);
    div2.className = 'color';
    div2.style.backgroundColor = 'yellow';
    

    let div3 = document.createElement('div');
    palet.appendChild(div3);
    div3.className = 'color';
    div3.style.backgroundColor = 'green'

    let div4 = document.createElement('div');
    palet.appendChild(div4);
    div4.className = 'color style';
    div4.style.backgroundColor = 'red';
  
    //Cria 3 quadrados 
    /* let nCor = 3;
    for (let index =0; index < nCor; index += 1){
      let div = document.createElement('div');
      palet.appendChild(div);
      div.className = 'color style';
      div.style.backgroundColor = CorRandom ();
    }
  
    //gera cor aleatoria das 3 ultimos quadros 
    //by: stackOverFlow
    function CorRandom() {
      let caracteres = '0123456789ABCDEF';
      let cor = '#';
      
      for ( let index = 0; index < 6; index += 1 ) {
        cor += caracteres[Math.floor(Math.random() * 16)];
        if (cor == '#ffffff') {
          cor = '#ff5fff';
        }
      }
      return cor; */
      //by: stackOverFlow
    }

  PaletCor ();
// clica no quadrado e armazena a cor dele
/* let link = document.getElementsByClassName('click');
    for(let index = 0;)
      link.addEventListener('click', function(){
        link.classList.remove('selected');
        this.classList.add('selected');
      })

 */
/* aqui crio a classe no quadrado 1 e removo dos outros 3 */
let coresDaPaleta = document.querySelectorAll('.color');

function recebeCliq(event) {
  for (let index = 0; index < coresDaPaleta.length; index += 1) {
    coresDaPaleta[index].className = 'color';
  }
  event.target.className = 'color selected';
}

for (let index = 0; index < coresDaPaleta.length; index += 1) {
  coresDaPaleta[index].addEventListener('click', recebeCliq);
}