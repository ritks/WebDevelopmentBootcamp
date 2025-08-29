// async function hellow() {    
// }

// const sing = async () => {
//     throw new Error("UH OH")
//     return "LALALALALA"
// }

// sing()
// .then((data) => {
//     console.log("Promise resolved with: ", data)
// })
// .catch((error) => {
//     console.log("OH NO, promise rejected")
//     console.log(err)
// })

const login = async (username, password) => {
    if (!username || !password) throw "Missing credentials"
    if (password === "corgifeetarecute") return "WELCOME!"
    throw "Invalid Password"
}

login("asddsa")
    .then(msg => {
        console.log("Logged in")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })