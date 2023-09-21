const fs = require('fs');

fs.promises.readFile('./message.txt', {encoding: 'UTF-8'})
    .then((dataFromMessage) => {
        console.log(dataFromMessage);
        let data = "Copy using promises: " + dataFromMessage;
        return fs.promises.writeFile('./copy.txt', data, {encoding: 'UTF-8'});
    })
    .then(() => {
        //console.log(dataAfterWriting);
        return fs.promises.readFile('./copy.txt', {encoding: 'UTF-8'});
    })
    .then((dataFromCopy) => {
        console.log(dataFromCopy);
    })
    .catch((error) => {
        console.log("Something went wrong", error);
    });