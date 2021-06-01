window.onload = function () {

  //Cria a linhas já com os pixel que preenchem o board, ou seja, cria o board.
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

  //Cria os pixels do board.
  function pixelMaker(line) {

    for (let i = 0; i < 5; i += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }

  //Define a cor preta como selecionada inicialmente.
  function startBlack() {
    let colorBlack = document.getElementsByClassName('color')[0];
    console.log(colorBlack.backgroundColor);
    colorBlack.classList.add('selected')
  }
  startBlack();

  //Cria o evento de seleção de cores.
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

  //Cria o evento de colorir os pixels
