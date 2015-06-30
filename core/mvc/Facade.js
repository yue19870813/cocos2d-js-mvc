/********************************************************************************
  The Facade
  @author ituuz 
  @date 2014-11-18
  
  Control the scene and the layer to show or hide.
********************************************************************************/
game.Facade = (function(){
	var unique;
	unique = new _Facade();
	return unique;
})();

function _Facade () {
	game.log("Facade init.");
}

game.Facade._directorMediator = null;

//The model instance map
game.Facade._modelMap = null;

//zoom
game.Facade.zoom = 1;

/**
 * Init framework
 * size:The base window size
 * logTag:The log's tag
 */
game.Facade.init = function(size, logTag) {
	
	game.Facade._directorMediator = new game.DirectorMediator();
	game.Facade._modelMap = new game.Map();
	
	//set the scaling
	var winSize = cc.winSize;
	var zoomX = winSize.width / size.width;
	var zoomY = winSize.height / size.height;
	game.Facade.zoom = zoomX < zoomY ? zoomX : zoomY;
	game.Frameworks.DESIGN_ZOOM = zoomX < zoomY ? zoomX : zoomY;
	if (undefined != logTag) {
		game.Frameworks.LOG_TAG = logTag;
	}
}

/**
 * Registe model
 * size:The base window size
 * logTag:The log's tag
 */
game.Facade.registerModel = function (cls, model) {
	model.subscribe();
	var isExist = game.Facade._modelMap.contains(cls);
	if (isExist) {
		game.log("Model:" + cls + " have already exists!");
	} else {
		game.Facade._modelMap.put(cls, model);
	}
}

//Switch scene
game.Facade.showScene = function (scene) {
	game.Facade._directorMediator.showScene(scene);
	game.Facade._directorMediator.currSceneMediator.showRoot();
}

//Push new scen into the stack
game.Facade.pushScene = function (scene) {
	game.Facade._directorMediator.pushScene(scene);
	game.Facade._directorMediator.currSceneMediator.showRoot();
}

//Pop current scene out of the stack
game.Facade.popScene = function () {
	game.Facade._directorMediator.popScene();
}

//Switch layer
game.Facade.showLayer = function (layer, obj) {
	game.Facade._directorMediator.currSceneMediator.showLayer(layer, obj);
}

//Push new layer into the stack
game.Facade.pushLayer = function (layer, obj) {
	game.Facade._directorMediator.currSceneMediator.pushLayer(layer, obj);
}

//Pop current scene out of the stack
game.Facade.popLayer = function (obj) {
	game.Facade._directorMediator.currSceneMediator.popLayer(obj);
}


