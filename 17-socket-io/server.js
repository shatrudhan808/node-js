

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');


const app = express();

// create http server
const server = http.createServer(app);

// create socket.io server
const io = socketIo(server);

app.use(express.static('public'));

const users = new Set();

io.on('connection', (socket) => {
    console.log('A user connected'); 
    // handle the user when they join chat
    socket.on('join', (userName) => {
        users.add(userName);
        socket.userName = userName
        // broadcast to all users that a new user has joined
        io.emit('userJoined', userName);
        // send the updated list of users to all users
        io.emit('userList', Array.from(users)); 
    });


    // handle incoming messages
    socket.on('chatMessage', (message)=>{
        // broadcast the recieved message
        io.emit('chatMessage', message)
    })



    // handle user disconnection
    socket.on('discpnnect', ()=>{
        console.log('user is disconnected');
        users.forEach(user =>{
            if(user === socket.userName){
                users.delete(user)

                io.emit('userLeft', user)

                io.emit('userList', Array.from(users))
            }
        })
        
    })
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});