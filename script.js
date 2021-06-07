const pixels = document.getElementsByTagName("td");
const cores = document.getElementsByClassName("color");
let limpar = document.getElementById("clear-board");
let corSelecionada = ("black");
let eraser = ("false")




cores[0].addEventListener('click', changeColorBlack)
function changeColorBlack() {
  corSelecionada = ("black");
  cores[0].classList.add('selected');  
  cores[1].classList.remove('selected');
  cores[2].classList.remove('selected');
  cores[3].classList.remove('selected');
}
cores[1].addEventListener('click',changeColorRed)
function changeColorRed() {
  corSelecionada = ("red");
  cores[1].classList.add('selected');
  cores[2].classList.remove('selected');
  cores[3].classList.remove('selected');
  cores[0].classList.remove('selected');
}
cores[2].addEventListener('click',changeColorYellow)
function changeColorYellow() {
  corSelecionada = ("yellow");
  cores[2].classList.add('selected');
  cores[1].classList.remove('selected');
  cores[3].classList.remove('selected');
  cores[0].classList.remove('selected');
}
cores[3].addEventListener('click',changeColorGreen)
function changeColorGreen() {
  corSelecionada = ("green");
  cores[3].classList.add('selected');
  cores[0].classList.remove('selected');
  cores[1].classList.remove('selected');
  cores[2].classList.remove('selected');
}
    


for (var i = 0 ; i < pixels.length; i+=1){
  pixels[i].addEventListener('click',pintar)
}


      function pintar(event) {
          if (corSelecionada == "blue"){
            let elementoClicado = event.target;
            elementoClicado.classList.add('blue')
          }
          else if (corSelecionada == "black"){
            let elementoClicado = event.target;
            elementoClicado.classList.remove("red","yellow",'green','white','selected');
            elementoClicado.classList.add('black','selected')
          }
          else if (corSelecionada == "white"){
            let elementoClicado = event.target;
            elementoClicado.classList.remove("red","yellow",'green','black');
            elementoClicado.classList.add('white')
          }
          else if (corSelecionada == "yellow"){
            let elementoClicado = event.target;
            elementoClicado.classList.remove("red","white",'green','black');
            elementoClicado.classList.add('yellow')
          }
          else if (corSelecionada == "red"){
            let elementoClicado = event.target;
            elementoClicado.classList.remove("yellow","white",'green','black');
            elementoClicado.classList.add('red')
          }
          else if (corSelecionada == "green"){
            let elementoClicado = event.target;
            elementoClicado.classList.remove("red","white",'yellow','black');
            elementoClicado.classList.add('green')
          }
        else {console.log("nenhuma cor selecionada")}
      }


    








