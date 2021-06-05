window.onload = function (addEvendListener) {
  corPreta;
  corSelecionada;
  colorir;
};

function corPreta () {
  let selecionaPreto = document.getElementById('black');
  selecionaPreto.classList.add('selected');
}

let corSelecionada = document.querySelector('#color-palette');
corSelecionada.addEventListener('click', colorir);

function colorir(event) {
  let seleciona = document.querySelector('.selected');
  seleciona.classList.remove('selected')
  event.target.classList.add('selected'); 
}

