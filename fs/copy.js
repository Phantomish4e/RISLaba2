import {copyFile} from 'node:fs';

const copy = async () => {
    // Write your code here 
    copyFile('JavaScript/mitso-nodejs-basic-main/src/fs/files','JavaScript/mitso-nodejs-basic-main/src/fs/files-copy',(err) => {
        if (err) throw console.log('FS operation failed', err);
            console.log("Папка скопирована");
        });
};

await copy();
