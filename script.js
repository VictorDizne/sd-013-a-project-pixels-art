function gradePixel(quadrado){
  let board = document.querySelector("#pixel-board");
  //inputTexto = document.querySelector("#board-size");
  for(index =0; index< quadrado; index+=1){
  
    let linha = document.createElement("div");
    linha.className = "linha";
    board.appendChild(linha);
  
    for(let i=0; i< quadrado ; i+=1){
  
      let blocos = document.createElement("div");
      blocos.className = "pixel";
      blocos.addEventListener("click", pintaPixel);
      linha.appendChild(blocos);
    }
  }
  
  }

gradePixel(5);

function gera(){
  let a = parseInt(Math.random()*255,10);
  let b = parseInt(Math.random()*255,10);
  let c = parseInt(Math.random()*255,10);
  
  return 'rgb(' + a + ',' + b + ',' + c + ')';
  }  

 const cor1 = document.getElementById("color-1");
 const cor2 = document.getElementById("color-2");
 const cor_2= cor2.style.backgroundColor =gera();
 const cor3 = document.getElementById("color-3");
 const cor_3= cor3.style.backgroundColor =gera();
 const cor4 = document.getElementById("color-4");
 const cor_4= cor4.style.backgroundColor =gera();








function classSelect(event){

let selectedELement = document.querySelector(".selected");
    selectedELement.classList.remove("selected");

    event.target.classList.add("selected");
           

}

let elementColor1 = document.querySelectorAll(".color")[0];
let elementColor2 = document.querySelectorAll(".color")[1];
let elementColor3 = document.querySelectorAll(".color")[2];
let elementColor4 = document.querySelectorAll(".color")[3];

elementColor1.addEventListener('click' , classSelect);
elementColor2.addEventListener('click' , classSelect);
elementColor3.addEventListener('click' , classSelect);
elementColor4.addEventListener('click' , classSelect);

function pintaPixel(event){

  selectedELement = document.querySelector(".selected");


  if( selectedELement === cor1){
  event.target.style.backgroundColor = "black";
  }
  else if( selectedELement === cor2){
    event.target.style.backgroundColor = cor_2;
  }
  else if( selectedELement === cor3){
    event.target.style.backgroundColor = cor_3;
  }
  else if( selectedELement === cor4){
    event.target.style.backgroundColor =cor_4;
  }
   else if( event.target.style.backgroundColor === selectedELement){
    event.target.style.backgroundColor ="white";
  } // PERGUNTAR PRA ALGUEM DPS;
 
}

function addPixel(){
  
  let listaPixel = document.querySelectorAll(".pixel");
  
  for(index =0; index < listaPixel.length; index+=1 ){

    let listaPixel = document.querySelectorAll(".pixel")[index];

    listaPixel.addEventListener("click", pintaPixel);

  }
}

addPixel();

 function resetaTela(event){

  let pixels = document.querySelectorAll(".pixel");


  for(let index = 0; index < pixels.length; index +=1){

    document.querySelectorAll(".pixel")[index].style.backgroundColor = "white";
      
  }


} 

let botao = document.querySelector("#clear-board");
botao.addEventListener("click", resetaTela);

// funcão pra alterar o tamanho do board

function mudaGradePixel(){

  let inputTexto = document.querySelector("#board-size");
  let linhaLista = document.querySelectorAll(".linha");
  let listaPixels = document.querySelectorAll(".pixel");
  let board = document.querySelector("#pixel-board");

    board.innerHTML ="";
 /*  for(let index = 0 ; index < listaPixels.length  ; index +=1){
    listaPixels[index].remove();
  }   
  for( let i=0; i<linhaLista.length; i+=1){
    linhaLista[i].remove();
  } */

  if(inputTexto.value < 5 ){
    gradePixel(5);
    inputTexto.value =""; 
    alert("Board inválido!");
  }

   if(inputTexto.value > 50){
    gradePixel(50);
    inputTexto.value =""; 
    alert("Board inválido!");
  }

  else{
    gradePixel(inputTexto.value);
    inputTexto.value =""; 
  }

}

const botaoGenerate = document.querySelector("#generate-board");
botaoGenerate.addEventListener("click", mudaGradePixel);
