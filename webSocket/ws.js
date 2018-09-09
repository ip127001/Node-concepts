var webSocketServer = require("ws").Server;
var wss = new webSocketServer({
    port: 3000
});

wss.on("connection", function (ws) {
    ws.on("message", function (message) {
        if (message === 'exit') {
            ws.close();
        } else {
            wss.clients.forEach(function (client) {
                client.send(message);
            });
        }
    });
    ws.send('welcome to cyber chat');
});