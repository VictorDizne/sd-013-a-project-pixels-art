function cores (){
  let nCores = 4
  let divMain = document.querySelector("#cor")
  for(let i = 0; i < nCores; i +=1 ){
    let cor = document.createElement("div")
    divMain.appendChild(cor)
    cor.className = "color"
    cor.id = "color-palette"
  }
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