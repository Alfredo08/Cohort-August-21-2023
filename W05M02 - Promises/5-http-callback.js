const request = require('request');

request.get('https://jsonplaceholder.typicode.com/posts', {json: true}, (error, response, body) => {
    if(error){
        throw Error("Something went wrong while retrieving the information", error);
    }
    body.forEach((element) => {
        console.log(element.id, element.title);
    });
});