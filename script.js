window.onload = function () {

  // Cria a linhas já com os pixel que preenchem o board, ou seja, cria o board.
  function boardMaker() {
    let pixelBoard = document.getElementById('pixel-board');

    for (let i = 0; i < 5; i += 1) {
      let line = document.createElement('div');
      line.classList.add('line');
      pixelMaker(line);
      pixelBoard.appendChild(line);
    }
  }
  boardMaker();

  // Cria os pixels do board.
  function pixelMaker(line) {

    for (let i = 0; i < 5; i += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }

  // Define a cor preta como selecionada inicialmente.
  function startBlack() {
    let colorBlack = document.getElementsByClassName('color')[0];
    colorBlack.classList.add('selected')
  }
  startBlack();

  // Cria o evento de seleção de cores.
  function colorSelect() {
    let selected = document.getElementsByClassName('selected');
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('color')) {
        for (let element of selected) {
          element.classList.remove('selected');
        }
        event.target.classList.add('selected');
      }
    })

  }
  colorSelect();

  // Cria a função de colorir os pixels
  function coloredPixels() {

    document.addEventListener('click', function (event) {
      let pixel = event.target;
      let selected = document.getElementsByClassName('selected')[0];
      let color = window.getComputedStyle(selected, null).getPropertyValue("background-color");
      if (pixel.classList.contains('pixel')) {
        pixel.style.backgroundColor = color;
      }
    })
  }
  coloredPixels();

  // Cria a função de limpar o pixel board
  function boardCleaner() {
    let clearButton = document.getElementsByTagName('button')[0];
    let pixels = document.getElementsByClassName('pixel');

    clearButton.addEventListener('click', function () {
      for (let element of pixels) {
        element.style.backgroundColor = 'white';
      }
    })
  }
  boardCleaner();

}