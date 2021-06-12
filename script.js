let corSelecionada = 'black'; // criando variavel para guardar a cor inicial
function selecionaCorPreta() {
  const criarClasse = document.getElementById('black'); // recuperando o elemento pelo ID e guardando na variavel
  criarClasse.classList.add('selected'); // criando uma classe para o elemento criado acima
}
function defineCorDaPaleta() { // questao explicada pela Julia e Luiza.
  const corDaPaleta = document.querySelector('#color-palette'); // recuperando o elemento pai com o ID
  const selecionaPaletaFilhos = document.querySelectorAll('#color-palette .color'); // recuperando todos os elementos que possuem a classe color
  corDaPaleta.addEventListener('click', (evento) => { // requisito resolvido com a ajuda da Jessica.
    if (evento.target.classList.contains('color')) { // se o evento que foi clicado (especifico) possuir a classe color
      for (let i = 0; i < selecionaPaletaFilhos.length; i += 1) { // percorra todos os li que possuem a classe color
        selecionaPaletaFilhos[i].classList.remove('selected'); // se o item percorrido pelo for tiver a classe selected, remova
      }
      evento.target.classList.add('selected'); // adiciona ao elemento onde houve o elemento do click, selected.
      corSelecionada = evento.target.id; // a variavel da primeira linha agora recebe o evento especifico que contem o ID
    }
  });
}
window.onload = function projeto() {
  selecionaCorPreta();
  defineCorDaPaleta();
  const pixels = document.querySelectorAll('#pixel-board .pixel'); // recuperando os elementos que possuem a classe pixel
  for (let i = 0; i < pixels.length; i += 1) { // realizando um for para ter acesso a cada um dos pixels
    const pixelIndividual = pixels[i]; // guardando o indice de pixel na variavel
    pixelIndividual.addEventListener('click', (evento) => { // dizendo que se a variavel ouvir um click no seu elemento
      evento.target.style.backgroundColor = corSelecionada; // definindo o estilo do elemento que foi clicado com o backgroundColor da variavel cor selecionada, que recebe o ID na linha 15
    });
  }

  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', () => {
    const allpixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < allpixels.length; i += 1) {
      allpixels[i].style.backgroundColor = 'white';
    }
  });
};
