
  const colors = document.querySelectorAll('.color');
  const palette = document.querySelector('#color-palette');

palette.addEventListener('click', function (event){
    if(event.target.classList.contains('color')){
      colors.forEach(function(_, index){
        colors[index].classList.remove("selected");
      })
      event.target.classList.add("selected");
    }
  })



