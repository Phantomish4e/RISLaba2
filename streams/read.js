import { createReadStream }from 'node:fs'
import {stdout} from 'node:process';
const read = async () => {
    // Write your code here 
    const ReadableStream=createReadStream('src/streams/files/fileToRead.txt')
    ReadableStream.on('readable', () => {
        stdout.write(`readable: ${ReadableStream.read()}`+'\n');
      });
      ReadableStream.on('end', () => {
        console.log('end');
      });
};

await read();