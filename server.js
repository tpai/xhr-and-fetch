var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    fetch = require('node-fetch');

app.use(express.static(__dirname));

app.get('/data', function(req, res) {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(function(data) {
            return data.json();
        })
        .then(function(json) {
            res.send(json);
        })
});

server.listen(1111);
