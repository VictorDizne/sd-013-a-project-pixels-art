function pixelBoard() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.className = 'row';
    document.querySelector('#pixel-board').appendChild(line);

    for (i = 0; i < 5; i += 1) {
      const col = document.createElement('div');
      col.className = 'pixel';
      line.appendChild(col);
    }
  }
}
pixelBoard();
