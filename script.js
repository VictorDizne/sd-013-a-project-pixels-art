/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */
function setColorClass() {
  const elementToClick = document.querySelector('.color');
  const clickedElement = document.getElementsByClassName('selected');
  const classColor = 'color selected';
  elementToClick.addEventListener('click', function(event) {
    if (clickedElement.length === 0) {
      event.target.className = classColor;
    } else {
      event.target.className = 'color';
    }
  });
}

setColorClass();
