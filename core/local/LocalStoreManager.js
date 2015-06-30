/********************************************************************************
  The game.LocalStoreManager
  @author ituuz 
  @date 2015-4-29
  
  Save the game data into loacalstore.
 ********************************************************************************/
game.LocalStoreManager = {};

game.LocalStoreManager.serverHandlerMap = null;

game.LocalStoreManager.sKey = "game";

game.LocalStoreManager.isInit = false;

game.LocalStoreManager.init = function (localDataType, value) {
	if (game.LocalStoreManager.isInit == false) {
		game.LocalStoreManager.serverHandlerMap = new game.Map();
		game.LocalCache.init(localDataType, value);
		game.LocalStoreManager.isInit = true;
	}
}

//pid:protocol id, handlerName:protocol handle name
game.LocalStoreManager.registServerHandler = function (pid, handlerName) {
	game.LocalStoreManager.serverHandlerMap.put(pid, handlerName);
}

game.LocalStoreManager.requestHandler = function (obj) {
	var pid = obj.pid;
	var handlerName = game.LocalStoreManager.serverHandlerMap.get(pid);
	var serverHandler = new server[handlerName]();
	serverHandler.execute(obj);
}

game.LocalStoreManager.setItem = function (key, value) {
	game.LocalCache.setItem(key, value);
}

game.LocalStoreManager.getItem = function (key) {
	return game.LocalCache.getItem(key);
}

game.LocalStoreManager.deleteItem = function (key) {
	var gameObj = cc.sys.localStorage.getItem(game.LocalStoreManager.sKey);
	gameObj[key] = null;
}



