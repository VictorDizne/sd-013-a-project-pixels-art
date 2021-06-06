const board = document.querySelector('#pixel-board');

function fillBoard(number) {
  for (let row = 0; row < number; row += 1) {

    // cria uma row para ser preenchida por quadrados.

    let squareRow = document.createElement('div');

    // preenche a row criada anteriormente com quadrados. 

    for (let column = 0; column < number; column += 1) {
      let square = document.createElement('div');
      square.className = 'pixel';
      square.style.backgroundColor = 'white';
      squareRow.appendChild(square);
    }

    // anexa a row preenchida ao board.
    board.appendChild(squareRow);
  }
}

fillBoard(5)








