var fs = require('fs');

function readFileArray(filePath, cb) {
    fs.readFile(filePath, function (err, data) {
        if (err) return cb(err);

        const lines = data.toString().trim().split('\n');
        return cb(null, lines);
    })
}

readFileArray('../numbers.txt', function (err, lines) {
    if (err) throw err;

    var numbers = lines.map(Number);
    var oddNum = numbers.filter(n => n % 2 === 1);
    console.log("odd numbers", oddNum.length);
})