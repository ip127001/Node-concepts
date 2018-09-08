var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res) {
  console.log(` ${req.method} request for ${req.url}`);

  if (req.url === "/") {
    fs.readFile("./public/index.html", "UTF-8", function(err, html) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (req.url.match(/.css/)) {
    var cssPath = path.join(__dirname, "public", req.url);
    var stream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    stream.pipe(res);
  } else if (req.url.match(/.jpg/)) {
    var jpgPath = path.join(__dirname, "public", req.url);
    var stream = fs.createReadStream(jpgPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/jpg" });
    stream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("page not found");
  }
});

server.listen(3000);
