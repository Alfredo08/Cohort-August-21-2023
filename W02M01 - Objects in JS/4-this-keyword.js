const student = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25,
    printStudentInfo: function(){
        console.log(this.firstName, this.lastName, this.age);
    },
    addTwoNumbers: function(num1, num2){
        console.log("The result is", num1 + num2);
        this.printStudentInfo();
    }
};

student.addTwoNumbers(50, 100);

const student2 = {
    firstName: "Martha",
    lastName: "Smith",
    age: 23,
    printStudentInfo: function(){
        console.log(this.firstName, this.lastName, this.age);
    },
    addTwoNumbers: function(num1, num2){
        console.log("The result is", num1 + num2);
        this.printStudentInfo();
    }
};

student2.addTwoNumbers(30, 40);
