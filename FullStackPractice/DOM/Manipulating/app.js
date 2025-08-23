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

