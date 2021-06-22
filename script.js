const colorBlack = document.getElementsByClassName('color')[0];
const colorOne = document.getElementsByClassName('color')[1];
const colorTwo = document.getElementsByClassName('color')[2];
const colorThree = document.getElementsByClassName('color')[3];

colorBlack.style.backgroundColor = 'black';
colorOne.style.backgroundColor = 'green';
colorTwo.style.backgroundColor = 'darkblue';
colorThree.style.backgroundColor = 'yellow';

colorBlack.classList.add('selected');

function selectedColor(color) {
  const currentSelected = document.querySelector('.selected');
  currentSelected.classList.remove('selected');
  color.target.classList.add('selected');
}

colorBlack.addEventListener('click',selectedColor);
colorOne.addEventListener('click',selectedColor);
colorTwo.addEventListener('click',selectedColor);
colorThree.addEventListener('click',selectedColor);