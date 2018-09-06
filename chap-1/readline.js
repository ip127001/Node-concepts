var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout);

var person = {
    name: '',
    statements: []
};

rl.question('who are you? > ', function (answer) {
    person.name = answer;
    rl.setPrompt(`what would ${person.name} say`);
    rl.prompt();
    rl.on('line', function (statement) {
        person.statements.push(statement);
        if (statement.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`what else ${person.name} say? ('exit' to leave')`);
            rl.prompt();
        }
    });
})

rl.on('close', function () {
    console.log("%s \n %j", person.name, person.statements);
})