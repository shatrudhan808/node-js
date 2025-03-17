
const fs = require('fs');
const path = require('path');
// sync version
// create a data folder
const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Data folder created');
}
// create a file path
const filePath = path.join(dataFolder, 'data.txt');
fs.writeFileSync(filePath, JSON.stringify({name: 'John Doe', age: 30}));
console.log('Data file created');

// append data to the file

fs.appendFileSync(filePath, '\nHello World!');
console.log('Data appended to the file');

// read the file
const data = fs.readFileSync(filePath, 'utf-8');
console.log("file data : ",data);

// async version

const asyncFilePath = path.join(dataFolder, 'async-data.txt');
fs.writeFile(asyncFilePath, JSON.stringify({name: 'John Doe', age: 30}), (err) => {
  if(err) throw err;
  console.log('Async Data file created');
});

// append data to the file
fs.appendFile(asyncFilePath, '\nHello World!', (err) => {
  if(err) throw err;
  console.log('Async Data appended to the file');
});

// read the file
fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
  if(err) throw err;
  console.log("Async file data : ",data);
});