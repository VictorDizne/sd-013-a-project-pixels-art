
let linha = [5];
function creatPallet() {
let linha = [5];
  for(index = 0; index < linha.length; index +=1){
    const novo = document.createElement("div");
    const element = document.querySelector("#pixel-board");
    novo.className = "pixel";
    element.appendChild(novo);
  }
}
console.log(linha);
creatPallet();