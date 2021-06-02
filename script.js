function startBlack(){
	document.querySelector('#black').classList.add("selected");
}
startBlack();

function removeSelected(){
let color = document.querySelectorAll('.color');
for(let index = 0 ; index< color.length; index +=1){
		if(color[index].classList.contains('selected')){
		color[index].classList.remove("selected");
		}	
	}
}



let color = document.querySelectorAll('.color');
for(let index = 0; index < color.length; index += 1){
    let cores = color[index];
    cores.addEventListener('click', mostreCor);
	
}
console.log(color)

function mostreCor(event){ 
	removeSelected();
 	event.target.classList.toggle("selected") ;
 	console.log(event.target);
}








function pegaCor(){	
let colors = document.querySelectorAll('.colors');

for(let index = 0; index < colors.length; index += 1){
	if(colors[index].classList.contains("selected")){
		return colors[index].style.backgroundColor;
	}
}
}


