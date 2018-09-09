var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Web Server</title>
        </head>
        <body>
            <h1>Web Page Served...</h1>
            <p>You are welcome</p>
        </body>
        </html>
    `);
}).listen(3000);

console.log("server running at 3000");