var fs = require("fs");

var file = fs.createWriteStream('./chat.log');

for (var i = 0; i < 1e6; i++) {
    file.write("rohit is a good boy. rashmi is a good girl \n");
}

file.end();