var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eightball');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('morgan')('dev'));

app.use('/api/verdict', require('./controllers/verdict'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(process.env.PORT || 3000);
