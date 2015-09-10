
game.LocalCache = {};

game.LocalCache.cacheData = null;

game.LocalCache.sKey = "game";

game.LocalCache.init = function (keyType, value) {
	game.LocalCache.cacheData = {};
	if (keyType == game.LocalData.CUSTOM) {
		game.LocalCache.sKey = value;
	} else if (keyType == game.LocalData.UUID) {
		game.LocalCache.sKey = game.Frameworks.DEVICE_ID;
	} else {
		game.LocalCache.sKey = "game";
	}
	//cc.sys.OS_WINDOWS != cc.sys.os
	var str = "";
	if (!cc.sys.isMobile || game.Frameworks.IS_RUNTIME) {
		str = cc.sys.localStorage.getItem(game.LocalCache.sKey);
	} else {
//		str = LocalStore.getInstance().getItem(game.LocalCache.sKey);
		str = cc.sys.localStorage.getItem(game.LocalCache.sKey);
	}
	if (str == undefined || str == "" || str == null) {
		game.LocalCache.cacheData[game.LocalCache.sKey] = {};
		if (!cc.sys.isMobile || game.Frameworks.IS_RUNTIME) {
			cc.sys.localStorage.setItem(game.LocalCache.sKey, JSON.stringify(game.LocalCache.cacheData));
		} else {
//			LocalStore.getInstance().saveItem(game.LocalCache.sKey, JSON.stringify(game.LocalCache.cacheData));
			cc.sys.localStorage.setItem(game.LocalCache.sKey, JSON.stringify(game.LocalCache.cacheData));
		}
	} else {
		game.LocalCache.cacheData = JSON.parse(str);
	}
}

game.LocalCache.getItem = function (key) {
	return game.LocalCache.cacheData[game.LocalCache.sKey][key];
}

game.LocalCache.setItem = function (key, value) {
	game.LocalCache.cacheData[game.LocalCache.sKey][key] = value;
	var str = JSON.stringify(game.LocalCache.cacheData);
	if (!cc.sys.isMobile || game.Frameworks.IS_RUNTIME) {
		cc.sys.localStorage.setItem(game.LocalCache.sKey, str);
	} else {
//		LocalStore.getInstance().saveItem(game.LocalCache.sKey, str);
		cc.sys.localStorage.setItem(game.LocalCache.sKey, str);
	}
}

game.LocalCache.deleteItem = function (key) {
	game.LocalCache.cacheData[game.LocalCache.sKey][key] = null;
	var str = JSON.stringify(game.LocalCache.cacheData);
	if (!cc.sys.isMobile || game.Frameworks.IS_RUNTIME) {
		cc.sys.localStorage.setItem(game.LocalCache.sKey, str);
	} else {
//		LocalStore.getInstance().saveItem(game.LocalCache.sKey, str);
		cc.sys.localStorage.setItem(game.LocalCache.sKey, str);
	}
}