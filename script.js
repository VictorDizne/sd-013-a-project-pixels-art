// Paleta de cores
let color = document.querySelectorAll('.color');

for (let c = 0; c < color.length; c += 1) {
  let paleta = ['black', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

  color[c].style.background = paleta[c];
}