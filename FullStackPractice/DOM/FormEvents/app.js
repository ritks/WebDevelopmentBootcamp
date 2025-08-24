// form events
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    setTimeout(() => console.log("submitted"), 3000)
    
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = "";
});

list.addEventListener("click", function (e) {
    console.log("click on ul");
    console.log(e);
    if (e.target.nodeName === "LI"){
        e.target.remove();
    }
});