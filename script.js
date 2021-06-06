const granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#ff9966', '#ff5e62'],
        ['#00F260', '#0575E6'],
        ['#e1eec3', '#f05053'],
      ],
    },
  },
});

//Exercicio 7 - Coloca a classe selected na cor clicada
const escolheCor = document.querySelectorAll('.color');

escolheCor.forEach((color) => {
  color.addEventListener('click', function () {
    escolheCor.forEach((item) => {
      item.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});

//Exercicio 8 - Muda a cor dos pixels

const tabela = document.querySelector('#table-row');

function clicou(event) {
  if (document.querySelector('.color1').classList.contains('selected')) {
    event.target.classList.remove('pintou4', 'pintou2', 'pintou3');
    event.target.classList.toggle('pintou');
  } else if (document.querySelector('.color2').classList.contains('selected')) {
    event.target.classList.remove('pintou', 'pintou3', 'pintou4');
    event.target.classList.toggle('pintou2');
  } else if (document.querySelector('.color3').classList.contains('selected')) {
    event.target.classList.remove('pintou', 'pintou2', 'pintou4');
    event.target.classList.toggle('pintou3');
  } else if (document.querySelector('.color4').classList.contains('selected')) {
    event.target.classList.remove('pintou', 'pintou3', 'pintou2');
    event.target.classList.toggle('pintou4');
  }
}

tabela.addEventListener('click', clicou);

//Requisito 9 - Botão limpar

const pixels = document.querySelectorAll('.pixel');

function limpa() {
  for (const i of pixels) {
    i.classList.remove('pintou', 'pintou2', 'pintou3', 'pintou4');
  }
}
