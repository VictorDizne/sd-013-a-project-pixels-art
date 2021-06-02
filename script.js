window.onload = function startPage() {
  function setColors() {
    const colors = document.getElementsByClassName('color');
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].style.backgroundColor = colors[i].innerText;
    }
  }
  setColors();
};
