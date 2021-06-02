/* function addSelect (){
  let element = document.getElementsByClassName('color')

  for (let i = 0; i < element.length; i++){
    element[i].classList.remove('selected')
  }

  element.addEventListener('click', addSelect)
  /* this.classList.add('selected')
  document.getElementsByClassName('color').addEventListener("click", addSelect)
} */



/* document.getElementsByClassName('color').addEventListener("click", addSelect) */ 

function addSelected (event){
  let x = event.target;
  let element = document.getElementsByClassName('color')

  for (let i = 0; i < element.length; i++){
    element[i].classList.remove('selected')
  }

  x.classList.add('selected')
} 