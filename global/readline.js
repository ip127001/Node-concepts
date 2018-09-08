var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var person = {
    name: '',
    statements: []
};

rl.question('who are you? > ', function (answer) {
    person.name = answer;

    fs.writeFileSync(person.name + ".md", `${person.name}\n==============\n\n`);

    rl.setPrompt(`what would ${person.name} say`);
    rl.prompt();
    rl.on('line', function (statement) {
        person.statements.push(statement);

        fs.appendFile(person.name + ".md", `${statement.trim()}\n`, function (err) {
            if (err) console.log(err);
        });

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