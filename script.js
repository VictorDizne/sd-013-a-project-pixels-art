function cores (){
  let nCores = 4
  let divMain = document.querySelector("#cor")
  for(let i = 0; i < nCores; i +=1 ){
    let cor = document.createElement("div")
    divMain.appendChild(cor)
    cor.className = "color"
    cor.id = "color-palette"
  }
}
cores()
function test (){
  let listaC = document.querySelectorAll(".color")
  for(let j = 0; j < listaC.length; j += 1){
    if(listaC[j] === listaC[0]){
      listaC[j].classList.add("preto")
    }else if (listaC[j] === listaC[1]){
    listaC[j].classList.add("vermelho")
    }else if (listaC[j] === listaC[2]){
    listaC[j].classList.add("verde")
    }else{
      listaC[j].classList.add("amarelo")
    }
  }
}
test()

function tabela(){
  const linhas = 5
  let divB = document.querySelector("#border")
  for(let i =0; i < linhas; i += 1 ){
    let caixa = document.createElement("div")
    divB.appendChild(caixa)
    caixa.id = "pixel-board"
    for(let j =0; j < linhas; j += 1){
      let pixel = document.createElement("div")
      caixa.appendChild(pixel)
      pixel.className= "pixel"
    }

  }
}
tabela()
window.onload = function(){
  
  const elementoCor = document.querySelector(".preto")
  elementoCor.classList.add("selected")
  
}
function selecCores(){
const vermelho = document.querySelector(".vermelho")
const verde = document.querySelector(".verde")
const preto = document.querySelector(".preto")
const amarelo = document.querySelector(".amarelo")
function clicar(event) {
  const elementoCor = document.querySelector(".selected")
  elementoCor.classList.remove("selected")
  event.target.classList.add("selected")
}
verde.addEventListener("click",clicar)
vermelho.addEventListener("click",clicar)
preto.addEventListener("click",clicar)
amarelo.addEventListener("click", clicar)
}
selecCores()