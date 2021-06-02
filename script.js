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
  selectColor.addEventListener('click',addColor)

  function addColor (event) {
    for (let index = 0; selectColor.children.length > index; index += 1) {
      if (selectColor.children[index].classList.contains('selected')) {
        selectColor.children[index].classList.remove('selected')
      }
    }
    event.target.classList.add('selected')
    document.querySelector('.selected').style.git = event.target.style.backgroundColor
    console.log (document.querySelector('.selected').style.backgroundColor)
  }  

  let selectorPixel = document.querySelector('#pixel-board')
  selectorPixel.addEventListener('click', addColorInPixel)
  
  function addColorInPixel (eventColor) {


    if (eventColor.target == document.querySelector('#pixel-board')) {

    }else {
      eventColor.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
    }
    console.log (eventColor.target)
  }

  let cleanBottom = document.querySelector('#clear-board')
  let pixelsClean = document.getElementsByClassName('pixel')
  console.log (pixelsClean.length)
  cleanBottom.addEventListener('click',clearBoard)

  function clearBoard () {
    for (let key in pixelsClean)
    if (key < pixelsClean.length) {
      pixelsClean[key].style.backgroundColor = 'white'
    }
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



