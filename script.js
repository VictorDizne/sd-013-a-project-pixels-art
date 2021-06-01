window.onload = selector();

function selector() {
  const black = document.getElementsByClassName("color")[0];
  black.classList.add("selected");
};

let palletBlocs = document.getElementById("color-palette");

palletBlocs.addEventListener("click" ,function selectBlock(clickEvent){

  function selectorChange() {
    let colors = document.getElementsByClassName("color");
    console.log(colors);
    for(let i = 0; i < colors.length; i +=1 ){
      colors[i].classList.remove("selected");
    }
  };
  selectorChange();
  let newSelected = clickEvent.target
  newSelected.classList.add("selected")
  console.log(newSelected);
  }
);



