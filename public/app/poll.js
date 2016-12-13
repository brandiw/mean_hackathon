var socket = io();
console.log("loaded poll js");

socket.on('vote-count', updateVotes);

$("#left").on('click', function() {
  console.log("left click");
  socket.emit('left-vote');
});

$("#right").on('click', function() {
  console.log("right click");
  socket.emit('right-vote');
})

function updateVotes(msg) {
  console.log(msg);
  $("#left-vote").text(msg.left);
  $("#left-vote").text(msg.left);
  $("#right-vote").text(msg.right);
};