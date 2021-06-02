function selecionaCorPreta() {
  const criarClasse = document.getElementById('black');
  criarClasse.classList.add('selected');
}

function classeSelecionada() {
  const corDaPaleta = document.querySelector('#color-palette');
  const selecionaPaletaFilhos = document.querySelectorAll('#color-palette .color');
  corDaPaleta.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('color')) {
      for (let i = 0; i < selecionaPaletaFilhos.length; i += 1) {
        selecionaPaletaFilhos[i].remove('selected');
      }
      evento.target.classList.add('selected');
      console.log(selecionaPaletaFilhos);
    }
  });
}

window.onload = function projeto() {
  selecionaCorPreta();
  classeSelecionada();

};
