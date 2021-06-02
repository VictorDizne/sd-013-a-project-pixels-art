const listColor = ['black','blue','red','green']
window.addEventListener('load', function addClassColor () {
  let paleteColors = document.createElement('tr')
  document.querySelector('#color-palette').appendChild(paleteColors)
  for (let key in listColor) {
    let colors = document.createElement('td')
    colors.classList.add('color')
    colors.style.backgroundColor = listColor[key]
    paleteColors.appendChild(colors)
    if (listColor[key] === 'black') {
      colors.classList.add('selected')
    }
  }

  let selectColor = document.querySelector('#color-palette').firstElementChild
  console.log (selectColor.children.length)
  selectColor.addEventListener('click',addColor)

  function addColor (event) {
    for (let index = 0; selectColor.children.length > index; index += 1) {
      if (selectColor.children[index].classList.contains('selected')) {
        selectColor.children[index].classList.remove('selected')
      }
    }
    event.target.classList.add('selected')
    console.log (event.target.style.backgroundColor)
  }  
  
});

const pixeis = 5
window.addEventListener ('load', function addPixel () {
  for (let index = 1; pixeis >= index; index += 1) {
    let columnPixel = document.createElement('tr')
    document.querySelector('#pixel-board').appendChild(columnPixel)
      for (let secondIndex = 1; pixeis >= secondIndex; secondIndex += 1) {
        let linePixel = document.createElement('td')
        linePixel.classList.add('pixel')
        columnPixel.appendChild(linePixel)
      }
  }
});



