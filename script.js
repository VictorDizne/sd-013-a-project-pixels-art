window.onload = function () {
    function divCreator() {
        let todosPixels = 25;
        for (let i = 1; i <= todosPixels; i+=1) {
            let pixelBoard = document.getElementById('pixel-board'); 
            let divPixel = document.createElement('div');
            divPixel.className = "pixel";
            pixelBoard.appendChild(divPixel);   
        }
    }
    divCreator();
     function selectCollor() {
     let pallete = document.getElementsByClassName('color');
     let otherColors = ['blue', 'red', 'yellow'];
     console.log(pallete);
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
  selectCollor(); 
}