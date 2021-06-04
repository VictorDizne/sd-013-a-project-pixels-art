let pixels = document.getElementsByTagName("td")



function pintaAzul(event){
    let elementoClicado = event.target;
    elementoClicado.classList.add('blue')
}


for (var i = 0 ; i < pixels.length; i+=1){
pixels[i].addEventListener('click',pintaAzul)}



