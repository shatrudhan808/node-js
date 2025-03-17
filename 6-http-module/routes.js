const http = require('http');

const server = http.createServer((req, res) => {
   
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        res.end();
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('About Page');
        res.end();
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Page Not Found');
        res.end();
    }
});

const port = 3000;
server.listen(port, () => {
    console.log('Server is running on port',port);
});