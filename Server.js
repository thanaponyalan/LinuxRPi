var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/s60030037');
var db = mongoose.connection;

// app.get('/ping', function(req, res) {
//     res.send({ping:'hello this is server and I am alive!'});
// });

// app.get('/ping/:id', function(req, res) {
//     res.send({ping:'hello this is server and I am got '+req.params.id});
// });

db.on('error', function callback() {
    console.log("Connection error");
});

db.once('open', function callback() {
    console.log("Mongo working!");
});

app.listen(3009);
console.log('Listening on port 3009...');