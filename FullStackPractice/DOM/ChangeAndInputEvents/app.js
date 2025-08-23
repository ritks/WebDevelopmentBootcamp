const input = document.querySelector("input");
// input.addEventListener("change", function (e) {
//     console.log("change happened");
// });

const h1 = document.querySelector("h1");
input.addEventListener("input", function (e) {
    // console.log("input happened");
    h1.innerText = input.value;
});
