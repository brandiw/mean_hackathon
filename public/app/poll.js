var socket = io();
console.log("loaded poll js");

socket.on('vote-count', updateVotes);

document.addEventListener("DOMContentLoaded", function() {
  $("#left").on('click', function() {
    console.log("left click");
    socket.emit('left-vote');
  });

  $("#right").on('click', function() {
    console.log("right click");
    socket.emit('right-vote');
  })
});