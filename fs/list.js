import {readdir} from 'node:fs'

const list = async () => {
    // Write your code here 
    readdir('JavaScript/mitso-nodejs-basic-main/src/fs/files', (err, file) => {
        if (err) throw console.log('FS operation failed', err);
        console.log(file);
      });
};

await list();