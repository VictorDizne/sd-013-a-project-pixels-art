 document.getElementsByClassName('color')[0].style.background = "black" 
 document.getElementsByClassName('color')[1].style.background = "blue"
 document.getElementsByClassName('color')[2].style.background = "red"
 document.getElementsByClassName('color')[3].style.background = "yellow"
 
//window.onload= iniciando
  // function iniciando(){
    //  alert ("Crie a sua Arte");
      //alert ("inicia com a cor preta selecionada");
//}

window.onload= inicioCor
function inicioCor() {
      document.getElementsByClassName('color')[0].classList.add('selected')

}

let pixels= document.getElementsByClassName("pixel");
let reInicio = document.getElementById("clear-bord");
reInicio.addEventListener('click', limpaCor);

function limpaCor (){
pixels .style.color=white;
}

//let color_Black = document.getElementsByClassName("color")[0]
//if(color_Black  == 'black') {
 //     div.classList.Add('selected')

//function Color1() { 
  //   let colorInicitial = document.getElementsByClassName('color')[0].class= Selected;
//}



  
        
 
    