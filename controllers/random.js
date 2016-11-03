var APIKEY = '5dbc8c5760ea7e0b2270b05eb0b070279deab3507574e072d';
var Wordnik = require('wordnik-bb').init(APIKEY);

var express = require('express');
var router = express.Router();

router.route('/')
.get(function(req, res) {
  var randomWordPromise = Wordnik.getRandomWordModel({
      includePartOfSpeech: "verb",
      minCorpusCount: 10000
    }
  );
  randomWordPromise.done(function(wordModel) {
    res.send(wordModel.attributes.word);
  });
});



module.exports = router;