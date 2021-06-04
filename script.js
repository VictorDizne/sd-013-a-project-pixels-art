let pixels = document.getElementsByTagName("td");
let cores = document.getElementsByClassName("color");
let corSelecionada = ("white");
let eraser = ("false")




  cores[0].addEventListener('click',changeColorBlack)
function changeColorBlack() {
  corSelecionada = ("black");
}
cores[1].addEventListener('click',changeColorRed)
function changeColorRed() {
  corSelecionada = ("red");
}
cores[2].addEventListener('click',changeColorYellow)
function changeColorYellow() {
  corSelecionada = ("yellow");
}
cores[3].addEventListener('click',changeColorGreen)
function changeColorGreen() {
  corSelecionada = ("green");
}
    


for (var i = 0 ; i < pixels.length; i+=1){
  pixels[i].addEventListener('click',pintar)
}
    

function disablePintar(){
  window.pintar = function(){};
}

      function pintar(event) {
          if (corSelecionada == "blue"){
            let elementoClicado = event.target;
            elementoClicado.classList.add('blue')
          }
          else if (corSelecionada == "black"){
            let elementoClicado = event.target;
            elementoClicado.classList.add('black')
          }
          else if (corSelecionada == "white"){
            let elementoClicado = event.target;
            elementoClicado.classList.add('white')
          }
          else if (corSelecionada == "yellow"){
            let elementoClicado = event.target;
            elementoClicado.classList.add('yellow')
          }
          else if (corSelecionada == "red"){
            let elementoClicado = event.target;
            elementoClicado.classList.add('red')
          }
          else if (corSelecionada == "green"){
            let elementoClicado = event.target;
            elementoClicado.classList.add('green')
          }
        else {console.log("nenhuma cor selecionada")}
      }


    








