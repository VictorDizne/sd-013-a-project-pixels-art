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

// Exercicio 7 - Coloca a classe selected na cor clicada
const escolheCor = document.querySelectorAll('.color');

escolheCor.forEach((color) => {
  color.addEventListener('click', function () {
    escolheCor.forEach((item) => {
      item.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});

// Exercicio 8 - Muda a cor dos pixels

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

// Requisito 9 - Botão limpar

function limpa() {
  const pixels = document.querySelectorAll('.pixel');
  for (const i of pixels) {
    i.classList.remove('pintou', 'pintou2', 'pintou3', 'pintou4');
  }
}

//Requisito 10 - Menção honrosa a ROGERIO <3

const vqv = document.querySelector('#generate-board');
const imputNumber = document.querySelector('#board-size');
const pixelBoard = document.querySelector('#pixel-board');

function criaQuadro(value) {

  tabela.innerHTML = null;
  for (let tr = 0; tr < value; tr += 1) {
    const trs = document.createElement('tr');
    for(let td = 0; td < value; td += 1) {
      const tds = document.createElement('td');
      tds.classList.add('pixel');
      trs.appendChild(tds);
    }
    tabela.appendChild(trs);
  }
}

function gerarQuadro(input) {
  if (input.value >= 50) {
    criaQuadro(50);
    alert('O tamanho máximo é 50');
  }
  if (input.value <= 5) {
    criaQuadro(5);
    alert('O tamanho mínimo é 5');
  }
  if (input.value >= 5 && input.value <= 50) {
    criaQuadro(input.value);
  }
}

function botaoVqv() {
  if (imputNumber.value === '') {
    alert('Board inválido!');
  } else {
    gerarQuadro(imputNumber);
  }
}

vqv.addEventListener('click', botaoVqv);
