// String type is used to define a group of characters
let word = "whatever";

// Strings are immutable
// Assigning a new value to a string will create a new instance
// Adding anything to a string will concatenate it
let newWord = word + 1;
// newWord is now "whatever1"

// Can use String template literals to evaluate js within a string
let x = 5;
let y = 2;
console.log("X is ${x} and y is ${y}, they add to ${x + y}");
// Expressions within ${} will be evaluated as js 
