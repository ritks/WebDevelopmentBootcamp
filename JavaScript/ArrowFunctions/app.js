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
setTimeout(() => {
    console.log("Im here")
}, 3000);
console.log("Goodbye");


let id = setInterval(() => {
    console.log(Math.random())
}, 3000);
// to clear interval, use
// clearInterval(id);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
const odds = numbers.filter(num => num % 2 === 1);
// can combine methods like map/filter/some/every 


//reduce puts the return value of the function as the second parameter of the next iteration
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const total = prices.reduce((total, price) =>{
    return total + price;
})

const min = prices.reduce((min, price) =>{
    return Math.min(min, price);
})