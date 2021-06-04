let colors = document.querySelectorAll('.color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', recebeClick);
}

  function recebeClick(e) {
    for (i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
  }