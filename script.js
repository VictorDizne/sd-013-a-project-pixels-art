let blackColor = document.getElementById('black');
blackColor.classList.add("selected");
let greenColor = document.getElementById('lightgreen');
let blueColor = document.getElementById('darkblue');
let yellowColor = document.getElementById('yellow');  
let selecionado = document.querySelector('.selected');
let cssSelecionado = window.getComputedStyle(selecionado, null).getPropertyValue("background-color"); 

function changeClassSelected() {   
    greenColor.addEventListener('click', function() {
        greenColor.classList.add('selected');
        blackColor.classList.remove('selected');
        yellowColor.classList.remove('selected');
        blueColor.classList.remove('selected');
        selecionado = document.querySelector('.selected');
        cssSelecionado = window.getComputedStyle(selecionado, null).getPropertyValue("background-color");   
        
    })
    yellowColor.addEventListener('click', function() {
        yellowColor.classList.add('selected');
        blackColor.classList.remove('selected');
        greenColor.classList.remove('selected');
        blueColor.classList.remove('selected');
        selecionado = document.querySelector('.selected');
        cssSelecionado = window.getComputedStyle(selecionado, null).getPropertyValue("background-color");  
        
    })
    blueColor.addEventListener('click', function() {
        blueColor.classList.add('selected');
        blackColor.classList.remove('selected');
        yellowColor.classList.remove('selected');
        greenColor.classList.remove('selected');
        selecionado = document.querySelector('.selected');
        cssSelecionado = window.getComputedStyle(selecionado, null).getPropertyValue("background-color");   

    })
    blackColor.addEventListener('click', function() {
        blackColor.classList.add('selected');
        greenColor.classList.remove('selected');
        yellowColor.classList.remove('selected');
        blueColor.classList.remove('selected');
        selecionado = document.querySelector('.selected');
        cssSelecionado = window.getComputedStyle(selecionado, null).getPropertyValue("background-color");   
        
    
    })
}
    
function changeColor(){       
    let branco = document.querySelectorAll('.pixel');
    for(let index = 0; index < branco.length; index += 1){
            branco[index].addEventListener('click', function(){
            let cssBranco = window.getComputedStyle(branco[index], null).getPropertyValue("background-color");
            if(cssBranco !== cssSelecionado){
                branco[index].style.backgroundColor = cssSelecionado;
            } else {
                branco[index].style.backgroundColor = 'white';
            }
            
        })
        
    }  
}

function clearBoard(){
    let posicao = document.querySelector('#botao');
    console.log(posicao);
    let buttonClear = document.createElement('button');
    buttonClear.id = "clear-board";
    buttonClear.innerHTML = 'Limpar';
    posicao.appendChild(buttonClear);
    let quadro = document.querySelector('#pixel-board');
    let cssQuadro = window.getComputedStyle(quadro, null).getPropertyValue("background-color");
    console.log(cssQuadro);
    if(cssQuadro !== 'rgb(255, 255, 255)'){
        cssQuadro = 'rgb(255, 255, 255)';
    }
    
   
}


changeClassSelected();
changeColor();
clearBoard();