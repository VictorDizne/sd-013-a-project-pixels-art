// Requisito 7

function clickSelect(event){
  let colorSelect = document.querySelectorAll(".color");
  for(index = 0; index < colorSelect.length; index += 1){
    colorSelect[index].classList.remove("selected");
  }
  event.target.classList.add("selected");
}