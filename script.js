let corSelecionada = 'black';
function selecionaCorPreta() {
  const criarClasse = document.getElementById('black');
  criarClasse.classList.add('selected');
}
function defineCorDaPaleta() { // questao explicada pela Julia e Luiza.
  const corDaPaleta = document.querySelector('#color-palette');
  const selecionaPaletaFilhos = document.querySelectorAll('#color-palette .color');
  corDaPaleta.addEventListener('click', (evento) => { // requisito resolvido com a ajuda da Jessica.
    if (evento.target.classList.contains('color')) {
      for (let i = 0; i < selecionaPaletaFilhos.length; i += 1) {
        selecionaPaletaFilhos[i].classList.remove('selected');
      }
      evento.target.classList.add('selected');
      corSelecionada = evento.target.id;
    }
  });
}
window.onload = function projeto() {
  selecionaCorPreta();
  defineCorDaPaleta();
  const pixels = document.querySelectorAll('#pixel-board .pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const pixelIndividual = pixels[i];
    pixelIndividual.addEventListener('click', (evento) => {
      evento.target.style.backgroundColor = corSelecionada;
    });
  }
};
