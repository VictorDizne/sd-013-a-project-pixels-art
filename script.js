window.onload = function () {
let lines = document.getElementById("pixel-board");
for (let count1 = 0; count1 < 5; count1++) {
  let lines1 = lines.appendChild(document.createElement("div"))
  lines1.className = "lines";
  for(let count2 = 0; count2 < 5; count2++) {
    let lines2 = lines1.appendChild(document.createElement("div"));
    lines2.className = "pixel";
  }
}
}
function getColor(color) {
  let colorG = window.getComputedStyle(color).getPropertyValue('background-color');
  let qr = document.querySelectorAll('.selected');
  qr.forEach(e => e.classList.remove('selected'));
  color.classList.add('selected');
  }

