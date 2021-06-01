const palette = ['black', 'red', 'green', 'blue'];

const container = new dom('.container');
const colorPalette = create('div', undefined, { id: 'color-palette' });

for (let color of palette) {
  const colorSelection = create('div', undefined, { class: 'color' });
  changeStyle(colorSelection)('backgroundColor', color);
  colorPalette.appendChild(colorSelection);
}

container.append(colorPalette)()
