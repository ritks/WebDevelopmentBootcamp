let player1Score = 0;
let player2Score = 0;

const playTo = document.querySelector("#playTo");
let playingTo = parseInt(playTo.value);
playTo.addEventListener("change", () =>{
    playingTo = parseInt(playTo.value);
    // console.log(playingTo);
    if (playingTo > player1Score || playingTo > player2Score){
        resetBoard();
    }
});

const h1 = document.querySelector("#score");
const player1Display = document.querySelector("#player1Display");
const player2Display = document.querySelector("#player2Display");
const player1 = document.querySelector("#player1");
player1.addEventListener("click", () => {
    player1Score++;
    player1Display.innerText = player1Score;
    if (player1Score === playingTo){
        player1Display.style.color = "green";
        player2Display.style.color = "red";
        player1.toggleAttribute("disabled");
        player2.toggleAttribute("disabled");
    }
});
const player2 = document.querySelector("#player2");
player2.addEventListener("click", () => {
    player2Score++;
    player2Display.innerText = player2Score;
    if (player2Score === playingTo){
        player2Display.style.color = "green";
        player1Display.style.color = "red";
    }
});

const reset = document.querySelector("#reset");
const resetBoard =  () => {
    player1Display.style.color = "black";
    player2Display.style.color = "black";
    player1Display.innerText = "0";
    player2Display.innerText = "0";
    player1Score = 0;
    player2Score = 0;
    player1.removeAttribute("disabled");
    player2.removeAttribute("disabled");
}
reset.addEventListener("click", resetBoard);