var socket = io.connect("http://localhost:3000");

socket.on("connect", function(data) {
	socket.emit("join", "Hello server from client");
});


//Listener for "thread" event, which updates messages

socket.on("thread", function(data) {
	$("#thread").append("<li>" + data + "</li>");
});

//Send message to server, resets & prevents default from action
$("form").submit(function() {
	var message = $("#message").val();
	socket.emit("messages", message);
	// this.reset();
	$('#message').val('');
	return false;
})