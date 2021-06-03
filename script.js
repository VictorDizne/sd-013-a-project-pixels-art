window.onload
sessionStorage.cor = 'black'
let preto = document.querySelector('.black');
preto.classList.toggle('selected');

function selecionarCor (){
    let pegaClasses = document.querySelectorAll('.color');
    for (let index = 0; index < pegaClasses.length; index++) {
        pegaClasses[index].addEventListener('click', function(event) {
            sessionStorage.cor = window.getComputedStyle(pegaClasses[index], null).getPropertyValue("background-color");
            for (let index = 0; index < pegaClasses.length; index++) {
                pegaClasses[index].classList.remove('selected')
                
            }
            event.target.classList.toggle('selected');
            
             
         })
        
    }
        
  
    
}
selecionarCor()
function receberCorS (){
    
    let ganhaCor = document.querySelectorAll('.pixel')
    for (let index = 0; index < ganhaCor.length; index++) {
        ganhaCor[index].addEventListener('click', function(){
            ganhaCor[index].style.backgroundColor = sessionStorage.cor;
        })
        
        
    }
}
receberCorS()
function limpar (){
    let branco = document.querySelectorAll('.pixel');
    
    let botao = document.querySelector('button');
    for (let index = 0; index < branco.length; index++) {
        botao.addEventListener('click', function(){
            let brancao = document.querySelector('#pixel-board');
            brancao.classList.add('branco');
            branco[index].style.backgroundColor = 'white';
             
         })
        
    }
            
        
    
    
    

}
limpar();


    
