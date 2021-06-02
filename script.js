function selectCor() {
  const colorir = document.getElementsByClassName('color');
  for (let index = 0; index < colorir.length; index +=1) {
    colorir[index].addEventListener('click', function () {
      const selectedCor = document.querySelector('.selected');
      selectedCor.classList.remove('selected');
      const clickCor = event.target; 
      clickCor.classList.add('selected');
    });
    } 
  }
  selectCor();
  
  function selectedBlack() {
    const criaClasse = document.getElementById('black');
    criaClasse.classList.add('selected');
  }

  function classeSelected () {
    const corPaleta = document.querySelector('#color-palette');
    const selectedPaleta = document.querySelector('#color-palette .color');
    corPaleta.addEventListener('click', function (evento) {
      if (evento.target.classList.contains('color')) {
      for (let index = 0; index < selectedPaleta.length; index += 1) {
        selectedPaleta[index].remove('selected');
      }
      evento.target.classList.add('selected');
      selectedPaleta();
    }
    });
  }

  window.onload = function pixels() {
    selectedBlack();
    criaClasse();
  }