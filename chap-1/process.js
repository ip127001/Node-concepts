var questions = [
    "what is your name?",
    "what is your fav hobby?",
    "what is preferred language?"
];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

process.stdin.on('data', function (data) {
    answers.push('\n' + data.toString().trim() + '\n');

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function () {
    process.stdout.write('\n');
    process.stdout.write(`${answers[0]}`);
    process.stdout.write('\n');
    process.stdout.write(`${answers[1]}`);
    process.stdout.write('\n');
    process.stdout.write(`${answers[2]}`);
    process.stdout.write('\n');
});

ask(0);