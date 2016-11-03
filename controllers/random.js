var APIKEY = '5dbc8c5760ea7e0b2270b05eb0b070279deab3507574e072d';
var Wordnik = require('wordnik-bb').init(APIKEY);

var express = require('express');
var router = express.Router();

var noun = "";
var verb = "";
var nouns = "";


router.route('/')
.get(function(req, res) {
  var randomWordPromise = Wordnik.getRandomWordModel({
      hasDictionaryDef: false,
      includePartOfSpeech: "adjective",
      minCorpusCount: 10000
  });
  var randomWordNoun = Wordnik.getRandomWordModel({
      hasDictionaryDef: false,
      includePartOfSpeech: "noun",
      minCorpusCount: 10000
  });
  randomWordNoun.done(function(word) {
    noun = word.attributes.word
  });
  var randomWordVerb = Wordnik.getRandomWordModel({
      hasDictionaryDef: false,
      includePartOfSpeech: "verb",
      minCorpusCount: 10000
  });
  randomWordVerb.done(function(word) {
    verb = word.attributes.word
  });
  var randomWordNouns = Wordnik.getRandomWordModel({
      hasDictionaryDef: false,
      includePartOfSpeech: "noun",
      minCorpusCount: 10000
  });
  randomWordNouns.done(function(word) {
    nouns = word.attributes.word
  });
  randomWordPromise.done(function(wordModel) {
    res.send("The " + wordModel.attributes.word + " " + noun + " that " + verb + " " + nouns);
  });
});

module.exports = router;

