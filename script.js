// Paleta de cores
function addColorList () {
  let colorList = document.querySelectorAll('.color');

  for (let c = 0; c < colorList.length; c += 1) {
    let paleta = ['black', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

    colorList[c].style.background = paleta[c];
  }
}
addColorList();

// Quadrado de Pixels
