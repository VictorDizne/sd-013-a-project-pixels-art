function selecionaCorPreta() {
  const criarClasse = document.getElementById('black');
  criarClasse.classList.add('selected');
}
window.onload = selecionaCorPreta;
