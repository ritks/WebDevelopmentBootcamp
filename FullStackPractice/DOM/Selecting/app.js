// const allImages = document.getElementsByTagName('img');

// for(let img of allImages){
//     console.log(img.src);
// }


// if the class or tag does not exist, an empty HTML collection is returned
// as opposed to returning null like in getElementById
const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

const links = document.querySelectorAll("p a");


for (let link of links){
    console.log(link.href);
}