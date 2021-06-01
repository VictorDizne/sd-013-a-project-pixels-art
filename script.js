window.onload = function() {

  const colorPalette = document.getElementsByClassName('color');
  const colorBoard = document.getElementsByClassName('pixel');
  const pixelBoardBody = document.querySelector('.pixel-board-body');
  var linhasColunas = 5;

  criarPixelBoard(linhasColunas);

  function criarPixelBoard(tamanho) {
    for (let i = 0; i < tamanho; i += 1) {
      let row = document.createElement('tr');
      pixelBoardBody.appendChild(row);
      for (let j = 0; j < tamanho; j += 1) {
        let pixel = createElement('td', 'pixel');
        pixelBoardBody.lastElementChild.appendChild(pixel);
      }
    }

    for (let pixelBoard of colorBoard) {
      pixelBoard.addEventListener('click', pintaPixelBoard);
    }
  }

  function createElement(elemento, classe) {
    let element = document.createElement(elemento);

    if (classe != '') {
      element.className = classe;
    }
    
    return element;
  }

  document.querySelector('#generate-board').addEventListener('click', generateBoard);

  function generateBoard() {
    let input = document.querySelector('#board-size');
    let pixelBoard = document.querySelector('#pixel-board');
    let rowAndLines = 0;

    console.log(pixelBoard);
    console.log(pixelBoard.firstElementChild)

    if (input.value == '') {
      alert('Board inválido!');
    }

    pixelBoard.removeChild(pixelBoard.firstElementChild);
    let tbody = createElement('tbody', 'pixel-board-body');
    pixelBoard.appendChild(tbody);

    if (input.value < 5) {
      rowAndLines = 5;
    } else if (input.value > 50) {
      rowAndLines = 50;
    } else {
      rowAndLines = input.value;
    }

    criarPixelBoard(rowAndLines);

  }

  coresPaletaDeCores();

  function coresPaletaDeCores() {
    colorPalette[0].style.backgroundColor = 'rgb(0, 0, 0)';
    sessionStorage.setItem('selecionado', 'rgb(0, 0, 0)');

    let randomColors = randomColor();
    for (let index = 1; index < colorPalette.length; index += 1) {
      colorPalette[index].style.backgroundColor = `rgb(${randomColors[index].r}, ${randomColors[index].g}, ${randomColors[index].b})`;
    }
  }

  function randomColor(){
    let array_color = [];
    for (let i = 0; i < 4; i += 1){
      array_color.push({r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255)});
    }
    
    return array_color;
  }

  for (let cor_selecionada of colorPalette) {
    cor_selecionada.addEventListener('click', setCorSelecionada);
  }

  function setCorSelecionada(e) {
    sessionStorage.setItem('selecionado', `${e.target.style.backgroundColor}`)
    for (let i in colorPalette) {
      colorPalette[i].className = 'color';
    }
    e.target.className = 'color selected';
  }

  function pintaPixelBoard(e) {
    e.target.style.backgroundColor = sessionStorage.getItem('selecionado');
  }

  document.querySelector('#clear-board').addEventListener('click', limpaBoard);

  function limpaBoard() {
    for (let pixel of colorBoard) {
      pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}
