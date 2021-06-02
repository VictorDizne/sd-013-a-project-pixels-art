


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

