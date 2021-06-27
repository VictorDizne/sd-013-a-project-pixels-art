const desafio1 = () => {
  const h1 = document.createElement('h1');
  const divTitleAlign = document.createElement('div');
  const header = document.createElement('header');
  h1.setAttribute('id', 'title');
  h1.innerText = 'Paleta de Cores';
  divTitleAlign.setAttribute('id', 'title-align');
  divTitleAlign.appendChild(h1);
  header.setAttribute('id', 'topper');
  header.appendChild(divTitleAlign);
  document.body.appendChild(header);
};
desafio1();

const desafio2e3e6 = () => {
  const section = document.createElement('section');
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'color-palette');
  section.setAttribute('id', 'palette');
  const rgbAleatorio = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const colors = ['black', rgbAleatorio(), rgbAleatorio(), rgbAleatorio()];
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    const li = document.createElement('li');
    li.setAttribute('class', 'color');
    li.style.backgroundColor = color;
    if (li.style.backgroundColor === 'black') {
      li.classList.add('selected');
    }
    ul.appendChild(li);
    section.appendChild(ul);
    document.body.appendChild(section);
  }
};
desafio2e3e6();

const desafio4e5 = (linhas) => {
  const section = document.createElement('section');
  const ul = document.createElement('ul');
  section.appendChild(ul);
  document.body.appendChild(section);
  section.setAttribute('id', 'pixels');
  ul.setAttribute('id', 'pixel-board');
  for (let i = 0; i < linhas; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('class', 'flex');
    ul.appendChild(div);
    for (let j = 0; j < linhas; j += 1) {
      const li = document.createElement('li');
      li.classList.add('pixel');
      div.appendChild(li);
    }
  }
};
desafio4e5(5);

const desafio7 = () => {
  const colors = document.getElementsByClassName('color');
  const selecteds = document.getElementsByClassName('selected');
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    color.addEventListener('click', (event) => {
      for (let j = 0; j < selecteds.length; j += 1) {
        const selected = selecteds[j];
        selected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
};
desafio7();

const desafio8 = () => {
  const selecteds = document.getElementsByClassName('selected');
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.addEventListener('click', () => {
      for (let j = 0; j < selecteds.length; j += 1) {
        const selected = selecteds[j];
        pixel.style.backgroundColor = selected.style.backgroundColor;
      }
    });
  }
};
desafio8();

const desafio9 = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'div-botoes');
  const button = document.createElement('button');
  const pixels1 = document.getElementById('pixels');
  button.setAttribute('id', 'clear-board');
  button.innerHTML = 'Limpar';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.appendChild(button);
  document.body.insertBefore(div, pixels1);
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      const pixel = pixels[i];
      pixel.style.backgroundColor = 'white';
    }
  });
};
desafio9();

// eslint-disable-next-line max-lines-per-function
const desafio10 = () => {
  const divBotoes = document.querySelector('#div-botoes');
  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('min', '1');
  input.setAttribute('id', 'board-size');
  const botaoAumentar = document.createElement('button');
  botaoAumentar.setAttribute('id', 'generate-board');
  botaoAumentar.innerHTML = 'VQV';
  divBotoes.appendChild(input);
  divBotoes.appendChild(botaoAumentar);
  botaoAumentar.addEventListener('click', () => {
    if (input.value === '') {
      return alert('Board inválido!');
    } if (input.value < 5) {
      input.value = 5;
    } if (input.value > 50) {
      input.value = 50;
    }
    const ulPixel = document.querySelector('#pixel-board');
    ulPixel.remove();
    desafio4e5(input.value);
    desafio8();
  });
};
desafio10();

// let r = Math.floor(Math.random()*256);
// let g = Math.floor(Math.random()*256);
// let b = Math.floor(Math.random()*256);

// let rgb = `rgb(${r}, ${g}, ${b})`;
// let bgr = `rgb(${b}, ${g}, ${r})`;
// let grb = `rgb(${g}, ${r}, ${b})`;

// const cores = ['black',rgb, bgr, grb];
