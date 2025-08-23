const makeRandomColor = () => {
    const colors = [];
    for (let i = 0; i < 3; i++){
        colors.push(Math.floor(Math.random() * 256) + 1)
    }
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}

const buttons = document.querySelectorAll("button");
for (let button of buttons){
    button.addEventListener("click", colorize)
}
const h1s = document.querySelectorAll("h1");
for (let h1 of h1s){
    h1.addEventListener("click", colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}