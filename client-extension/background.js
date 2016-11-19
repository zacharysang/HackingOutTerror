	/*	
		//connect to socket
		var socket = io();
		
		//when server sends us a new-message2 event, make a new message
		socket.on('new-message',printMessage);
	*/	
		
		//run 'documentready' function once document is loaded and ready
		$(document).ready(documentready)
		
		//collect user's name (login process will go here later)
		if(document.cookie == "")
		{
			var userName = prompt('What is your name?',"");
			document.cookie = userName;
		}else{
			var userName = document.cookie;
		}
		function documentready(){
			
		//define 'enterkey' event on input-box text box
		$('#input-box').keypress(function(event){
			
			//get keycode from event arg if it exists
			var keycode = (event.keyCode ? event.keyCode : event.which);
		
			//if enter key pressed, trigger enterkey event on 'this'
			if(keycode == 13){
				$(this).trigger("enterkey");
			}
		});
		
		//bind input box enterkey event and send button events
		//$("#send-button").click($("#input-box"),sendMessage);
		$("#send-button").click(function () {alert('clicked!');})
		
		$("#input-box").on("enterkey",$("#input-box"),sendMessage);
		
		//utility bar button events
		$("#clear-button").click("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",logText);
		$("#write-button").click("Hello console! (from client)",logText);
		
		}
			function logText(event){
			socket.emit('clear-console',event.data);
		}
		function sendMessage(event){
			//get text from input-box
			var text = event.data.val();
			
			//get timeStr
			var currTime = new Date();
			var timeStr = String(currTime.getHours()) + ":" + String(currTime.getMinutes()) + ":" + String(currTime.getSeconds());
			
			//clear box after printing
			event.data.val("");
			
			socket.emit('new-message',{msg:text,time:timeStr,usr:userName});
			
		}
		//constructor for new message element
		function newMessage(message,sender,time){
			console.log("new message called!")
			return '<tr><td class="message-text">'+message+'</td><td align="right" class="message-info"> | '+sender+' ('+time+')</td></tr>';
		}
		//function to print value from textbox into messages container
		function printMessage(data){
			
			console.log("printMessage called!")
			console.log("data: ");
			console.log(data);
			
			var msg = data.msg;
			var timeStr = data.time;
			var sender = data.usr;
			
			if(msg != ""){
				var messagesContainer = $(".messages-tbody");
				
				//insert new message element
				messagesContainer.append(newMessage(msg,timeStr,sender));
				
			}
			
			
		}