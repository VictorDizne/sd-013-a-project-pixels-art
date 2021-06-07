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

// Requisito 12 - Com Ajuda do Matheus Duarte <3

function corAleatoria() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector('.color1').style.backgroundColor = 'black';
document.querySelector('.color2').style.backgroundColor = corAleatoria();
document.querySelector('.color3').style.backgroundColor = corAleatoria();
document.querySelector('.color4').style.backgroundColor = corAleatoria();

// Exercicio 7 - Coloca a classe selected na cor clicada
const escolheCor = document.querySelectorAll('.color');

escolheCor.forEach((color) => {
  color.addEventListener('click', (cor) => {
    escolheCor.forEach((item) => {
      item.classList.remove('selected');
    });
    cor.target.classList.add('selected');
  });
});

// Exercicio 8 - Muda a cor dos pixels

const tabela = document.querySelector('#table-row');

function clicou(event) {
  const pixelSelecionado = event.target;
  const corElementoSelecionado = document.querySelector('.selected').style.backgroundColor;
  if (pixelSelecionado.style.backgroundColor === corElementoSelecionado) {
    pixelSelecionado.style.backgroundColor = 'white';
  } else {
    pixelSelecionado.style.backgroundColor = corElementoSelecionado;
  }
}

tabela.addEventListener('click', clicou);

// Requisito 9 - Botão limpar

function limpa() {
  const pixels = document.querySelectorAll('.pixel');
  for (const i of pixels) {
    i.style.backgroundColor = null;
  }
}

// Requisito 10 - Menção honrosa a ROGERIO <3

const vqv = document.querySelector('#generate-board');
const imputNumber = document.querySelector('#board-size');

function criaQuadro(value) {
  tabela.innerHTML = null;
  for (let tr = 0; tr < value; tr += 1) {
    const trs = document.createElement('tr');
    for (let td = 0; td < value; td += 1) {
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
