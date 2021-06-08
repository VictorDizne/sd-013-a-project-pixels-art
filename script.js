window.onload = function () {
    function divCreator() {
        let todosPixels = 25;
        for (let i = 1; i <= todosPixels; i+=1) {
            let pixelBoard = document.getElementById('pixel-board'); 
            let divPixel = document.createElement('div');
            divPixel.id = i;
            divPixel.className = "pixel";
            pixelBoard.appendChild(divPixel);   
        }
    }
    divCreator();
     function color() {
     let pallete = document.getElementsByClassName('color');
     let otherColors = ['blue', 'red', 'yellow'];
     for (let i = 0; i < pallete.length; i+=1) {
       pallete[0].style.background = 'black';
       pallete[0].id = 'black';
       pallete[0].classList.add('selected');
       if (i>0) {
         pallete[i].style.background = otherColors[i - 1];
         pallete[i].id = otherColors[i - 1];
       }
    } 
  }
  color(); 
  function selectColor() {
    const paletaDeCores = document.getElementById('color-palette');
    paletaDeCores.addEventListener('click', function (i) {
    clicar(i.target.id);  
  });
}
selectColor ()

  function clicar(idColor) {
      const classeSelecionada = document.querySelector('.selected'); 
      classeSelecionada.classList.remove('selected');
      const itenSelector = document.getElementById(idColor);
    itenSelector.classList.add('selected');     
}
   function selectPix () {
      const boardOfPixels = document.getElementById('pixel-board');
      boardOfPixels.addEventListener('click', function(p) {colorir (p.target.id);
    });
   }

   selectPix();

   function colorir(p) {
   const corSelecionada = document.querySelector('.selected');
   const pixel = document.getElementById(p);
   pixel.style.background = corSelecionada.id;
   console.log(p);
   }    
}
 
