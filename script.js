 document.getElementsByClassName('color')[0].style.background = "black" 
 document.getElementsByClassName('color')[1].style.background = "blue"
 document.getElementsByClassName('color')[2].style.background = "red"
 document.getElementsByClassName('color')[3].style.background = "yellow"
 
let preto = document.getElementsByClassName("color")[0]; //tentando fazer funcionar o cod. com ajuda de ALINE HOSHINO.
let azul = document.getElementsByClassName("color")[1];
let vermelho = document.getElementsByClassName("color")[2];
let amarelo = document.getElementsByClassName("color")[3];

preto.addEventListener('click', addClassSelect);
azul.addEventListener('click', addClassSelect);
vermelho.addEventListener('click', addClassSelect);
amarelo.addEventListener('click', addClassSelect);

function addClassSelect (event) {
let corSelect = document.getElementsByClassName("selected"); 
for ( let i = 0; i < corSelect.length; i+=1){
      let cor = corSelect[i]
cor.classList.remove("selected");
event.target.classList.add("selected");

}
}
function exercicio8() {
let selected = document.getElementsByClassName("selected");
let pixels = document.getElementsByClassName("pixel");
for ( let i = 0; i < pixels.length; i +=1){
     let pixel = pixels[i]; 
      pixel.addEventListener('click', (() => {
           for (let j = 0; j <selected.length; j +=1){
                 let select = selected[j];
                 pixel.style.backgroundColor=select.style.backgroundColor;
           }
             
      }) )
}

}

exercicio8()



 

//window.onload= iniciando
  // function iniciando(){
   //   alert ("Crie a sua Arte");
     // alert ("inicia com a cor preta selecionada");
//}

//window.onload = inicioCor();
  // function  inicioCor(){

   //document.getElementsByClassName('color')[0].classList.add('selected');
  // }
function exercicio9 (){
      let pixels = document.getElementsByClassName("pixel");
      let reInicio = document.getElementById("clear-bord");
      reInicio.addEventListener('click', limpaCor);
      function limpaCor() {
            for (let i = 0; i < pixels.length; i += 1) {
                  pixels[i].style.backgroundColor = 'white';
            }

      }



}
      
exercicio9()

//let color_Black = document.getElementsByClassName("color")[0]
//if(color_Black  == 'black') {
 //     div.classList.Add('selected')

//function Color1() { 
  //   let colorInicitial = document.getElementsByClassName('color')[0].class= Selected;
//}



  
        
 
    