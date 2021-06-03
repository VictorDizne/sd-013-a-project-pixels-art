function Paleta (){
  let nCores = 4
  let divMain = document.querySelector("#color-palette")
  for(let i = 0; i < nCores; i +=1 ){
    let cor = document.createElement("div")
    divMain.appendChild(cor)
    cor.className = "color"
  }
}
Paleta()


function cores (){
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
cores()

function tabela(){
  const linhas = 5
  let divB = document.querySelector("#pixel-board")
  for(let i =0; i < linhas; i += 1 ){
    let caixa = document.createElement("div")
    divB.appendChild(caixa)
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
  pret()
  function colorido(){
    let corMae = document.querySelectorAll(".color")
    let tabCor = document.querySelector("#color-palette")
    tabCor.addEventListener("click",(event) =>{
      for (let i = 0; i < corMae.length; i += 1) {
        let element = corMae[i];
        if(element.classList.contains("selected")=== true){
          if(element.classList.contains("preto")=== true){
            pret()
          }else if(element.classList.contains("vermelho")=== true){
            ver()
          }else if(element.classList.contains("verde")=== true){
            verd()
          }else if(element.classList.contains("amarelo")=== true){
            amarelo()
          }
        }
      }})
  }
  colorido()
  
}

function selecCores(){
  let corMae = document.querySelector("#color-palette")
  corMae.addEventListener("click",(event) =>{
    const apaga = document.querySelector(".selected")
    apaga.classList.remove("selected")
    event.target.classList.add("selected")
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.classList)
  })
}
selecCores()

function clear(){
  let buton = document.querySelector("#clear-board")
  buton.innerHTML = "Limpar"
  buton.addEventListener("click",(event) => {
    const quadro = document.querySelectorAll("div")
    for (let i = 0; i < quadro.length; i += 1 ) {
      quadro[i].classList.remove("c4","c3","c1","c2");
    }
    // quadro.classList.remove("c1")
    console.log(quadro);
  })
}
clear()

function pret(){
  let cor = document.querySelector("#pixel-board")
  // let ver = document.querySelector(".vermelho")
  // let compStyles = getComputedStyle(ver).getPropertyValue("background")
  cor.addEventListener("click",(event)=>{
    event.target.classList.remove("c4","c3","c2")
    event.target.classList.add("c1")
  })
}


function ver(){
  let cor = document.querySelector("#pixel-board")
  cor.addEventListener("click",(event)=>{
    event.target.classList.remove("c4","c3","c1")
    event.target.classList.add("c2")
  })
}


function verd(){
  let cor = document.querySelector("#pixel-board")
  cor.addEventListener("click",(event)=>{
    event.target.classList.remove("c4","c3","c1","c2")
    event.target.classList.add("c3")
  })
}

function amarelo(){
  let cor = document.querySelector("#pixel-board")
  cor.addEventListener("click",(event)=>{
    event.target.classList.remove("c3","c2","c1")
    event.target.classList.add("c4")
  })
}
