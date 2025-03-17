const fs = require('fs')


function person(name, callback){
    console.log(`Person's name is ${name}`);
    callback();
}

function address(){
    console.log('Address is: india');
    
}
person('John', address); 

fs.readFile("index.txt", 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

