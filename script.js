function selectColor() {
  const pallet = document.getElementsByClassName('color');
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[i].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      const clickedColor = event.target;
      clickedColor.classList.add('selected');
    });
  }
}
selectColor();
