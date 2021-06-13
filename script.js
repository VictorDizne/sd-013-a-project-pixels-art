window.onload = () =>{
  let palette = document.querySelector("#color-palette");
  let black = false;
  let board = document.querySelector("#pixel-board");

  createBoard();

  function createBoard (){
    for(let i = 0; i < 5; i += 1){
      let tableLine = document.createElement('tr');
      board.appendChild(tableLine);
      for(let j = 0; j < 5; j += 1){
        let tableSquares = document.createElement('td');
        tableSquares.className = "pixel";
        tableSquares.style.backgroundColor = 'white';
        tableLine.appendChild(tableSquares);        
      }
    }
  }
  
  //start the pallete
  for(index = 1; index <= 4; index += 1){    
    let li = document.createElement('li');
    li.className = 'color';
    //Change color in random way it was possible by: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
    let color = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    generateColor(color, li);
    

  }

  

function generateColor(color, li){
//Check if color isn't white

if(color != '#ffffff'){
  if(black == false){
  black = true; 
  li.style.backgroundColor = '#000000';
  li.classList.add('selected');
  return palette.appendChild(li)
  }
   
}else{ 
  //if color is white, the while it'll work until other color
  while(color == '#ffffff'){
    color = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');           
  }
   
}

li.style.backgroundColor = color;   
palette.appendChild(li);

}

function pickColor(e){
  const colorsPalette = document.querySelectorAll('.color');
  for(let colors of colorsPalette){
    colors.classList.remove('selected');
  }
  e.target.classList.add('selected');
}

palette.addEventListener('click',pickColor);

function paint(e){
  const colorPaint = document.querySelector('.selected');
  e.target.style.backgroundColor = colorPaint.style.backgroundColor;  
}

board.addEventListener('click',paint);
}










