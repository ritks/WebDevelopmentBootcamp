const btn = document.querySelector("#V2");

btn.onclick = function () {
    console.log("You clicked v2");
}

btn.onmouseenter = function () {
    console.log("AHHHHHHHH ENTERED");
}

const btn3 = document.querySelector("#V3");
btn3.addEventListener("click", () => alert("clicked"))

function twist () {
    console.log("Twist");
}
function shout () {
    console.log("shout");
}

const tasButton  = document.querySelector("#tas");
// tasButton.onclick = twist;
// tasButton.onclick = shout;
tasButton.addEventListener("click", twist, shout)
