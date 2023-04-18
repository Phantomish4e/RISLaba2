import {readFile} from 'node:fs'

const read = async () => {
    // Write your code here 
    readFile('JavaScript/mitso-nodejs-basic-main/src/fs/files/fileToRead.txt','utf-8', (err, data) => {
        if (err) throw console.log('FS operation failed', err);
        console.log(data);
    });
};

await read();