var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var APIKEY = '5dbc8c5760ea7e0b2270b05eb0b070279deab3507574e072d';
var Wordnik = require('wordnik-bb').init(APIKEY);
var http = require('http').Server(app);
var io = require('socket.io')(http);

mongoose.connect('mongodb://localhost/verdict');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('morgan')('dev'));

// app.use('/api/verdict', require('./controllers/verdict'));
app.use('/random', require('./controllers/random.js'));
app.use('/api/eightballs', require('./controllers/eightball-controller'));
app.use('/api/poll', require('./controllers/poll-controller'));


app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(process.env.PORT || 3000);
