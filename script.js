window.onload = function() {

  function classSelected() {
    document.querySelector('#color-palette .color:nth-child(1)').classList.add('selected');
  }
  classSelected();

  function changeClassSelected() {
    let colorPalet = document.querySelector('#color-palette');
    let colorPaletChildren = document.querySelectorAll('#color-palette .color');
    
    colorPalet.addEventListener('click', function(event) {
      
      if(event.target.classList.contains('color')) {
        for (let i = 0; i < colorPaletChildren.length; i += 1) {
          colorPaletChildren[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
        console.log(colorPaletChildren);
      }
    });
  }

  changeClassSelected();

}







