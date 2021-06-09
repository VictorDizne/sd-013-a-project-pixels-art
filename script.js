  const paleta = document.querySelector('#color-palette');
  paleta.addEventListener('click', selecionar);

  function selecionar(event) {
    const cores = document.querySelectorAll('.color');
    console.log(cores)
    for(let index = 0; index < cores.length; index+=1){
      cores[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }