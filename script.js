let colors = document.getElementsByClassName("color")

let black = document.querySelector(".black")

let red = document.querySelector(".red")

let green = document.querySelector(".green")

let blue = document.querySelector(".blue")

function deselect() {
  for (let i of colors) {
    i.classList.remove('selected');
  }
}

black.addEventListener('click', function() {
  deselect();
  black.classList.add('selected');
}
)

red.addEventListener('click', function() {
  deselect();
  red.classList.add('selected');
}
)

green.addEventListener('click', function() {
  deselect();
  green.classList.add('selected');
}
)

blue.addEventListener('click', function() {
  deselect();
  blue.classList.add('selected');
}
)

let pixel = document.querySelectorAll(".pixel")

for (let i of pixel) {
  i.addEventListener('click', function() {
    let selected = document.querySelector('.selected');
    let selectedColor = selected.classList.item(1);
    i.classList.remove('black', 'red', 'green', 'blue');
    i.classList.add(selectedColor);
  })
}

let clrBtn = document.getElementById("clear-board");

clrBtn.addEventListener('click', function() {
  for (let i of pixel) {
    i.classList.remove('black', 'red', 'green', 'blue');
  }
})