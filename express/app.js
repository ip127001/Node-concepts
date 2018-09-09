var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

var skierTerms = [{
        word: "powerful",
        meaning: "he is powerful"
    },
    {
        word: "sleep",
        meaning: "he is sleeping"
    },
    {
        word: "go",
        meaning: "he went"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    console.log(`requested method ${req.method} on:  ${req.url}`);
    next();
})

app.use(express.static("./public"));
app.use(cors());

app.get('/dictionary-api', function (req, res, next) {
    res.json(skierTerms);
})

app.post('/dictionary-api', function (req, res, next) {
    skierTerms.push(req.body);
    res.json(skierTerms);
})

app.post('/', function (req, res, next) {
    skierTerms.push(req.body)
})
app.listen(3000, function (err) {
    console.log("server started on port 3000");
});

module.exports = app;