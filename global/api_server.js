var http = require('http');
var fs = require('fs');
var data = require("./data/data.json")

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/json"
        });
        res.end(JSON.stringify(data));
    } else if (req.url === '/userId') {
        userId(res);
    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.end("not found");
    }
});

function userId(res) {
    var stream = data.Employees;
    res.end(JSON.stringify(stream));
}

server.listen(3000, function (err, data) {
    console.log(`server started on ${server.address().port}`);
})