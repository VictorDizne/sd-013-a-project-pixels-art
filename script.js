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
    let div = document.createElement('div');
    palet.appendChild(div);
    div.className = 'color';
    div.style.backgroundColor = 'black';
  
    //Cria 3 quadrados 
    let nCor = 3;
    for (let index =0; index < nCor; index += 1){
      let div = document.createElement('div');
      palet.appendChild(div);
      div.className = 'color';
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
      return cor;
      //by: stackOverFlow
    }
  }
  PaletCor ();