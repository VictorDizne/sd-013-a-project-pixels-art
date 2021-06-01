
window.onload = addClassColor;
const listColor = ['black','blue','red','green']
function addClassColor () {
  let paleteColors = document.querySelector('#color-palette').firstElementChild.firstElementChild
  for (let key in listColor) {
    let colors = document.createElement('td')
    colors.classList.add('color')
    colors.style.backgroundColor = listColor[key]
    paleteColors.appendChild(colors)
  }
}