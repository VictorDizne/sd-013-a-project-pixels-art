const vermelho = document.querySelector('.red')
vermelho.style.backgroundColor = 'red'
const preto = document.querySelector('.black')
preto.style.backgroundColor = 'black'
const azul = document.querySelector('.blue')
azul.style.backgroundColor = 'blue'
const verde = document.querySelector('.green')
verde.style.backgroundColor = 'green'

var corAtual = "";

vermelho.addEventListener('click', selecionarVermelho)
preto.addEventListener('click', selecionarPreto)
azul.addEventListener('click', selecionarAzul)
verde.addEventListener('click', selecionarVerde)
console.log(vermelho.style.backgroundColor)

function selecionarVermelho(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  vermelho.classList.add('selected')
  corAtual = cor
}

function selecionarPreto(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  preto.classList.add('selected')
  corAtual = cor
}

function selecionarAzul(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  azul.classList.add('selected')
  corAtual = cor
}

function selecionarVerde(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  verde.classList.add('selected')
  corAtual = cor
}











//
//
//
