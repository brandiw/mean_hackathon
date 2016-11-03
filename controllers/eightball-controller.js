var express = require('express');
var Eightball = require('../models/eightball.js');
var router = express.Router();

router.route('/')
.get(function(req, res) {
  Eightball.find(function(err, eightballs) {
    if(err) {
      return res.status(500).send(err); 
    }
    console.log('eightball-controller success firing', eightballs);
    res.send(eightballs);
  });
});

module.exports = router;