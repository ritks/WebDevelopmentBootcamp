let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum){
    maximum = parseInt(prompt("Enter the maximum number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess (Type q to quit)");
let attempts = 1;
while (parseInt(guess) !== targetNum){
    if(guess === 'q'){
        break;
    }
    guess = parseInt(guess);
    if(guess > targetNum){
        guess = (prompt("Too high, enter a new guess"));
        attempts++;
    }
    else if (guess < targetNum){
        guess = (prompt("Too low, enter a new guess"));
        attempts++;
    }
    else{
        guess = prompt("Invalid input, please enter a number or q to quit");
    }
}

if(guess === 'q'){
    console.log("You quit...")
}
else{
    console.log(`Congrats, you win, it took you ${attempts} guesses!`);
}
