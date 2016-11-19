//import express and instantiate it
var express = require('express');
var app = express();

//create a new http server that pipes to the express instance
var http = require('http').Server(app);

//require socketio and create a socket.io server bound to the existing http server
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

http.listen(8080,function(){
	
	console.log("Running server on port 8080...");
	
});

io.on('connection',function(socket){
	console.log("user connected to socket!");
	
	socket.on('clear-console',function(data){
		console.log(data);
	});
	
	socket.on('new-message',function(data){
		console.log("new message event triggered!");
		console.log("new-message data:");
		console.log(data);
		socket.emit('new-message',data);
	});
	
});


/*
app.post('/', function(req, res){
	console.log("POST request received!");
	//console.log("req: ");
	//console.log(req);
	
	//need to write response
	//res.sendFile(__dirname + '/public' + '/index.html');
	
});
*/