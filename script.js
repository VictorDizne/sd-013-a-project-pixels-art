function blackColor() {
  const black = document.querySelector('#color-black');
  black.classList.add('selected');
}

window.onload = blackColor;

function selectColor() {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];

    color.addEventListener('click', ((event) => {
      for (let j = 0; j < colors.length; j += 1) {
        const colorDiv = colors[j]
        colorDiv.classList.remove('selected');
      }
      event.target.classList.add('selected');

    }));
  }
}
selectColor();
