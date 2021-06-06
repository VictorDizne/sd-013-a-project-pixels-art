const frame = document.getElementById('pixel-board');

function createLine() {
  let div = document.createElement('div');
  div.className = 'pixel';
  frame.appendChild(div);
};

// function createLine() {
//   let div = document.createElement('div');
//   div.className = 'pixel';
//   frame.appendChild(div);
  
// };

for (let line = 1; line <= 5; line += 1) {
  for (let column = 1; column <= 5; column += 1) {
    createLine();
  };
  let nextLine = document.createElement('br');
  frame.appendChild(nextLine)
};
