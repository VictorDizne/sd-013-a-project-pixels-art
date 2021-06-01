/* Eventos */
/* Marca a cor na paleta */
function corRandomica() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const randomica = `${r}, ${g}, ${b}`;
  const cor = `rgb(${randomica})`;
  return cor;  
}

function setaPaleta() {
  const elementLiPaleta = document.querySelectorAll('.color');
  elementLiPaleta[0].style.backgroundColor = 'black';
  sessionStorage.setItem('color1', elementLiPaleta[0].style.backgroundColor);
  elementLiPaleta[1].style.backgroundColor = corRandomica();
  sessionStorage.setItem('color2', elementLiPaleta[1].style.backgroundColor);
  elementLiPaleta[2].style.backgroundColor = corRandomica();
  sessionStorage.setItem('color3', elementLiPaleta[2].style.backgroundColor);
  elementLiPaleta[3].style.backgroundColor = corRandomica();
  sessionStorage.setItem('color4', elementLiPaleta[3].style.backgroundColor);
  
  for (let index = 0; index < elementLiPaleta.length; index += 1) {
    elementLiPaleta[index].addEventListener('click', function() {
      switch (index) {
        case 0:
          elementLiPaleta[0].id = 'selected';
          elementLiPaleta[1].id = 'unset';
          elementLiPaleta[2].id = 'unset';
          elementLiPaleta[3].id = 'unset';
          break;
        case 1:
          elementLiPaleta[0].id = 'unset';
          elementLiPaleta[1].id = 'selected';
          elementLiPaleta[2].id = 'unset';
          elementLiPaleta[3].id = 'unset';
          break;
        case 2:
          elementLiPaleta[0].id = 'unset';
          elementLiPaleta[1].id = 'unset';
          elementLiPaleta[2].id = 'selected';
          elementLiPaleta[3].id = 'unset';
          break;
        case 3:
          elementLiPaleta[0].id = 'unset';
          elementLiPaleta[1].id = 'unset';
          elementLiPaleta[2].id = 'unset';
          elementLiPaleta[3].id = 'selected';
          break;
      }
    });
  }
}

function darNomeAosQuadrantes() {
  /* Dou um nome id para cada quadrante */
  const elementLiNomes = document.getElementsByClassName('pixel');
  for (let index = 0; index < elementLiNomes.length; index += 1) {
    elementLiNomes[index].id = index + 1;
  }
}

function darNomeAsLinhas() {
  /* Dou um nome id para cada linha */
  const elementUlNomes = document.getElementsByClassName('linha');
  for (let index = 0; index < elementUlNomes.length; index += 1) {
    elementUlNomes[index].id = index + 1;
  }
}

/* Lê todos os pixels e adiciona o evento click nelas */
function darVidaAosPixels() {
  const elementLiQuadro = document.querySelectorAll('.pixel');
  for (let index = 0; index < elementLiQuadro.length; index += 1) {
    elementLiQuadro[index].addEventListener('click', function() {
      /* Muda a classe para selecionada quando houver o click */
      elementLiQuadro[index].className = 'pixel selectedPixel';
      /* Busca/Puxa todas as classes selecionadas */
      const elementPixelSelected = document.getElementsByClassName('pixel selectedPixel');
      /* Lê todas os elementos selecionados */
      for (let index2 = 0; index2 < elementPixelSelected.length; index2 += 1) {
        /* Se o id que foi alterado para selected for igual ao que será modificando, */
        /* então, ele não faz nada, só altera quando não tiver id igual */
        if (elementLiQuadro[index].id !== elementPixelSelected[index2].id) {
          elementPixelSelected[index2].className = 'pixel';
        }
      }
      const elementSelectedPaleta = document.querySelector('#selected');
      const elementSelectedQuadro = document.getElementsByClassName('pixel selectedPixel');
      let corPaleta = 'white';
      switch (elementSelectedPaleta.className) {
        case 'color colorblack':
          corPaleta = sessionStorage.getItem('color1');
          break;
        case 'color colorred':
          corPaleta = sessionStorage.getItem('color2');
          break;
        case 'color colorblue':
          corPaleta = sessionStorage.getItem('color3');
          break;
        case 'color coloryellow':
          corPaleta = sessionStorage.getItem('color4');
          break;
        default:
          break;
      }
      elementSelectedQuadro[0].style.backgroundColor = corPaleta;
    });
  }
}

function criaBotaoClear() {
  /* Cria o botão Clear - requisito 9 */
  const elementConfig = document.querySelector('#configuracao');
  /* const colorPalette = document.querySelector('#color-palette') */
  const elementButtonClear = document.createElement('button');
  elementButtonClear.id = 'clear-board';
  elementButtonClear.style.height = '20px';
  elementButtonClear.style.width = '80px';
  elementButtonClear.style.marginLeft = '40px';
  elementButtonClear.innerText = 'Limpar';
  elementConfig.appendChild(elementButtonClear);
  /* Executa o clear ao clicar */
  elementButtonClear.addEventListener('click', clearPixels);
  function clearPixels() {
    const buscaPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < buscaPixels.length; index += 1) {
      buscaPixels[index].style.backgroundColor = 'white';
    }
  }
}

function criaBotaoInput() {
  /* Preparando estrutura do Botão de Input */
  const elementConfig = document.querySelector('#configuracao');
  const elementInput = document.createElement('input');
  elementInput.id = 'board-size';
  elementInput.style.marginTop = '15px';
  elementInput.style.marginLeft = '45px';
  elementInput.style.width = '40px';
  elementInput.style.backgroundColor = 'rgb(238,238,238)';
  elementInput.value = '5';
  elementInput.min = '1';
  elementConfig.appendChild(elementInput);
  const elementButtonInput = document.createElement('button');
  elementButtonInput.id = 'generate-board';
  elementButtonInput.innerText = 'VQV';
  elementButtonInput.style.marginTop = '15px';
  elementButtonInput.style.height = '20px';
  elementButtonInput.style.width = '80px';
  elementConfig.appendChild(elementButtonInput);
  elementButtonInput.addEventListener('click', estruturaPainel);
}

function limpaPainel() {
  const elementUlParaLimpar = document.querySelectorAll('.linha');
  for (let index = 0; index < elementUlParaLimpar.length; index += 1) {
    elementUlParaLimpar[index].remove();
  }
}

function montaPainel(quantidade) {
  const elementPixelBoard = document.querySelector('#pixel-board');
  for (let indexLinha = 0; indexLinha < quantidade; indexLinha += 1) {
    const elementLinha = document.createElement('ul');
    elementLinha.className = 'linha';
    elementPixelBoard.appendChild(elementLinha);
    for (let indexColuna = 0; indexColuna < quantidade; indexColuna += 1) {
      const elementLinha = document.getElementsByClassName('linha');
      const elementPixels = document.createElement('li');
      elementPixels.className = 'pixel';
      elementLinha[indexLinha].appendChild(elementPixels);
    }
  }
  darNomeAsLinhas();
  darNomeAosQuadrantes();
  darVidaAosPixels();
}

function estruturaPainel() {
  const inputQuantidade = document.querySelector('#board-size');
  let quantidade = inputQuantidade.value;
  if (quantidade === '') {
    alert('Board inválido!');
  } else {
    if (quantidade > 50) {
      quantidade = 50;
      inputQuantidade.value = '50';
    } else if (quantidade < 5) {
      quantidade = 5;
      inputQuantidade.value = '5';
    }
  }
  const quantidadeFinal = quantidade;
  limpaPainel();
  montaPainel(quantidadeFinal);
}

setaPaleta();
darNomeAosQuadrantes();
darNomeAsLinhas();
darVidaAosPixels();
criaBotaoClear();
criaBotaoInput();
