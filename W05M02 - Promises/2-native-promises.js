
const myFirstPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if(randomNumber >= 0.5){
        resolve(`Successful number greater than 0.5 = ${randomNumber}`);
    }
    else{
        reject(`Unsuccessful number lesser than 0.5 = ${randomNumber}`);
    }
});

console.log("First");
myFirstPromise
    .then((response) => {
        console.log("Third");
        console.log("Success");
        console.log(response);
    })
    .catch((error) => {
        console.log("Third");
        console.log("Error");
        console.log(error);
    });
console.log("Second");