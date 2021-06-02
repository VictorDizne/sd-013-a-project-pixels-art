
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