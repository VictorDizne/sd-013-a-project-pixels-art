// function selectCor() {
//   const colorir = document.getElementsByClassName('color');
//   for (let index = 0; index < colorir.length; index +=1) {
//     colorir[index].addEventListener('click', function () {
//       const selectedCor = document.querySelector('.selected');
//       selectedCor.classList.remove('selected');
//       const clickCor = event.target; 
//       clickCor.classList.add('selected');
//     });
//     } 
//   }
//   selectCor();
  
  function selectCor() {
    const colorir = document.getElementById('a1');
    colorir.classList.add('selected');
  }

  function corSelecionada() {
    const corPaleta = document.querySelector('#color-palette');
    const corPaletaDois = document.querySelectorAll('#color-palette .color');
    corPaleta.addEventListener('click', (evento) => {
      if (evento.target.classList.contains('color')) {
        for (let index = 0; index < corPaletaDois.length; index += 1) {
          corPaletaDois[index].classList.remove('selected');
        }
        evento.target.classList.add('selected');
      }
    });
  }

  window.onload = function pixel()
  {
    selectCor();
    corSelecionada();
  };
  