const pixelBoard = document.querySelector('#pixel-board');
let tabelaTd = '<td class="pixel"></td>';
for (let i = 0; i < 4; i += 1) {
  tabelaTd += '<td class="pixel"></td>';
}
tabelaTd = '<tr>'+tabelaTd+'</tr>';
for (let i = 0; i < 4; i += 1) {
  tabelaTd += '<tr><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td></tr>';
}
pixelBoard.innerHTML = '<table>'+tabelaTd+'</table>';