var fs = require("fs");

if (fs.existsSync("lib")) {
    console.log("directory already there");
} else {

    fs.mkdir("lib", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("directory created");
        }
    })
}