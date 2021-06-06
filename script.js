function Paleta() {
  const nCores = 4;
  const divMain = document.querySelector('#color-palette');
  for (let i = 0; i < nCores; i += 1) {
    const cor = document.createElement('div');
    divMain.appendChild(cor);
    cor.className = 'color';
  }
}
Paleta();

function pret() {
  const cor = document.querySelector('#pixel-board');
  let rece = document.querySelector(".preto")
  let receCor = window.getComputedStyle(rece)
  let corBack = receCor.getPropertyValue("background-color")
  cor.addEventListener('click', (event) => {
    event.target.style.background = corBack
  });
}

function ver() {
  const cor = document.querySelector('#pixel-board');
  let rece = document.querySelector(".vermelho")
  let receCor = window.getComputedStyle(rece)
  let corBack = receCor.getPropertyValue("background-color")
  cor.addEventListener('click', (event) => {
    event.target.style.background = corBack
  });
}

function verd() {
  const cor = document.querySelector('#pixel-board');
  let rece = document.querySelector(".verde")
  let receCor = window.getComputedStyle(rece)
  let corBack = receCor.getPropertyValue("background-color")
  cor.addEventListener('click', (event) => {
    event.target.style.background = corBack
  });
}

function amarelo() {
  const cor = document.querySelector('#pixel-board');
  let rece = document.querySelector(".amarelo")
  let receCor = window.getComputedStyle(rece)
  let corBack = receCor.getPropertyValue("background-color")
  cor.addEventListener('click', (event) => {
    event.target.style.background = corBack
  });
}

function tabela() {
  const n = document.querySelector('#board-size').value;
  let linhas = n;
  if (linhas === '') {
    return window.alert('Board inválido!');
  }
  if (linhas < 5) {
    linhas = 5;
  } else if (linhas > 50) {
    linhas = 50;
  }
  const divB = document.querySelector('#pixel-board');
  while (divB.firstChild) { // apaga todos os filhos de divB antes de criar.
    divB.removeChild(divB.firstChild);
  }
  for (let i = 0; i < linhas; i += 1) {
    const caixa = document.createElement('tr');
    divB.appendChild(caixa);
    for (let j = 0; j < linhas; j += 1) {
      const pixel = document.createElement('td');
      caixa.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}
const entraNum = document.querySelector('#generate-board');
entraNum.addEventListener('click', tabela);

function valorP() {
  const linhas = 5;
  const divB = document.querySelector('#pixel-board');
  for (let i = 0; i < linhas; i += 1) {
    const caixa = document.createElement('tr');
    divB.appendChild(caixa);
    for (let j = 0; j < linhas; j += 1) {
      const pixel = document.createElement('td');
      caixa.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}

function cores() {
  const listaC = document.querySelectorAll('.color');
  for (let j = 0; j < listaC.length; j += 1) {
    if (listaC[j] === listaC[0]) {
      listaC[j].classList.add('preto');
    } else if (listaC[j] === listaC[1]) {
      listaC[j].classList.add('vermelho');
    } else if (listaC[j] === listaC[2]) {
      listaC[j].classList.add('verde');
    } else {
      listaC[j].classList.add('amarelo');
    }
  }
}
cores();

window.onload = function inicio() {
  const elementoCor = document.querySelector('.preto');
  elementoCor.classList.add('selected');
  pret();
  valorP();
  dudu()
  function colorido() {
    const corMae = document.querySelectorAll('.color');
    const tabCor = document.querySelector('#color-palette');
    tabCor.addEventListener('click', () => {
      for (let i = 0; i < corMae.length; i += 1) {
        const element = corMae[i];
        if (element.classList.contains('selected')) {
          if (element.classList.contains('preto')) {
            pret();
          } else if (element.classList.contains('vermelho')) {
            ver();
          } else if (element.classList.contains('verde')) {
            verd();
          } else if (element.classList.contains('amarelo')) {
            amarelo();
          }
        }
      }
    });
  }
  colorido();
};

function selecCores() {
  const corMae = document.querySelector('#color-palette');
  corMae.addEventListener('click', (event) => {
    const apaga = document.querySelector('.selected');
    apaga.classList.remove('selected');
    event.target.classList.add('selected');
  });
}
selecCores();

// Pinta os pixels de branco
function clear() {
  const buton = document.querySelector('#clear-board');
  buton.innerHTML = 'Limpar';
  buton.addEventListener('click', () => {
    const quadro = document.querySelectorAll('.pixel');
    for (let i = 0; i < quadro.length; i += 1) {
      quadro[i].style.background = "white"
    }
    console.log(quadro);
  });
}
clear();

function sortCor(){
  let r = Math.random() * 255
  let g = Math.random() * 255
  let b = Math.random() * 255
  return `rgb(${r},${g},${b})`
}

function dudu(){
  document.querySelector(".amarelo").style.background = sortCor()
  document.querySelector(".verde").style.background = sortCor()
  document.querySelector(".vermelho").style.background = sortCor()
}
const ButaoSort = document.querySelector("#random-cor")
ButaoSort.addEventListener("click",dudu)