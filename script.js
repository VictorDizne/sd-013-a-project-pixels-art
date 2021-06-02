window.onload
sessionStorage.cor = 'black'
let preto = document.querySelector('.black');
preto.addClassName = 'selected';

function selecionarCor (){
    let pegaClasses = document.querySelectorAll('.color');
    for (let index = 0; index < pegaClasses.length; index++) {
        pegaClasses[index].addEventListener('click', function() {
            sessionStorage.cor = window.getComputedStyle(pegaClasses[index], null).getPropertyValue("background-color");
            pegaClasses[index].addClassName = 'selected';
            if (sessionStorage.com != 'black') {
                preto.className = 'color black';
            } else {
                preto.className = 'color black selected'
            }
            return sessionStorage.cor;
             
         })
        
    }
        
  
    
}

function receberCorS (){
    let empurraCor = sessionStorage.cor;
    let ganhaCor = document.querySelectorAll('.pixel')
    for (let index = 0; index < ganhaCor.length; index++) {
        ganhaCor[index].addEventListener('click', function(){
            ganhaCor[index].style.backgroundColor = sessionStorage.cor;
        })
        
        
    }
}

function limpar (){
    let branco = document.querySelectorAll('.pixel');
    let whiteColor = 'rgb(255,255,255)'
    for (let index = 0; index < branco.length; index++) {
        branco[index].addEventListener('click', function(){
           branco[index].style.backgroundColor = whiteColor;
            
        })
        
    }
    
    

}