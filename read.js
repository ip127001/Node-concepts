var fs = require("fs");
var path = require("path");

fs.readdir("./lib", function (err, files) {
    if (err) throw err;

    files.forEach(function (fileName) {
        var filePath = path.join(__dirname, "lib", fileName);
        var stats = fs.statSync(filePath);

        fs.readFile(filePath, "utf-8", function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    })
});