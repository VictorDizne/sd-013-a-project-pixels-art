//cria o tamanho do board
function gradeSize() {
let pixelBoard = document.getElementById('pixel-board');
let bordSize = 5;

  for (let index = 0; index < bordSize; index += 1) {
    let line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);
  
    for(let i = 0; i < bordSize; i += 1) {
      let blocks = document.createElement('div');
      blocks.className = 'pixel';
      blocks.style.backgroundColor = 'rgb(255, 255, 255)'
      line.appendChild(blocks);
    } 
  }
}

gradeSize();








  // function boardSize () {
  //   let legendSize = document.createElement('legend');
  //   headerPage.appendChild(legendSize);
  //   legendSize.innerText = 'Escolha o tamanho do quadro:';
  //   legendSize.style.fontWeight = 'bolder';
    
  
