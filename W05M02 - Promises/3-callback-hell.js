const fs = require('fs');

fs.readFile('./message.txt', {encoding: 'UTF-8'}, (errorReadingFile, dataFromMessage) => {
    if(errorReadingFile){
        throw Error("Something went wrong while reading the message.txt file!", errorReadingFile);
    }

    let data = "Copy: " + dataFromMessage;
    fs.writeFile('./copy.txt', data, {encoding: 'UTF-8'}, (errorWritingFile) => {
        if(errorWritingFile){
            throw Error("Something went wrong while writing into the copy.txt file!", errorWritingFile);
        }
        
        fs.readFile('./copy.txt', {encoding: 'UTF-8'}, (errorReadingFile2, dataFromCopy) => {
            if(errorReadingFile2){
                throw Error("Something went wrong while reading the message.txt file!", errorReadingFile2);
            }
            console.log(dataFromCopy);
        });
    });
});