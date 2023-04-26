import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGunzip} from "node:zlib";
const decompress = async () => {
    // Write your code here 
    const readableStream = createReadStream('src/zip/files/fileToCompress.txt.gz')
    const gzip = createGunzip()
    const dest = createWriteStream('src/zip/files/fileToCompress1.txt')
    pipeline(readableStream,gzip,dest,(err)=>{
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
          }
    })
};

await decompress();