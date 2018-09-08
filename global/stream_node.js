var fs = require("fs");

var stream = fs.createReadStream('./chat.log');

var data = "";

stream.once('data', function(){
    console.log('\n\n\n');
    console.log('reading files');
    console.log('\n\n\n');
});

stream.on('data', function(chunk){
    process.stdout.write(`chunk : ${chunk.length}`);
    data += chunk;     
});

stream.on('end', function(){
    console.log('\n\n\n');
    console.log('close reading files');
    console.log('\n\n\n');
})