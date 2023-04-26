import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGzip} from "node:zlib";
const compress = async () => {
    // Write your code here 
    const readableStream = createReadStream('src/zip/files/fileToCompress.txt')
    const gzip = createGzip()
    const dest = createWriteStream('src/zip/files/fileToCompress.txt.gz')
    pipeline(readableStream,gzip,dest,(err)=>{
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
          }
    })
};

await compress();