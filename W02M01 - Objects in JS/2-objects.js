
const book = {
    title: "Title of book 1",
    authors: ["Author A", "Author B", "Author C"],
    numOfPages: 365,
    isPublished: true,
    printHello: function(name){
        console.log("Hello there", name);
    },
    printHello2(name){
        console.log("Hello there", name);
    },
    volumeInfo: {
        datePublished: '10-20-2015',
        numPrintedCopies: 1000000
    }
};

let students = [{
    firstName: "Alex",
    lastName: "Miller",
    age: 25
},{
    firstName: "Martha",
    lastName: "Smith",
    age: 23
}];

/*
    function printHello(name){
        console.log("Hello there", name);
    }
*/


/* console.log(book);
console.log("Authors", book.authors);
console.log("Authors", book['authors']);
let title = 'title';
console.log("Title", book[title]);
console.log(book['authors'][2]);
console.log(book.authors[2]);

book.printHello("Alex");
book.printHello2("Alex");
book.printHello("Martha");
book['printHello']("Roger");
*/
console.log(book.volumeInfo.datePublished);
console.log(students[0].age);
console.log(students[0]['age']);

