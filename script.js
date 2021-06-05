function colorsTable() {
  const firstColor = document.querySelector(".selected");
  firstColor.style.backgroundColor = "black";
  let otherColors = document.querySelectorAll(".color");
  for (let index = 1; index < 4; index += 1) {
    otherColors[index].style.backgroundColor = rgbRadom();
  }
}
colorsTable();

function rgbRadom(radomColor) {
  let color1 = Math.ceil(Math.random() * 250);
  let color2 = Math.ceil(Math.random() * 250);
  let color3 = Math.ceil(Math.random() * 250);

  let randomColor = `rgb(${color1}, ${color2}, ${color3})`;
  return randomColor;
}

// function tableColumn() {
//   let numeroUsuario = 
//   let tabela = document.getElementById("#pixel-board");
//   let colunas = "";
//   for (let index = 0; index <= numeroUsuario )
// }

function selectColor() {
  let td = 4;
  for (let index = 0; index <= td; index += 1) {
  let disponibleColors = document.querySelectorAll(".color")[index];
  disponibleColors.addEventListener("click", clickPaleta);
  }
  function clickPaleta() {
  console.log("teste");
  }
}
selectColor();

// function paintingTable() {
//   let pixels = document.querySelectorAll(".pixel");

// }