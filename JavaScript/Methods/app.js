const myMath = {
    PI: 3.14159,
    square(num){
        return num* num;
    },
    cube: function(num){
        return num **3;
    }
}

const cat = {
    name: "Blue Steele",
    color: "Grey",
    breed: "Scottish Fold",
    meow(){
        console.log(`${this.name} says meow.`);
    }
}