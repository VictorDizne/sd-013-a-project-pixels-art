// https://css-tricks.com/snippets/javascript/random-hex-color/
// let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
// let randomColor4 = Math.floor(Math.random()*16777215).toString(16);

document.querySelector('.first').style.backgroundColor = 'black';
document.querySelector('.second').style.backgroundColor = 'red';
document.querySelector('.third').style.backgroundColor = 'blue';
document.querySelector('.fourth').style.backgroundColor = 'green';

let pixel = document.getElementsByClassName('pixel')

for (let i of pixel){
  i.style.backgroundColor = 'white';
}

// document.querySelector('.second').style.backgroundColor = '#' + randomColor2;
// document.querySelector('.third').style.backgroundColor = '#' + randomColor3;
// document.querySelector('.fourth').style.backgroundColor = '#' + randomColor4;


let board = document.querySelector('#pixel-board');
let n = 5;

function receiveColor() {

}



function setColor () {

}




// for (let i = 1; i < n; i += 1) {
//   let line = document.createElement('div');
//   // line.setAttribute('id', 'lines')
//   line.classList.add('pixel')
//   document.querySelector('#pixel-board').appendChild(line);
//   for (let j = 0; j < i; j += 1) {
//     let column = document.createElement('div');
//     // column.setAttribute('id', 'column')
//     column.classList.add('pixel')
//     document.querySelector('#pixel-board').appendChild(column);
//   }
// }