var express = require('express');
var Eightball = require('../models/eightball.js');
var router = express.Router();

router.route('/')
.get(function(req, res) {
  Eightball.find(function(err, users) {
    if(err) {
      return res.status(500).send(err); 
    }

    return res.send(eightballs);
  });
});

module.exports = router;