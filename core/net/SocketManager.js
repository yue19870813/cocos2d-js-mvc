/******************************************
 * 消息协议管理类：
 * 		发送消息、注册消息等。
 * create by Yue 2014-11-13
 ******************************************/
//单例
//var SocketManager = (function(){
//	game.log("SocketManager init.");
//	var unique;
//	unique = new _SocketManager();
//	return unique;
//})();

var SocketManager = {};

/** 
 * Public
 **/
//连接地址
SocketManager.address = "";

//回调集合
SocketManager.callbackMap = null;

//session
SocketManager.session = "";

/** 
 * Private
 **/
//是否初始化SocketManager
SocketManager._isInit = false;
//当前发送的对象，用于断线重连。
SocketManager._obj = null;
//服务器链接异常回调
SocketManager._error = null;

//初始化SocketMananger
SocketManager.init = function(addr, errorCallback) {
	if (game.Frameworks.NET_TYPE == game.NetType.LOCAL) {
		game.LocalStoreManager.init();
		SocketManager.callbackMap = new game.Map();
		SocketManager._isInit = true;
	} else if (game.Frameworks.NET_TYPE == game.NetType.WS) {
		SocketManager.address = addr;
		SocketManager._error = errorCallback;
		SocketManager.callbackMap = new game.Map();
		SocketManager._isInit = true;
	}
}

//注册服务器回调监听
SocketManager.register = function (pid, callback) {
	if (SocketManager._isInit == false) {
		game.log("SocketManager doesn't init!");
		return;
	}
	SocketManager.callbackMap.put(pid, callback);
}

//删除指定服务器监听
SocketManager.unregister = function(pid) {
	SocketManager.callbackMap.remove(pid);
}

//移除所有服务器监听
SocketManager.clearRegister = function() {
	SocketManager.callbackMap.clear();
}

//发送协议
SocketManager.send = function(obj) {

	if (game.Frameworks.NET_TYPE == game.NetType.LOCAL) {
		game.LocalStoreManager.requestHandler(obj);
		return;
	}
	
	if (SocketManager._isInit == false) {
		game.log("SocketManager doesn't init!");
		return;
	}
	obj.sid = SocketManager.session;
	//保存当前消息用于断线重连
	SocketManager._obj = obj;
	
	var ws = new WebSocket(SocketManager.address);
	//创建连接成功监听
	ws.onopen = function(evt) {
		var str = JSON.stringify(obj);
		game.log("request text msg: " + str);
		this.send(str);
	};
	
	//连接错误
	ws.onerror = function(evt) {
		game.log("sendText Error was fired!");
		if (SocketManager._error != null && SocketManager._error != undefined) {
			SocketManager._error(evt);
		}
		this.close();
	};
	
	//连接关闭
	ws.onclose = function(evt) {
		game.log("_wsiSendText websocket instance closed.");
		this.close();
	};
	
	//消息返回
	ws.onmessage = function(evt) {
		game.log("response text msg: " + evt.data);
		SocketManager.prase(evt.data);
		this.close();//关闭socket
	};
}

//断线重连
SocketManager.reSend = function() {
	SocketManager.send(SocketManager._obj);
}

//解析返回协议
SocketManager.prase = function(msg) {
	game.log(msg, "MESSAGES");
	var arr = JSON.parse(msg);
	for (var i = 0; i < arr.length; i++) {
		var pid = arr[i].pid;
		var call = SocketManager.callbackMap.get(pid);
		if (call != undefined && call != null) {
			call(arr[i]); //回调给注册点
		}
	}
}

