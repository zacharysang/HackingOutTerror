var port = 8080;

//var localtunnel = require('localtunnel');
//var tunnel = localtunnel()

//import express and instantiate it
var express = require('express');
var app = express();

//create a new http server that pipes to the express instance
var http = require('http').Server(app);

//require socketio and create a socket.io server bound to the existing http server
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

http.listen(port,function(){
	
	console.log("Running server on port "+parseInt(port)+"...");
	
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


