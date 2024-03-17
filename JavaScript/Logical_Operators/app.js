const password = prompt("Enter you password");
if(password.length <= 6 && password.indexOf(' ') === -1){
    console.log("Valid Password");

} else{
    console.log("Invalid Password");
}

const age = 90;
if( (age >= 0 && age <=5) || age >=65){
    console.log("You get in for free");
}
else if (age > 5 && age < 10){
    console.log("You get in for $10");
}
else if (age >= 10 && age < 65){
    console.log("You get in for $20");
}
else{
    console.log("Invalid age");
}

const name = prompt("Enter you name");
if(!name){
    name = prompt("Try again");
}