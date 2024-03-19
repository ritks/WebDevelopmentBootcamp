const list = [];
let input = prompt("What would you like to do?");
while (input !== "quit") {
    if (input === "new") {
        let item = prompt("What would you like to add to the todo list?");
        list.push(item);
    }
    else if(input === "list"){
        console.log("*********");
        for(let i = 0; i < list.length; i++){
            console.log(`${i}: ${list[i]}`);
        }
        console.log("*********");
    }
    else if(input === "delete"){
        let toDelete = parseInt(prompt("What is the index of the item you would like to delete?"));
        if(toDelete >= 0 && toDelete < list.length){
            list.splice(toDelete, 1);
        }

    }
    else{
        input = prompt("Not recognized, please enter a valid command.");
    }
}
console.log("Ok you quit");
