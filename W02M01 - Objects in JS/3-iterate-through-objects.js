
const student = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25
};

for(let key in student){
    console.log(key, student[key]);
}

let arrayOfKeys = Object.keys(student);
let arrayOfValues = Object.values(student);
console.log(arrayOfKeys);
console.log(arrayOfValues);