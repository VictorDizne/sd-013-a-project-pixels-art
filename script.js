let blocks = document.getElementById('color-palette')
blocks.addEventListener('click', function changeSelector(evento){
  document.getElementsByClassName('selected')[0].classList.remove('selected')
  evento.target.classList.add('selected');
})
