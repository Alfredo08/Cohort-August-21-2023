const requestPromise = require('request-promise');

const settings = {
    uri : 'https://jsonplaceholder.typicode.com/posts',
    json : true
};

requestPromise(settings)
    .then((responseJSON) => {
        responseJSON.forEach((element) => {
            console.log(element.id, element.title);
        });
    })
    .catch((error) => {
        console.log(error);
    });

