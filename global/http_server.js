var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <DOCTYPE html>
        <head>
            <title>html</title>
        </head>
        <body>
            <h1>${req.url}</h1>
            <h2>${req.method}</h2>
        </body>
        </html>
    `);
}).listen(8080);