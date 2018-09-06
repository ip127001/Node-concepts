var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var time = 0;

console.log("wait for it");

function percentageWait(time) {
    process.stdout.write(`${time} percentage`);
}

var interval = setInterval(function () {
    currentTime += waitInterval;
    time = Math.floor((currentTime / waitTime) * 100);
    percentageWait(time);
    console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);

setTimeout(function () {
    clearInterval(interval);
    percentageWait(100);
    console.log("\n\ndone");
}, waitTime);