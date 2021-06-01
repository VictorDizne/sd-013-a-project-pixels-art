/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable nonblock-statement-body-position */
function setColorClass() {
  const elementToClick = document.querySelectorAll('.color');
  const clickedElement = document.getElementsByClassName('color selected');
  elementToClick.addEventListener('click', function(event) {
    for (let index = 0; index < elementToClick; index += 1) {
      if (elementToClick[index] === event.target) {
        if (clickedElement.length === 0) {
          event.target.className = 'color selected';
        } else {
          event.target.className = 'color';
        }
      }
    }
  });
}

setColorClass();
