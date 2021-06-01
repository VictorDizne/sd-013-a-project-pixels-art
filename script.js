// Fonte: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

function createBoard() {
  const b = document.getElementsByTagName('body')[0];
  const t = document.createElement('table');
  t.id = 'pixel-board';
  const tb = document.createElement('tbody');
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('tr');
    for (let i2 = 0; i2 < 5; i2 += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    tb.appendChild(line);
  }
  t.appendChild(tb);
  b.appendChild(t);
}
createBoard();
