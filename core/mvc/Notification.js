/********************************************************************************
  The Notification
  @author ituuz 
  @date 2014-11-18
  
  Send message,subscrib message and so on.
********************************************************************************/
game.Notification = (function(){
	var unique;
	unique = new _Notification();
	return unique;
})();

function _Notification () {
	cc.log("Notification init.");
}

game.Notification.callbackList = null;

//Must be call the init before use it
game.Notification.init = function () {
	game.Notification.callbackList = new game.Map();
}

//Subscrib message， callback(obj), obj is the parameter of sender。
game.Notification.subscrib = function (type, callback, target) {
	var isExist = game.Notification.callbackList.contains(type);
	if (isExist) {
		var arr = game.Notification.callbackList.get(type);
		arr.push(callback);
	} else {
		var arr = new Array();
		arr.push([callback, target]);
		game.Notification.callbackList.put(type, arr);
		
	}
}

//Remove subscrib by type and callback.
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

//Remove all subscrib by type.
game.Notification.removebByType = function (type) {
	var isExist = game.Notification.callbackList.contains(type);
	if (isExist) {
		return game.Notification.callbackList.remove(type);
	} 
	return false;
}

//Remove all subscrib.
game.Notification.removeAll = function () {
	game.Notification.callbackList.clear();
}

//Send message， obj will be return to callback(obj)。
game.Notification.send = function (type, obj) {
	var isExist = game.Notification.callbackList.contains(type);
	if (isExist) {
		var arr = game.Notification.callbackList.get(type);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != undefined && arr[i] != null) {
				arr[i][0](obj, arr[i][1]);
			}
		}
	} 
}
