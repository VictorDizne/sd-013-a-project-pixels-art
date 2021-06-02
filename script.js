
function gradePixel(){
let board = document.querySelector("#pixel-board");
let quadrado = 5;

for(index =0; index< quadrado; index+=1){

  let linha = document.createElement("div");
  linha.className = "linha";
  board.appendChild(linha);


  for(let i=0; i< quadrado ; i+=1){

    let blocos = document.createElement("div");
    blocos.className = "pixel";
    linha.appendChild(blocos);
  }
}

}

gradePixel();

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

  let cor1 = document.getElementById("color-1");
  let cor2 = document.getElementById("color-2");
  let cor3 = document.getElementById("color-3");
  let cor4 = document.getElementById("color-4");

  if( selectedELement === cor1){
  event.target.style.backgroundColor = "black";
  }
  else if( selectedELement === cor2){
    event.target.style.backgroundColor = "blue";
  }
  else if( selectedELement === cor3){
    event.target.style.backgroundColor = "green";
  }
  else if( selectedELement === cor4){
    event.target.style.backgroundColor ="red";
  }

}

/* let listaPixel = document.querySelectorAll(".pixel")[0];
listaPixel.addEventListener("click", pintaPixel); */



function addPixel(){
  
  let listaPixel = document.querySelectorAll(".pixel");

  for(index =0; index < listaPixel.length; index+=1 ){

    let listaPixel = document.querySelectorAll(".pixel")[index];

    listaPixel.addEventListener("click", pintaPixel);

  }
}
addPixel();