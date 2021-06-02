const pixelBoard = document.querySelector('#pixel-board');
let tabela = '<tr><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td></tr>';
for (let i = 0; i < 4; i += 1) {
  tabela += '<tr><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td><td class="pixel"></td></tr>';
}
pixelBoard.innerHTML = '<table>'+tabela+'</table>';