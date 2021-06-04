let pixels = document.getElementsByTagName("td")

let corSelecionada = "red"

  function pintar(event){
    if (corSelecionada == "blue"){
      let elementoClicado = event.target;
      elementoClicado.classList.add('blue')
    }
    else if (corSelecionada == "black"){
      let elementoClicado = event.target;
      elementoClicado.classList.add('black')
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
  else {console.log("oi")}
  }
      for (var i = 0 ; i < pixels.length; i+=1){
      pixels[i].addEventListener('click',pintar)
  }
        
      
    








