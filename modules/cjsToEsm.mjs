import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFileSync } from 'fs';
import './files/c.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObjectA=readFileSync('src/modules/files/a.json','utf-8');
let unknownObjectB=readFileSync('src/modules/files/b.json','utf-8');

if (random > 0.5) {
    console.log(unknownObjectA); 
} else {
    console.log(unknownObjectB);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObjectA);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObjectB,
    myServer,
};

