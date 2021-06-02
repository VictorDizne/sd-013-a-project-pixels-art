window.onload = function () {

  setColors();

  function setColors() {
    let colors = document.getElementsByClassName('color');
    for (let color of colors) {
      color.style.backgroundColor = color.innerText;
    }
  }
}