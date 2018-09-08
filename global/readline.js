var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var person = {
    name: '',
    statements: []
};

rl.question('who are you? > ', function (answer) {
    person.name = answer;
  
    var stream = fs.createWriteStream('./lib/person.js');
    
    stream.write(`${person.name}`);
    stream.write("============================ \n");

    rl.setPrompt(`what would ${person.name} say`);
    rl.prompt();
    rl.on('line', function (statement) {

        if (statement.toLowerCase().trim() === 'exit') {
            stream.close();
            rl.close();
        } else {
            person.statements.push(statement);
            rl.setPrompt(`what else ${person.name} say? ('exit' to leave')`);
            stream.write(`* ${statement} \n`);
            rl.prompt();
        }
    });
})

rl.on('close', function () {
    console.log("%s \n %j", person.name, person.statements);
})