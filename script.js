function setSelected() {
  const color = document.querySelectorAll('.color');

  for (let i = 0; i < color.length; i += 1) {
    const colorIndex = color[i];
    if (colorIndex === color[i]) {
      colorIndex.addEventListener('click', () => {
        color.forEach((element) => {
          element.classList.remove('selected');
        });
        colorIndex.classList.add('selected');
      });
    }
  }
}

setSelected();
