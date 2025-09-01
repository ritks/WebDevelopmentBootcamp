// axios.get("https://swapi.tech/api/people/1")
// .then(res => {
//     console.log(res);
// })
// .catch(e => {
//     console.log("ERROR", e)
// })

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/people/${id}`);
        console.log(res.data)
    }
    catch (e) {
        console.log("ERROR", e)
    }
}
getStarWarsPerson(2);
getStarWarsPerson(10);