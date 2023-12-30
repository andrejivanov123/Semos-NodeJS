const http = require('http');

const handler = (req, res) => {
    console.log(req.url);
    console.log(req.headers['user-agent']);
    console.log(req.method);
    console.log(req.url.split('/'));
    const [_, op, a, b] = req.url.split('/');
};

const server = http.createServer(handler);

server.listen(10000, "127.0.0.1", (err) => {
    if(err) console.log('error');
    console.log("Server started on port 10000");
});