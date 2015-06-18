
game.Facade = (function(){
	var unique;
	unique = new _Facade();
	return unique;
})();

function _Facade () {
	game.log("Facade init.");
}

game.Facade._directorMediator = null;

//数据model集合
game.Facade._modelMap = null;

//zoom
game.Facade.zoom = 1;

//初始化框架
game.Facade.init = function(isRuntime, netType, size, logTag) {
	
	game.Frameworks.IS_RUNTIME = isRuntime;
	game.Frameworks.NET_TYPE = netType;
	
	game.Facade._directorMediator = new game.DirectorMediator();
	game.Facade._modelMap = new game.Map();
	
	//设置缩放比例
	var winSize = cc.winSize;
	var zoomX = winSize.width / size.width;
	var zoomY = winSize.height / size.height;
	game.Facade.zoom = zoomX < zoomY ? zoomX : zoomY;
	game.Frameworks.DESIGN_ZOOM = zoomX < zoomY ? zoomX : zoomY;
	if (undefined != logTag) {
		game.Frameworks.LOG_TAG = logTag;
	}
}

//注册model
game.Facade.registerModel = function (cls, model) {
	model.subscribe();
	var isExist = game.Facade._modelMap.contains(cls);
	if (isExist) {
		game.log("已存在的model:" + cls);
	} else {
		game.Facade._modelMap.put(cls, model);
	}
}

//获得当前mediator
game.Facade.getCurrMediator = function () {
	var med = game.Facade._directorMediator.currSceneMediator.currLayerMediator;
	if (med == null) {
		med = game.Facade._directorMediator.currSceneMediator.rootLayerMediator;
	}
	return med;
}

//获得root mediator
game.Facade.getRootMediator = function () {
	return game.Facade._directorMediator.currSceneMediator.rootLayerMediator;
}

//获取model
game.Facade.getModel = function (cls) {
	return game.Facade._modelMap.get(cls);
}

//切换场景
game.Facade.showScene = function (scene) {
	game.Facade._directorMediator.showScene(scene);
	game.Facade._directorMediator.currSceneMediator.showRoot();
}

//新场景入栈
game.Facade.pushScene = function (scene) {
	game.Facade._directorMediator.pushScene(scene);
	game.Facade._directorMediator.currSceneMediator.showRoot();
}

//当前场景出栈
game.Facade.popScene = function () {
	game.Facade._directorMediator.popScene();
}

//切换Layer
game.Facade.showLayer = function (layer) {
	game.Facade._directorMediator.currSceneMediator.showLayer(layer);
}

//切换Layer,入栈
game.Facade.pushLayer = function (layer) {
	game.Facade._directorMediator.currSceneMediator.pushLayer(layer);
}

//当前layer出栈
game.Facade.popLayer = function () {
	game.Facade._directorMediator.currSceneMediator.popLayer();
}


