var sayings = [
    "hey you",
    "me and you",
    "early bird",
    "lol",
    "morning",
    "evening"
]

var interval = setInterval(function () {
    var i = Math.floor(Math.random() * sayings.length);
    process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function (data) {
    console.log(`stdin data recieved -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});