window.onload = function tudo() {
  // let clique = document.addEventListener(click, escolheCor());
  var quadro = document.getElementById('pixel-board');
  const cores = document.getElementsByClassName('color');
  console.log(cores);
  console.log(quadro);
  for (i = 0; i < cores.length; i += 1) {
    if (cores[0]) {
      cores[0].style.backgroundColor = 'black';
    }
    cores[i].style.backgroundColor = gerarCor();
  }
  geraQuadro();
  console.log(quadro)
};

function gerarCor(opacidade = 1) {
  // Fonte Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
  let r = Math.random() * 255;
  r = r.toFixed(0);
  let g = Math.random() * 255;
  g = g.toFixed(0);
  let b = Math.random() * 255;
  b = b.toFixed(0);
  console.log('r:', r, 'g:', g, 'b:', b);
  if (r === 255 && g === 255 && b === 255) {
    console.log('Deu Branco.');
  }
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

function geraQuadro() {
  const linhas = 4;
  const colunas = 4;
  for (index = 0; index <= linhas; index += 1) {
    const tr = document.createElement('tr');
    document.getElementById('pixel-board').appendChild(tr);
    for (index1 = 0; index1 <= colunas; index1 += 1) {
      const td = document.createElement('td');
      td.className = ("pixel");
      document.getElementById('pixel-board').appendChild(td);
    }
  }
}
