const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', selecionar);
const clear = document.querySelectorAll('#clear-board')
const pixel = document.querySelector('.pixel')

function selecionar(event) {
  const cores = document.querySelectorAll('.color');
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected')
  }
  event.target.classList.add('selected')
}