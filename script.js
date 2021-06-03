function req41() {
  let box1 = document.querySelector('#pixel-board');
 
  for (let i = 0; i < 5; i += 1) {
    let row = document.createElement('div');
    row.className = 'row';
    box1.appendChild(row);
    for (let i = 0; i < 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      row.appendChild(pixels);
  
   }
  }
}
req41();

function req4() {

  let makebox = document.querySelector('#generate-board');

  
  makebox.addEventListener('click', function () {

  let box1 = document.querySelector('#pixel-board');
  let areaofbox = document.querySelector('#board-size').value;
  let number = areaofbox;
  
  for (let i = 0; i < number; i += 1) {
  let row = document.createElement('div');
  row.className = 'row';
  box1.appendChild(row);
    for (let i = 0; i < number; i += 1) {
    let pixels = document.createElement('div');
    pixels.className = 'pixel';
    row.appendChild(pixels);
  
   }
  }
 })
}
req4();
