var mongoose = require('mongoose');

var EightballSchema = new mongoose.Schema({
  message: String,
  simpleid: Number
});

module.exports = mongoose.model('Eightball', EightballSchema);