var fs = require("fs");

fs.renameSync("./pro.json", "./object.json");

fs.rename("./lib/notes.md", "./notes.md", function (err) {
    if (err) console.log(err)
    else console.log("files moved");
})