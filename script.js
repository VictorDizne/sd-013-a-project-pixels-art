function gera() {
  const a = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  const c = parseInt(Math.random() * 255, 10);

  return `rgb(${a},${b},${c})`;
}

// cor preta sempre fixa
const cor1 = document.getElementById('color-1');
// cor de 2 a 4 sempre random
const cor2 = document.getElementById('color-2');
cor2.style.backgroundColor = gera();
const color2 = cor2.style.backgroundColor;
const cor3 = document.getElementById('color-3');
cor3.style.backgroundColor = gera();
const color3 = cor3.style.backgroundColor;
const cor4 = document.getElementById('color-4');
cor4.style.backgroundColor = gera();
const color4 = cor4.style.backgroundColor;

function classSelect(event) {
  const selectedELement = document.querySelector('.selected');
  selectedELement.classList.remove('selected');

  event.target.classList.add('selected');
}

const elementColor1 = document.querySelectorAll('.color')[0];
const elementColor2 = document.querySelectorAll('.color')[1];
const elementColor3 = document.querySelectorAll('.color')[2];
const elementColor4 = document.querySelectorAll('.color')[3];

elementColor1.addEventListener('click', classSelect);
elementColor2.addEventListener('click', classSelect);
elementColor3.addEventListener('click', classSelect);
elementColor4.addEventListener('click', classSelect);

function pintaPixel({ target }) {
  const selectedELement = document.querySelector('.selected');
  const a = target;
  if (selectedELement === cor1) {
    a.style.backgroundColor = 'black';
  } else if (selectedELement === cor2) {
    a.style.backgroundColor = color2;
  } else if (selectedELement === cor3) {
    a.style.backgroundColor = color3;
  } else if (selectedELement === cor4) {
    a.style.backgroundColor = color4;
  }
}

function gradePixel(quadrado) {
  const board = document.querySelector('#pixel-board');
  for (let index = 0; index < quadrado; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'linha';
    board.appendChild(linha);

    for (let i = 0; i < quadrado; i += 1) {
      const blocos = document.createElement('div');
      blocos.className = 'pixel';
      blocos.addEventListener('click', pintaPixel);
      linha.appendChild(blocos);
    }
  }
}

gradePixel(5);

function addPixel() {
  let listaPixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < listaPixel.length; index += 1) {
    listaPixel = document.querySelectorAll('.pixel')[index];

    listaPixel.addEventListener('click', pintaPixel);
  }
}

addPixel();

function resetaTela() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
  }
}

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', resetaTela);

// funcão pra alterar o tamanho do board

function mudaGradePixel() {
  const inputTexto = document.querySelector('#board-size');
  const board = document.querySelector('#pixel-board');
  board.innerHTML = '';
  if (inputTexto.value < 5) {
    gradePixel(5);
    inputTexto.value = '';
    alert('Board inválido!');
  }
  if (inputTexto.value > 50) {
    gradePixel(50);
    inputTexto.value = '';
    alert('Board inválido!');
  } else {
    gradePixel(inputTexto.value);
    inputTexto.value = '';
  }
}

const botaoGenerate = document.querySelector('#generate-board');
botaoGenerate.addEventListener('click', mudaGradePixel);
