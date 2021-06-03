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
}
