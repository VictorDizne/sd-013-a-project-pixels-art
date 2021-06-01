function setColors(){
  let colors = document.querySelectorAll(".color");
  let colorsUser = ["green", "red", "blue", "orange"];
  for(let i = 0; i < colors.length; i += 1){
    colors[i].style.backgroundColor = colorsUser[i];
  }
}
setColors();