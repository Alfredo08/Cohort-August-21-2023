/* Primitive data types */
// Numbers
let num = 25;
console.log(num, typeof(num));

// Booleans
let graduated = false;
console.log(graduated, typeof(graduated));

// Strings
let message = "Hey there class of August 21st!";
console.log(message, typeof(message));
console.log("Length", message.length);
console.log("Index 0", message[0]);

// Null
let email = null;
console.log(email, typeof(email));

// Undefined
let firstName;
console.log(firstName, typeof(firstName));

// Symbol
let cookie = Symbol('cookie');
console.log(cookie, typeof(cookie));


/* Composite data types */
// Arrays - objects
let nums = [10, 20, 30, 40, 50];
console.log(nums, typeof(nums));

//nums.push(60);

// Functions - objects 
function addTwoNumbers(num1, num2){
    return num1 + num2;
}

let result = addTwoNumbers(20, 30);
console.log(result, typeof(addTwoNumbers));