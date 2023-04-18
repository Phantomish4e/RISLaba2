import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
const calculateHash = async () => {
    // Write your code here 
    const file=readFileSync("src/hash/files/fileToCalculateHashFor.txt");
    let hash=createHash('sha256').update(file).digest('hex')
    console.log(hash);
};

await calculateHash();