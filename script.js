function addSelect (){
  let element = document.getElementsByClassName('color')

  for (let i = 0; i < element.length; i++){
    element[i].classList.remove('selected')
  }

  this.classList.add('selected')
}

document.getElementsByClassName('color').addEventListener("click", addSelect)