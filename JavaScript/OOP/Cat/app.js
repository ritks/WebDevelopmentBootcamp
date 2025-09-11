class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log("In pet constructor")
    }

    eat() {
        return `${this.name} is eating!`
    }
}
class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        // this.name = name;
        // this.age = age;
        console.log("In cat constructor")
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOWWW"
    }
}

class Dog extends Pet{
    
    bark() {
        return "WOOF!"
    }

    eat() {
        return `${this.name} scarfs his food!`
    }
}