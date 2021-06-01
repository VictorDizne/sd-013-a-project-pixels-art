function colorsPalletes() {
  const classColor = document.querySelectorAll(".color");
  const pallets = ["#000000", "#F10202", "#2200FD", "#257400"];
  for (let index = 0; index < classColor.length; index += 1) {
    classColor[index].style.backgroundColor = pallets[index];
  }
}
colorsPalletes();
