var express = require('express');
var router = express.Router();
var http = require('http').Server(router);
var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;


var leftVotes = 0;
var rightVotes = 0;
io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });


  socket.on('right-vote', function(msg) {
    console.log("got right vote");
    rightVotes++;
    emitVotes();
  });
  socket.on('left-vote', function(msg) {
    console.log("got left vote");
    leftVotes++;
    emitVotes();
  });

  function emitVotes() {
    var votes = {left: leftVotes, right: rightVotes};
    io.emit('vote-count', votes);
  }

  socket.on('send-chat', function(msg) {
    console.log(msg);
    io.emit('receive-chat', msg)
  });

});

// http.listen(port, function(){
//   console.log('listening on *:port');
// });

	// console.log("localhost:" + port);
	// http.listen(port);

module.exports = router;