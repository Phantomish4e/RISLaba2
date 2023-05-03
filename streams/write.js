import {createWriteStream} from 'node:fs';
import { stdin } from 'node:process';
const write = async () => {
    // Write your code here 
    const WriteableStream=createWriteStream('src/streams/files/fileToWrite.txt')
    stdin.pipe(WriteableStream)
};

await write();