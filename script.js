// função para adicionar linhas e colunas no pixel-board!
const tbody = document.querySelector('#pixel-board tbody');
const trElem = document.getElementsByClassName('colunas');
const tdElem = document.getElementsByClassName('linhas');

function addPixels(numCol = 5, numLin = 5) {
  for (let i = 0; i <= numCol - 1; i += 1) {
    const tr = document.createElement('tr');
    tr.className = 'colunas';
    tbody.appendChild(tr);
    for (let o = 0; o <= numLin - 1; o += 1) {
      const td = document.createElement('td');
      td.className = 'linhas';cle
      trElem[i].appendChild(td);
    }
  }
}

addPixels();

console.log(tdElem.length);
