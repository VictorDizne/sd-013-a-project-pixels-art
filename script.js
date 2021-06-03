const colorBlack = document.querySelector('#black');
const colorBlue = document.querySelector('#blue');
const colorRed = document.querySelector('#red');
const colorGreen = document.querySelector('#green');
const botaoReset = document.createElement('button');

function pintaCor(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.innerHTML;
}

function pixel() {
  const linhas = document.querySelectorAll('.linha');
  for (let i = 0; i < linhas.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      td.addEventListener('click', pintaCor);
      linhas[i].appendChild(td);
    }
  }
}

function linha() {
  for (let i = 0; i < 5; i += 1) {
    const tr = document.createElement('tr');
    tr.classList.add('linha');
    document.querySelector('#table').appendChild(tr);
  }
  pixel();
}
linha();

function seleciona(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
colorBlack.addEventListener('click', seleciona);
colorBlue.addEventListener('click', seleciona);
colorRed.addEventListener('click', seleciona);
colorGreen.addEventListener('click', seleciona);

botaoReset.id = 'clear-board';
botaoReset.innerText = 'Limpar';
document.querySelector('#color-palette').appendChild(botaoReset);

function reset() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
botaoReset.addEventListener('click', reset);
