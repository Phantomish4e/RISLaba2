import {rm} from 'node:fs'

const remove = async () => {
    // Write your code here 
    rm('./JavaScript/mitso-nodejs-basic-main/src/fs/files/fileToRemove.txt',(err) => {
        if (err) throw console.log('FS operation failed');
            console.log("Папка скопирована");
        });
};

await remove();