function randomSelect () {
 let colores = document.getElementsByClassName('color')
 for(i of colores){
   i.addEventListener('click', (event)=>{
    const select = document.querySelector('.selected');
    event.target.classList.toggle('selected');
    select.classList.toggle('selected')
   })
 }
}
randomSelect();