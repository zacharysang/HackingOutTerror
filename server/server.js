var port = 80;

var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(req,res){
	console.log("got get!");
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.end('Hello, people!');
})

server.listen(port);

var socket = io.listen(server)


socket.on('connection',function(socket){
	console.log("user connected to socket!");
	
	
	socket.on('new-message',function(data){
		console.log("new message event triggered!");
		console.log("new-message data:");
		console.log(data);
		socket.emit('new-message',data);
	});
	
});

console.log('Server running on port: ' + port);




