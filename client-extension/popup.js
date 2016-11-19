// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

	
	

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl() {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  
  var retUrl;

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

	//alert("url: " + url);
    //retUrl = url;
	
  });
  
  //alert(retUrl);
  return retUrl;

}


//aquire a userName
if(document.cookie == "")
		{
			var userName = prompt('What is your name?',"");
			document.cookie = userName;
		}else{
			var userName = document.cookie;
		}
	
//sends message to server (triggered by event)
function sendMessage(event){
		
			var sourceUrl = getCurrentTabUrl();
			//alert("sourceUrl: " + sourceUrl);
			
			
		
			//get text from input-box
			var text = event.data.val();
			
			//get timeStr
			var currTime = new Date();
			var timeStr = String(currTime.getHours()) + ":" + String(currTime.getMinutes()) + ":" + String(currTime.getSeconds());
			
			//clear box after printing
			event.data.val("");
			
			//socket.emit('new-message',{msg:text,time:timeStr,usr:userName});
						
		}
	
//Takes message details and returns a message html element
function newMessage(message,sender,time){
			return '<tr><td class="message-text">'+message+'</td><td align="right" class="message-info"> | '+sender+' ('+time+')</td></tr>';
		}
		
//To be called when receiving a message, creates new message and inserts it
function printMessage(data){
			var msg = data.msg;
			var timeStr = data.time;
			var sender = data.usr;
			
			if(msg != ""){
				var messagesContainer = $("#messages-body");
				
				//insert new message element
				messagesContainer.append(newMessage(msg,sender,timeStr));
			}
}


	//entry point for popup window functionality
function docReady () {
		
	
<<<<<<< HEAD
		
	userName = "Zak";
=======
>>>>>>> f5916098afa438ab320ad2937c3838bcf2771720
	
	$('#input-box').keypress(function(event){
			
			//get keycode from event arg if it exists
			var keycode = (event.keyCode ? event.keyCode : event.which);
		
			//if enter key pressed, trigger enterkey event on 'this'
			if(keycode == 13){
				$(this).trigger("enterkey");
			}
		});
		
	$("#send-button").click($("#input-box"),sendMessage);
	$("#input-box").on("enterkey",$("#input-box"),sendMessage)
	
}

$(document).ready(docReady);



