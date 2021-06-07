function colorSelection() {
  const colorBlack = document.getElementsByClassName('color')[0];
  colorBlack.classList.add('selected');
  const selected = document.getElementsByClassName('selected');

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
      for (let index = 0; index < selected.length; index += 1) {
        selected[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
}
colorSelection();

function colorPrint() {
  document.addEventListener('click', (event) => {
    const selected = document.getElementsByClassName('selected')[0];
    const color = window.getComputedStyle(selected, null).getPropertyValue('background-color');
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = color;
    }
  });
}
colorPrint();
