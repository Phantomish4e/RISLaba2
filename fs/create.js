import { writeFile } from 'node:fs';

const create = async () => {
    // Write your code here 
    writeFile("./JavaScript/mitso-nodejs-basic-main/src/fs/files/fresh.txt", "I am fresh and young", (err) => {
        if (err) throw console.log('FS operation failed');
            console.log("Файл создан");
        });
};

await create();