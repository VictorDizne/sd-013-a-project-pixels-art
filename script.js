// Paleta de cores
function addColorList () {
  let colorList = document.querySelectorAll('.color');
  let paleta = ['black', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

  for (let c = 0; c < colorList.length; c += 1) {
    colorList[c].style.background = paleta[c];
  }
}

addColorList();

// Pincel

let a = document.querySelector('.color');
a.addEventListener('click', clicar);

function clicar() {
  a.style.background = 'red';
}