import {rename} from 'node:fs'

const renam = async () => {
    // Write your code here
    
    rename('./JavaScript/mitso-nodejs-basic-main/src/fs/files/wrongFilename.txt','./JavaScript/mitso-nodejs-basic-main/src/fs/files/properFilename.md', (err) => {
        if (err) throw console.log('FS operation failed');
            console.log("Файл переименован");
        });
};

await renam();