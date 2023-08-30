
function printHello(name){
    name = "Alexander";
    console.log("Hello there", name);
}

let firstName = "Roger";

/*
printHello(firstName);
console.log(firstName);
*/
function printObjectInfo(obj){
    obj.extra = "This was not there intially!";
    for(let key in obj){
        console.log(key, obj[key]);
    }
}

const student = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25
};
/*
printObjectInfo(student);
console.log(student);
*/

function createStudentInfo(firstName, lastName, age){
    const newStudent = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return newStudent;
}

const student1 = createStudentInfo("Alex", "Miller", 25);
const student2 = createStudentInfo("Martha", "Smith", 23);
const student3 = createStudentInfo("Roger", "Anderson", 28);

console.log(student1);
console.log(student2);
console.log(student3);

student1.extra = "Some extra info here";
console.log(student1);

delete student1.firstName;
console.log(student1);