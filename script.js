const palette = ['black', 'red', 'green', 'blue'];
const boardWidth = 5;
const boardLength = 5;

const container = new dom('.container');
const colorPalette = create('div', undefined, { id: 'color-palette' });
const board = create('div', undefined, { id: 'pixel-board' });

for (let color of palette) {
  const colorSelection = create('div', undefined, { class: 'color' });
  changeStyle(colorSelection)('backgroundColor', color);
  colorPalette.appendChild(colorSelection);
}

container.append(colorPalette)()

for (let i = 0; i < boardWidth; i += 1) {
  const line = create('div', undefined, { class: 'line' });
  for (let j = 0; j < boardLength; j += 1) {
    const pixel = create('div', undefined, { class: 'pixel' });
    changeStyle(pixel)('backgroundColor', '#fff');
    line.appendChild(pixel);
  }
  board.appendChild(line);
}

container.append(board)();
