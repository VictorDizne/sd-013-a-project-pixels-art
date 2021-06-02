// Cria a paleta de cores inicial
function palette() {
  let paletteGrid = document.getElementById('color-palette');
  let color1 = document.createElement('div');
  color1.className = 'color black selected';
  paletteGrid.appendChild(color1);
  let color2 = document.createElement('div');
  color2.className = 'color yellow';
  paletteGrid.appendChild(color2);
  let color3 = document.createElement('div');
  color3.className = 'color blue';
  paletteGrid.appendChild(color3);
  let color4 = document.createElement('div');
  color4.className = 'color red';
  paletteGrid.appendChild(color4);
}
palette();

// Cria o tamanho do board
function gradeSize() {
  const pixelBoard = document.getElementById('pixel-board');
  let bordSize = 5;

  for (let index = 0; index < bordSize; index += 1) {
    let line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);

    for (let i = 0; i < bordSize; i += 1) {
      let blocks = document.createElement('div');
      blocks.className = 'pixel';
      blocks.style.backgroundColor = 'rgb(255, 255, 255)';
      line.appendChild(blocks);
    }
  }
}
gradeSize();

