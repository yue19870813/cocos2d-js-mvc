/******************************************
 * 消息注册和通知，观察者：
 * 		发送消息、注册消息等。
 * create by Yue 2014-11-18
 ******************************************/
game.Notification = (function(){
	var unique;
	unique = new _Notification();
	return unique;
})();

function _Notification () {
	game.log("Notification init.");
}

game.Notification.callbackList = null;

//初始化消息通知工具类
game.Notification.init = function () {
	game.Notification.callbackList = new game.Map();
}

//注册消息， callback(obj), obj为send时的参数。
game.Notification.subscrib = function (type, callback) {
	var isExist = game.Notification.callbackList.contains(type);
	if (isExist) {
		var arr = game.Notification.callbackList.get(type);
		arr.push(callback);
	} else {
		var arr = new Array();
		arr.push(callback);
		game.Notification.callbackList.put(type, arr);
		
	}
}

//移除指定注册
game.Notification.unsubscrib = function (type, callback) {
	var isExist = game.Notification.callbackList.contains(type);
	if (isExist) {
		var arr = game.Notification.callbackList.get(type);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == callback) {
				arr.splice(i, 1);
				return true;
			}
		}
		return false;
	} 
	return false;
}

//移除所有指定类型的消息注册
game.Notification.removebByType = function (type) {
	var isExist = game.Notification.callbackList.contains(type);
	if (isExist) {
		return game.Notification.callbackList.remove(type);
	} 
	return false;
}

//移除所有注册。
game.Notification.removeAll = function () {
	game.Notification.callbackList.clear();
}

//发送消息， obj将返回给callback(obj)。
game.Notification.send = function (type, obj) {
	var isExist = game.Notification.callbackList.contains(type);
	if (isExist) {
		var arr = game.Notification.callbackList.get(type);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != undefined && arr[i] != null) {
				arr[i](obj); //回调给注册点
			}
		}
	} 
}
