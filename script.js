const palette = ['black', 'red', 'green', 'blue'];
const boardWidth = 5;
const boardLength = 5;
let selectedColor = palette[0];

const container = new dom('.container');
const colorPalette = create('div', undefined, { id: 'color-palette' });
const board = create('div', undefined, { id: 'pixel-board' });

for (let i = 0; i < palette.length; i += 1) {
  const colorClassList = i == 0 ? 'color selected' : 'color';
  const colorAttributes = { class: colorClassList };

  const colorSelection = create('div', undefined, colorAttributes);
  changeStyle(colorSelection)('backgroundColor', palette[i]);
  colorPalette.appendChild(colorSelection);
}

container.append(colorPalette)();

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

sel('#color-palette').on('click', cycleToSelected);

sel('#pixel-board').on('click', function (e) {
  changeStyle(e.target)('backgroundColor', selectedColor);
});

// ************************

function cycleToSelected(e) {
  const colors = e.currentTarget.children;

  for (let i = 0; i < colors.length; i += 1) {
    const isSelected = colors[i].classList.contains('selected');
    const isTarget = colors[i] === e.target;

    if (!isTarget && isSelected) {
      colors[i].classList.remove('selected');
    }

    if (isTarget && !isSelected) {
      colors[i].classList.add('selected');
      selectedColor = palette[i];
    }
  }
}
