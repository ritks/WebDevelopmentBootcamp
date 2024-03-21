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
