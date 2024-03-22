// const add = function(x,y){
//     return x+y;
// }


const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

// const rollDie = () =>{
//     return Math.floor(Math.random() * 6) + 1;
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const betterAdd = (x, y) => x + y;

console.log("Hello");
setTimeout(() =>{
    console.log("Im here")
}, 3000);
console.log("Goodbye");


let id =  setInterval(() => {
    console.log(Math.random())
}, 3000);
// to clear interval, use
// clearInterval(id);