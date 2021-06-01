window.onload = () => {
    createPalette();

    function createPalette() {
        const paletteLine = document.querySelector('#color-palette .tr');

        let cell;
        for (let i = 0; i < 4; i++) {
            cell = document.createElement('div');
            cell.className = 'color td';
            cell.style.backgroundColor = getRandomColor();
            paletteLine.appendChild(cell);
        }
    }

    /** Returns a random hexadecimal color except #ffffff (white). */
    function getRandomColor() {
        let color;
        do {
            /* Source: https://css-tricks.com/snippets/javascript/random-hex-color/ */
            color = Math.floor(Math.random() * 16777215).toString(16);
        } while (color.length !== 6 || color == 'ffffff');

        return `#${color}`;
    }
}
