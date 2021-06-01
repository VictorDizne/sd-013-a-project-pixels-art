window.onload = function(){
let colorPixel1 = document.querySelector('.selected');
colorPixel1.style.backgroundColor = 'black';
let colorPixel2 = document.getElementsByClassName('color')[1];
colorPixel2.style.backgroundColor = 'yellow';
let colorPixel3 = document.getElementsByClassName('color')[2];
colorPixel3.style.backgroundColor = 'green';
let colorPixel4 = document.getElementsByClassName('color')[3];
colorPixel4.style.backgroundColor = 'red';
}

function paintPixel(click, colorPixel1){
    let pixel = document.querySelector('.pixel')
    pixel.style.backgroundColor = "black";

}