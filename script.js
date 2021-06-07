function colorSelection() {
  const colorBlack = document.querySelector('.black');
  colorBlack.classList.add('selected');
  const selected = document.getElementsByClassName('selected');

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      for (let index = 0; index < selected.length; index += 1) {
        selected[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
}
colorSelection();
