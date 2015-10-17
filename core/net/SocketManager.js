/********************************************************************************
  The game.SocketManager
  @author ituuz 
  @date 2014-11-13
  
  The manager of the protocol. It's can send message, register message, resend 
  when net error and so on.
********************************************************************************/

game.SocketManager = {};

/** 
 * Private
 **/
//The address of websocket
game.SocketManager._address = "";
//Callback list
game.SocketManager._callbackMap = null;
//User session
game.SocketManager._session = "";
//Is initialize SocketManager
game.SocketManager._isInit = false;
//Save the current send object used for resend when net error.
game.SocketManager._obj = null;
//Callback of the server error.
game.SocketManager._error = null;

//Initialize SocketMananger
game.SocketManager.init = function(addr, errorCallback) {
	game.SocketManager._address = addr;
	game.SocketManager._error = errorCallback;
	game.SocketManager._callbackMap = new game.Map();
	game.SocketManager._isInit = true;
}

//Register the server callback.
game.SocketManager.register = function (pid, callback, target) {
	if (game.SocketManager._isInit == false) {
		game.log("SocketManager doesn't init!");
		return;
	}
	game.SocketManager._callbackMap.put(pid, [callback, target]);
}

//Remove the specified protocol register. 
game.SocketManager.unregister = function(pid) {
	game.SocketManager._callbackMap.remove(pid);
}

//Remove all the protocol register. 
game.SocketManager.clearRegister = function() {
	game.SocketManager._callbackMap.clear();
}

//Send protocol message.
game.SocketManager.send = function(obj) {

	if (game.SocketManager._isInit == false) {
		game.log("SocketManager doesn't init!");
		return;
	}
	obj.sid = game.SocketManager._session;
	//Save the current send object used for resend when net error.
	game.SocketManager._obj = obj;
	
	var ws = new WebSocket(game.SocketManager._address);
	//Create net connect success.
	ws.onopen = function(evt) {
		var str = JSON.stringify(obj);
		game.log("request text msg: " + str);
		this.send(str);
	};
	
	//Net error.
	ws.onerror = function(evt) {
		game.log("sendText Error was fired!");
		if (game.SocketManager._error != null && game.SocketManager._error != undefined) {
			game.SocketManager._error(evt);
		}
		this.close();
	};
	
	//Net close.
	ws.onclose = function(evt) {
		game.log("_wsiSendText websocket instance closed.");
		this.close();
	};
	
	//Server message back.
	ws.onmessage = function(evt) {
		game.log("response text msg: " + evt.data);
		game.SocketManager.prase(evt.data);
		this.close();//关闭socket
	};
}

//Resend message
game.SocketManager.reSend = function() {
	game.SocketManager.send(game.SocketManager._obj);
}

//Prase the server back message and send to register.
game.SocketManager.prase = function(msg) {
	var arr = JSON.parse(msg);
	for (var i = 0; i < arr.length; i++) {
		var pid = arr[i].pid;
		var param = game.SocketManager._callbackMap.get(pid);
		if (param != undefined && param != null) {
			var call = param[0];
			call(arr[i], param[1]); //send to register
		}
	}
}

