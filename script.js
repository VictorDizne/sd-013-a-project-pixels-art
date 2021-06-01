let palletSelectedColor = 'black';

function selectColor() {
  const pallet = document.getElementsByClassName('color');
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[i].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      const clickedColor = event.target;
      clickedColor.classList.add('selected');
      if (pallet[i] === pallet[0]) {
        palletSelectedColor = 'black';
      } else if (pallet[i] === pallet[1]) {
        palletSelectedColor = 'rgb(235, 7, 7)';
      } else if (pallet[i] === pallet[2]) {
        palletSelectedColor = 'rgb(160, 34, 34)';
      } else if (pallet[i] === pallet[3]) {
        palletSelectedColor = 'rgb(136, 207, 252)';
      }
    });
  }
}
selectColor();
function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = palletSelectedColor;
    });
  }
}
paintPixel();
