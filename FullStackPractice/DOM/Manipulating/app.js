const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const h2 = document.querySelector("h2");
h2.setAttribute("class", "purple");
h2.setAttribute("class", "border");

h2.classList.add("purple");
h2.classList.remove("border");
h2.classList.contains("border");
h2.classList.toggle("purple");
h2.classList.toggle("purple");


const firstBold = document.querySelector("b");
console.log(firstBold.parentElement)
const paragraph = firstBold.parentElement;
console.log(paragraph.children)

let squareImg = document.querySelector(".square");
// use nextElement sibling and prevElementSibling because nextSibling and prevSibling give nodes, which often contain white space and text nodes
console.log(squareImg.nextElementSibling)
console.log(squareImg.prevElementSibling)