function colorsPalette() {
  const colorPalette = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const color = document.createElement('div');
    color.classList = 'color';
    colorPalette.appendChild(color);
  }
}
colorsPalette();
