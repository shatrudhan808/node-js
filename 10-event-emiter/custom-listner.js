const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'hello';
    }
    greet(name){
        this.emit('greeting', `${this.greeting} ${name}`);
    }
}

const myEmitter = new MyEmitter();

myEmitter.on('greeting',(name)=>{
    console.log(name);
})
myEmitter.greet('John');