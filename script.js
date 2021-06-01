const div1 = document.querySelector(".color")
const div2 = document.querySelector(".color").nextElementSibling
const div3 = document.querySelector(".color").nextElementSibling.nextElementSibling
const div4 = document.querySelector(".color").nextElementSibling.nextElementSibling.nextElementSibling
//cores fixas com um selecionador
function corPreta() {
  div1.style.backgroundColor = "black"
  div1.classList.add("selected")
}
corPreta()

function corVermelha() {
  div2.style.backgroundColor = "red"
}
corVermelha()

function corAzul() {
  div3.style.backgroundColor = "blue"
}
corAzul()

function corRosa() {
  div4.style.backgroundColor = "pink"
}
corRosa()
//criação dos blocoDIv
let AddDivs = document.getElementById("pixel-board")

for (let index = 0; index < 25; index+= 1) {
  let createBox = document.createElement("div")
  createBox.hidden = AddDivs[index]
  createBox.className = "pixel"
  AddDivs.appendChild(createBox);
}
//evento que seleciona as paletas de cores
function mudaDiv(event) {
  const elementoTech = document.querySelector('.selected');
  elementoTech.classList.remove('selected');
  event.target.classList.add('selected');
}

div1.addEventListener("click", mudaDiv)
div2.addEventListener("click", mudaDiv)
div3.addEventListener("click", mudaDiv)
div4.addEventListener("click", mudaDiv)

let boxsDePinturas = document.querySelectorAll(".pixel")

// boxsDePinturas.forEach(function(cor) {
//   let buscaPalletas = document.querySelectorAll(".cores");
//   buscaPalletas
// }