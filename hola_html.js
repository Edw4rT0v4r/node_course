var http = require("http"),
    fs = require("fs");

// Forma sincrona
// var html = fs.readFileSync("./index.html");
// http.createServer(function(req, res) {
//     res.write(html);
//     res.end();
// }).listen(8080);

// forma asincrona
fs.readFile("./index.html", function(error, html) {
    http.createServer(function(req, res) {
        res.write(html);
        res.end();
    }).listen(8080);
});