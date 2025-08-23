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
console.log(firstBold.parentElement);
const paragraph = firstBold.parentElement;
console.log(paragraph.children);

let squareImg = document.querySelector(".square");
// use nextElement sibling and prevElementSibling because nextSibling and prevSibling give nodes, which often contain white space and text nodes
console.log(squareImg.nextElementSibling);
console.log(squareImg.prevElementSibling);

const newImage = document.createElement("img");
newImage.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
newImage.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "I am NEW";
document.body.appendChild(newH3);

const p = document.querySelector("p");
p.append("appending new text", "appending more text");
const newB = document.createElement("b");
newB.append("bolded text lol");
document.querySelector("h1").insertAdjacentElement("afterend", newB);
console.log(document.querySelector("h1").nextElementSibling === newB);

// removing elements
newB.parentElement.removeChild(newB);
newImage.remove();
