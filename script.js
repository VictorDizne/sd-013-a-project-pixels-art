// Requisito 7

function clickSelect(event){
  let colorSelect = document.querySelector(".selected");
  if(event.target.classList("color") && event.target !== colorSelect){
    colorSelect.classList.remove("selected");
    event.target.add("selected");
  }
}