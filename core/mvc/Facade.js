/********************************************************************************
  The Facade
  @author ituuz 
  @date 2014-11-18
  
  Control the scene and the layer to show or hide.
********************************************************************************/

var game = game || {};
var server = server || {};

game.Facade = (function(){
	var unique;
	unique = new _Facade();
	return unique;
})();

function _Facade () {
	cc.log("Facade init.");
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
 * sceneMed:first scene mediator
 */
game.Facade.init = function(size, logTag, sceneMed) {

	game.Notification.init();
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
	//Init first scene mediator.
	game.Facade._directorMediator.showScene(sceneMed);
	game.Facade._directorMediator.currSceneMediator.showRoot();
}

/**
 * Registe model
 * size:The base window size
 * logTag:The log's tag
 */
game.Facade.registerModel = function (cls, model) {
	model.init();
	var isExist = game.Facade._modelMap.contains(cls);
	if (isExist) {
		cc.log("Model:" + cls + " have already exists!");
	} else {
		game.Facade._modelMap.put(cls, model);
	}
}

