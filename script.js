// função para adicionar linhas e colunas no pixel-board!
const tbody = document.querySelector('#pixel-board tbody');
const trElem = document.getElementsByClassName('coluna');
const tdElem = document.querySelectorAll('.coluna td');

function addPixels(numCol = 5, numLin = 5) {
  for (let i = 0; i <= numCol - 1; i += 1) {
    const tr = document.createElement('tr');
    tr.className = 'coluna';
    tbody.appendChild(tr);
    for (let o = 0; o <= numLin - 1; o += 1) {
      const td = document.createElement('td');
      trElem[i].appendChild(td);
    }
  }
}

function addClass(Array, classe) {
  // essa função adiciona classes em itens de array.
  const item = Array;
  for (i in item) {
    item[i].className = classe;
  }
}

addPixels();
addClass(document.querySelectorAll('.coluna td'), 'pixel');

console.log(tdElem);
