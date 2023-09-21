const addTwoNumbers = (num1, num2, callback) => {
    callback();
    let total = num1 + num2;
    console.log(`The total is ${total}`);
}

const printHello = () => {
    console.log("Hello there class of August 21, 2023!");
}

addTwoNumbers(20, 30, printHello);

setTimeout(() => {
    console.log("This is the message from our timeout");
}, 3000); // <--- This is a promise and it is asynchronous

console.log("I will come up first!");