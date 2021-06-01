let div1 = document.querySelector(".color")
let div2 = document.querySelector(".color").nextElementSibling
let div3 = document.querySelector(".color").nextElementSibling.nextElementSibling
let div4 = document.querySelector(".color").nextElementSibling.nextElementSibling.nextElementSibling

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

let AddDivs = document.getElementById("pixel-board")

for (let index = 0; index < 25; index+= 1) {
  let createBox = document.createElement("div")
  createBox.hidden = AddDivs[index]
  createBox.className = "pixel"
  AddDivs.appendChild(createBox);
}