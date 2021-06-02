let cores = document.getElementsByClassName('color');




function cores2() {
  let r = Math.ceil(Math.random() * 255 );
  let g = Math.ceil(Math.random() * 255 );
  let b = Math.ceil(Math.random() * 255 );
  return rgb(r,g,b);
}

function req2() {
  for (let i = 0; i < cores.length; i += 1){
    if (i === 0) {
      cores[i].style.backgroundColor = 'black';

    } else {
      cores[i].style.backgroundColor = cores2;
    }
  }
}


