//cores iniciais da paleta
function paleta() { 
    const paletaGrade = document.getElementById('color-palette');
    const colorBlack = document.createElement('div');
    colorBlack.className = 'color black selected';
    paletaGrade.appendChild(colorBlack);
    const colorYellow = document.createElement('div')
    colorYellow.className = 'color yellow';
    paletaGrade.appendChild(colorYellow);
    const colorGreen = document.createElement('div');
    colorGreen.className = 'color green';
    paletaGrade.appendChild(colorGreen);
    const colorRed = document.createElement('div');
    colorRed.className = 'color red';
    paletaGrade.appendChild(colorRed);
}
paleta();

//tamanho do board
//function board() {
 //   const pixelBoard = document.getElementsByName('pixel-board');
  //  const boardSize = 5;

  //  for (let index = 0; index < boardSize; index += 1) {
   //     const line = document.createElement('div');
   //     line.className = 'lines';
    //    pixelBoard.appendChild(line);
        
   // for (let index = 0; index < boardSize; index += 1) {
   //     let block = document.createElement('div')
   //     block.className = 'pixel';
   //     line.appendChild(block);
   // }    
   // }
//}
//board();