const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(el){
    console.log(el)
});

const doubles = numbers.map(function(num){
    return num*2;
});

console.log(doubles);