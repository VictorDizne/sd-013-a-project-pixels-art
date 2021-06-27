const requisito1 = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.setAttribute("id", "title");
  h1.innerText = "Paleta de Cores";
  header.appendChild(h1);
  document.body.appendChild(header);
}

const requisito2 = () => {
/*    let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);
let rgb = `rgb(${r}, ${g}, ${b})`;
let bgr = `rgb(${b}, ${g}, ${r})`;
let grb = `rgb(${g}, ${b}, ${r})`;
const cores = ['black',rgb, bgr, grb]; */
let rgbAleatorio = () =>  `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
  const cores = ['black', rgbAleatorio(), rgbAleatorio(), rgbAleatorio()]; 
  const divCores = document.createElement('div');
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'color-palette');
  ul.style.display = 'flex';
  ul.style.listStyle = 'none';
  ul.style.gap = '10px'

  for (let index = 0; index < cores.length; index += 1) {
      const cor = cores[index];
      const li = document.createElement('li');
      const estilo = li.style;
      li.classList.add('color');
      estilo.backgroundColor = cor;

      if (estilo.backgroundColor === 'black') {
          li.classList.add('selected');
      }

      estilo.border = '1px solid black';
      estilo.height = '40px';
      estilo.width = '40px';
      ul.appendChild(li);
      divCores.appendChild(ul);
      document.body.appendChild(divCores);
  }
}

const requisito4 = (numero) => {
  const ulPixel = document.createElement('ul');
  document.body.appendChild(ulPixel);
  ulPixel.setAttribute('id', 'pixel-board');
  for (let index = 0; index < numero; index += 1) {
      const divPixels = document.createElement('div');
      divPixels.style.display = 'flex'
      ulPixel.appendChild(divPixels);
      for (let jindex = 0; jindex < numero; jindex += 1) {
          const liPixels = document.createElement('li');
          liPixels.classList.add('pixel');
          divPixels.appendChild(liPixels);
      }
  }
}

const requisito7 = () => {
  const selectColors = document.querySelectorAll('.color');
  for (const color of selectColors) {
      color.addEventListener('click', (event) => {
          const selected = document.querySelector('.selected');
          selected.classList.remove('selected');
          event.target.classList.add('selected');
      })
  }
}

const requisito8 = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
      pixel.addEventListener('click', () => {
          const corSelected = document.querySelector('.selected');
          pixel.style.backgroundColor = corSelected.style.backgroundColor;
      });
  }
}

const requisito9 = () => {
  const ulPixel = document.querySelector('#pixel-board');
  const botaoApaga = document.createElement('button');
  const divBotoes = document.createElement('div');
  divBotoes.setAttribute('id', "div-botoes");
  botaoApaga.innerHTML = 'Limpar';
  botaoApaga.setAttribute('id', 'clear-board');
  divBotoes.appendChild(botaoApaga);
  document.body.insertBefore(divBotoes, ulPixel);
  
  botaoApaga.addEventListener('click', () => {
      const pixels = document.querySelectorAll('.pixel');
      for (const pixel of pixels) {
          pixel.style.backgroundColor = '#ffff';
      }
  })
}

const requisito10 = () => {
  const divBotoes = document.querySelector('#div-botoes');
  const input = document.createElement('input');
  input.setAttribute('type','number');
  input.setAttribute('min','1');
  input.setAttribute('id', 'board-size');
  const botaoAumentar = document.createElement('button');
  botaoAumentar.setAttribute('id', 'generate-board');
  botaoAumentar.innerHTML = "VQV";
  divBotoes.appendChild(input);
  divBotoes.appendChild(botaoAumentar);
  
  botaoAumentar.addEventListener('click', () => {
      if(input.value === '') {
        return alert('Board inválido!');
      }
      if(input.value < 5) {
          input.value = 5;
      }
      if(input.value > 50) {
          input.value = 50;
      }
      const ulPixel = document.querySelector('#pixel-board');
      ulPixel.remove();
      requisito4(input.value);
      requisito8();
  })
}

window.onload = () => {
  requisito1();
  requisito2();
  requisito4(5);
  requisito7();
  requisito8();
  requisito9();
  requisito10();
}
