// const btn = document.querySelector("#V2");

// btn.onclick = function () {
//     console.log("You clicked v2");
// }

// btn.onmouseenter = function () {
//     console.log("AHHHHHHHH ENTERED");
// }

// const btn3 = document.querySelector("#V3");
// btn3.addEventListener("click", () => alert("clicked"))

// function twist () {
//     console.log("Twist");
// }
// function shout () {
//     console.log("shout");
// }

// const tasButton  = document.querySelector("#tas");
// // tasButton.onclick = twist;
// // tasButton.onclick = shout;
// tasButton.addEventListener("click", twist, shout)
const h1 = document.querySelector("h1");
const btn = document.querySelector("#randColor");
btn.addEventListener("click", function (){
    const newColor = randomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomColor = () => {
    const colors = [];
    for (let i = 0; i < 3; i++){
        colors.push(Math.floor(Math.random() * 256) + 1)
    }
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}