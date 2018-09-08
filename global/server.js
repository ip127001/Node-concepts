var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(req,res){
    var str = fs.createReadStream('./chat.log', 'utf-8');
    str.pipe(res);
})  

server.listen(8080);