let cores = document.getElementsByClassName('color');

cores[0].style.backgroundColor="black" 
cores[1].style.backgroundColor="#2c3e50";
cores[2].style.backgroundColor="#7f8c8d";
cores[3].style.backgroundColor="#1abc9c";

cores[0].classList.add('selected');

/* for (let index = 0; index <cores.length; index +=1) {
	cores[index].addEventListener('click', () => {
		cores[index].classList.add('selected');
	});
} */

