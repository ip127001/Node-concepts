var https = require("https");
var fs = require("fs");

var req = https.get("https://en.wikipedia.org/wiki/Wiki", function(res){
    var responseBody = "";

    console.log("response from server started \n");

    console.log(`Server status: ${res.statusCode}`);

    console.log("response headers: %j", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", function(chunk){
        console.log(chunk);
    });

    res.on("data", function(chunk){
        console.log(`chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", function(){
        fs.writeFile("george_washington.html", responseBody, function(err){
            if(err) {
                throw err;
            }
            else {
                console.log("file downloaded");
            }
        });
    });

});


req.on("error", function(err){
    console.log(`${err.message}`);
});
req.end();