function changeClassSelected() {
    let blackColor = document.getElementById('black');
    blackColor.classList.add("selected");
    let greenColor = document.getElementById('lightgreen');
    let blueColor = document.getElementById('darkblue');
    let yellowColor = document.getElementById('yellow');    

    greenColor.addEventListener('click', function() {
        greenColor.classList.add('selected');
        blackColor.classList.remove('selected');
        yellowColor.classList.remove('selected');
        blueColor.classList.remove('selected');
    })
    yellowColor.addEventListener('click', function() {
        yellowColor.classList.add('selected');
        blackColor.classList.remove('selected');
        greenColor.classList.remove('selected');
        blueColor.classList.remove('selected');
    })
    blueColor.addEventListener('click', function() {
        blueColor.classList.add('selected');
        blackColor.classList.remove('selected');
        yellowColor.classList.remove('selected');
        greenColor.classList.remove('selected');
    })
    blackColor.addEventListener('click', function() {
        blackColor.classList.add('selected');
        greenColor.classList.remove('selected');
        yellowColor.classList.remove('selected');
        blueColor.classList.remove('selected');
    })
}


    
function changeColor(){       
    let branco = document.querySelectorAll('.pixel');
    //branco[0].style.backgroundColor = cssSelecionado;

    for(let index = 0; index < branco.length; index += 1){
        
        let selecionado = document.querySelector('.selected');
        let cssSelecionado = window.getComputedStyle(selecionado, null).getPropertyValue("background-color");
        branco[index].addEventListener('click', function(){
            let cssBranco = window.getComputedStyle(branco[index], null).getPropertyValue("background-color");
            if(cssBranco != cssSelecionado){
                branco[index].style.backgroundColor = cssSelecionado;
            } else {
                branco[index].style.backgroundColor = 'white';
            }
            
        })
        
    }  
}


changeClassSelected();
changeColor();