
const { log } = require('console');
const path = require('path');

console.log('directory name:', path.dirname(__filename));

console.log('file name:', path.basename(__filename));

console.log('file extension:', path.extname(__filename));

const joinedPath = path.join(__dirname, 'test', 'hello.html');
log('joined path:', joinedPath);

const absolutePath = path.resolve(__dirname, 'test', 'hello.html');

console.log('absolute path:', absolutePath);

const normalisedPath = path.normalize('C://test//hello.html');
console.log('normalised path:', normalisedPath);
