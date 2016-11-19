//This document holds functionality injected into all pages

//this will be used maybe


//connect to socket
	var socket = new io.Socket();
	socket.connect('http://tchat.localtunnel.me');
	
	socket.on('connect',function(){
		console.log("successfully connected to server");
		
		
		});
		
alert('yeah, still here!');