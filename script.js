window.onload = () =>{
  let palette = document.querySelector("#color-palette");
  let black = false;
  
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
}










