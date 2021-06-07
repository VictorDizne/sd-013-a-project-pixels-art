function getNewColor() {
  const symbols = '0123456789ABCDEF';
  let randomColor = '#';
  for (let index = 0; index < symbols.length; index += 1) {
    randomColor += symbols[Math.floor(Math.random() * 16)];
  }
  console.log(randomColor);
}
getNewColor();
