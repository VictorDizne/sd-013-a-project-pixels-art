window.onload = function () {   
   let color = document.getElementsByClassName("color");
   let line = document.getElementById("pixel-board");
   

   geraCor();
   gerarBoard2(5);
   gerarLines();






   function randomR(){
       let r = parseInt(Math.random() * 255);         
       return r;
   }
   function randomG(){
    let g = parseInt(Math.random() * 255);         
    return g;
   }
   function randomB(){
    let b = parseInt(Math.random() * 255);      
    return b;
   }       
   //console.log("rgb("+randomR()+","+randomG()+","+randomB()+")");
   
   function geraCor(){       
   for (let index = 0; index < color.length; index+=1) {
        if (index == 0) {
           color[index].style.backgroundColor="black"; 
           color[index].classList.add("selected");
        }  
         else{
           color[index].style.backgroundColor = "rgb("+randomR()+","+randomG()+","+randomB()+")";
         }       
       }          
   }

   function selected(){
    for (let index = 0; index < color.length; index+=1) {
        color[index].addEventListener("click",(event)=>{
            let aux = document.getElementsByClassName("selected")[0];
            aux.classList.remove("selected");
            event.target.classList.add("selected");
        })
        
    }
   }
   selected();
   




   function gerarLines(){
    let boxSize = document.querySelector("input[name=size-board]");
    let pressButton = document.querySelector("button[name=button-board");
    pressButton.addEventListener("click",function(){
        if (boxSize.value ==""){
            alert("Board inválido!");
        }
        else if(parseInt(boxSize.value) < 5){
            console.log("5");            
            gerarBoard(5);            
        }        
        else if(parseInt(boxSize.value) > 50){
            console.log("50");            
            gerarBoard(50);            
        }    
        else {
            console.log(boxSize.value);            
            gerarBoard(parseInt(boxSize.value));            
        }    
    })
    
   }

   function gerarBoard(boxSize){
     
     for (let index =0; index < boxSize; index+=1) {
        let newDiv = document.createElement("div");
        if (index >4){
            newDiv.className = "line";
            line.appendChild(newDiv);
        }        
        let colum = document.getElementsByClassName("line");
        for (let index2 = 0; index2 < boxSize; index2+=1){
            if (index2 >4 || index > 4){
                let newCol = document.createElement("div");
                newCol.className = "pixel";   
                colum[index].appendChild(newCol);  
            }
                            
                   
                      
         }          
     }

     let pixel = document.getElementsByClassName("pixel");
    for (let index = 4; index < pixel.length; index+=1) {
        pixel[index].addEventListener("click",colorir);
        
    }      
   
}
function gerarBoard2(boxSize){
     
    for (let index =0; index < boxSize; index+=1) {
       let newDiv = document.createElement("div");
       newDiv.className = "line";
       line.appendChild(newDiv);
       let colum = document.getElementsByClassName("line");
       for (let index2 = 0; index2 < boxSize; index2+=1){
           let newCol = document.createElement("div");
           newCol.className = "pixel";            
           colum[index].appendChild(newCol);            
                     
        }          
    }

    let pixel = document.getElementsByClassName("pixel");
   for (let index = 0; index < pixel.length; index+=1) {
       pixel[index].addEventListener("click",colorir);
       
   }      
  
}






    function selectorColor(){
        let cor = document.getElementsByClassName("selected")[0].style.backgroundColor;
        console.log(cor);
        return cor;
    }

    
 

    
     
    function colorir(){
        this.setAttribute("style",`background-color:${selectorColor()}`);//
    }

    
     
   

   

}
   
  
    
    
