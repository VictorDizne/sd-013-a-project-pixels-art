const desafio1 = () => {
  const h1 = document.createElement('h1');
  const divTitleAlign = document.createElement('div');
  h1.setAttribute('id', 'title');
  h1.innerText = 'Paleta de Cores';
  divTitleAlign.setAttribute('id', 'title-align');
  divTitleAlign.appendChild(h1);
  const header = document.createElement('header');
  header.setAttribute('id', 'topper');
  header.appendChild(divTitleAlign);
  document.body.appendChild(header);
};
desafio1();
