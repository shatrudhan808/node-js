
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// register a listener
myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

myEmitter.emit('greet', 'John'); 