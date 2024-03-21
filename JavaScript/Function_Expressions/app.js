function add(x, y){
    return x+y;
}

const sum = function(x,y){
    return x+y;
}


// Higher order functions

function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);



// Returning functions

function makeMysteryFunc(){
    const rand = Math.random();
    if(rand < 0.5){
        return function(){
            console.log("Congrats you win!!");
        }
    }
    else{
        return function(){
            alert("THIS IS BAD!");
        }
    }
}


function makeBetweenFunc(min, max){
    return function(num){
        return num >=min && num <=max;
    }
}

// function isBetween(num){
//     return num >- 50 && num <=100;
// }

const isChild = makeBetweenFunc(0,18);
