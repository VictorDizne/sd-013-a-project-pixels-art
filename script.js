const pixelBoard = document.querySelector('#pixel-board');
let tabelaTd = '<td class="pixel"></td>';
for (let i = 0; i < 4; i += 1) {
  tabelaTd += '<td class="pixel"></td>';
}
tabelaTd = `<tr> ${tabelaTd} </tr>`;
let aux = tabelaTd;
for (let i = 0; i < 2; i += 1) {
  aux += tabelaTd + tabelaTd;
}
tabelaTd = aux;
pixelBoard.innerHTML = `<table> ${tabelaTd} </table>`;
