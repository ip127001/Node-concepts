var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    if (req.method == "GET") {
        var stream = fs.createReadStream("./form/form.html", "UTF-8");
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        stream.pipe(res);
    } else if (req.method === "POST") {
        var body = " ";
        req.on('data', function (chunk) {
            body += chunk;
        })
        req.on('end', function () {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(`
                <!docype html>
                <head>
                    <title>form submission</title>
                </head>
                <body>
                <p>${body}</p>
                </body>
                </html>
            `);
        })
    } else {
        res.writeHead(400, {
            "Content-Type": "text/plain"
        });
        res.end('not found');
    }
}).listen(3000);