let btn = document.querySelector('#clear-board');

function selectColor() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.toggle('selected')
}

function addColor() {
  // let pixel = document.querySelectorAll('li.pixel');
  let selectC = document.querySelector('.selected');
  let setC = selectC.getAttribute('class');
  
  event.target.setAttribute('class', setC);
  event.target.classList.add('pixel');
  event.target.classList.remove('selected');
}

function clearBoard() {
  alert('Limpar!')
  let li = document.querySelectorAll('#pixel-board li');
  for (let i = 0; i < li.length; i += 1) {
      li[i].setAttribute('class', 'pixel');
      // li[i].style.background = 'white';
  }
}

btn.addEventListener('click', clearBoard);
