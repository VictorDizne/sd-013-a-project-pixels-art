const palette = ['black', 'red', 'green', 'blue'];
let boardWidth = 5;
let boardLength = boardWidth;
let boardSize = pow(boardWidth);
const defaultPixelColor = '#fff';
let selectedColor = palette[0];

const container = new dom('.container');
const colorPalette = create('div', undefined, { id: 'color-palette' });
const board = create('div', undefined, { id: 'pixel-board' });
const clearBtn = create('button', 'Limpar', { id: 'clear-board' });
const boardSizeWrapper = create('div', undefined, {
  class: 'board-size-wrapper',
});
const boardSizeInput = create('input', undefined, {
  id: 'board-size',
  type: 'number',
  min: 1,
});
const genBoardBtn = create('button', 'VQV', { id: 'generate-board' });

fillColors();
fillBoard();

append(boardSizeWrapper)([boardSizeInput, genBoardBtn])();
container.append([colorPalette, clearBtn, boardSizeWrapper, board])();

sel('#color-palette').on('click', cycleToSelected);
sel('#pixel-board').on('click', function (e) {
  changeStyle(e.target)('backgroundColor', selectedColor);
});
sel('#clear-board').on('click', cleanBoard);
sel('#board-size').on('change', handleSizeChange);
sel('#generate-board').on('click', generateBoard);

// ************************

function fillColors() {
  for (let i = 0; i < palette.length; i += 1) {
    const colorClassList = i == 0 ? 'color selected' : 'color';
    const colorAttributes = { class: colorClassList };

    const colorSelection = create('div', undefined, colorAttributes);
    changeStyle(colorSelection)('backgroundColor', palette[i]);
    colorPalette.appendChild(colorSelection);
  }
}

function fillBoard() {
  for (let i = 0; i < boardWidth; i += 1) {
    const line = create('div', undefined, { class: 'line' });
    for (let j = 0; j < boardLength; j += 1) {
      const pixel = create('div', undefined, { class: 'pixel' });
      changeStyle(pixel)('backgroundColor', defaultPixelColor);
      line.appendChild(pixel);
    }
    append(board)(line)();
  }
}

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

function generateBoard(e) {
  if (boardSizeInput.value.trim() == '') {
    window.alert('Board inválido!');
    return;
  }

  boardSizeInput.value = boardWidth;
  clear(board)();
  fillBoard();
}

function cleanBoard(e) {
  const board = e.target.nextElementSibling.children;

  for (let line of board) {
    for (let pixel of line.children) {
      changeStyle(pixel)('backgroundColor', defaultPixelColor);
      selectedColor = palette[0];
    }
  }
}

function handleSizeChange(e) {
  let constrainedValue = e.target.value;
  if (constrainedValue < 5) constrainedValue = 5;
  if (constrainedValue > 50) constrainedValue = 50;
  if (e.target.value.trim() !== '') {
    updateDimensions(constrainedValue);
    return;
  }

  e.preventDefault();
}

function updateDimensions(n) {
  boardSize = pow(n, 2);
  boardWidth = n;
  boardLength = n;
}

function pow(base, exponent) {
  return Math.pow(base, exponent);
}
