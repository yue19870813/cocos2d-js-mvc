/********************************************************************************
  The LayerMediator
  @author ituuz 
  @date 2014-11-18
  
  The layer's logic.
********************************************************************************/
game.LayerMediator = game.IMediator.extend({
	currView:null,
	backBtn:null,
	mask:null,
	isRoot:true,
	ctor:function (view) {
		this.currView = view;
	},
	show:function (parent, obj) {
		if (this.isRoot) return;	
		var size = cc.winSize;
		this.mask = new cc.LayerColor(cc.color(0,0,0,200), size.width, size.height);
		parent.addChild(this.mask);
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan
		}, this.mask);
	},
	onTouchBegan:function(touch, event) {
		//Could to do sth.
		return true;
	},
	init:function () {
		throw new Error("SubClass must be overwrite init function and regist event in this function.");
	},
	freshen:function (obj) {
		game.log("freshen");
	},
	getCurrMediator:function () {
		var med = game.Facade._directorMediator.currSceneMediator.currLayerMediator;
		if (med == null) {
			med = game.Facade._directorMediator.currSceneMediator.rootLayerMediator;
		}
		return med;
	},
	getRootMediator:function () {
		return game.Facade._directorMediator.currSceneMediator.rootLayerMediator;
	},
	getModel:function () {
		return game.Facade._modelMap.get(cls);
	},	
	//Switch scene
	showScene:function (scene) {
		game.Facade._directorMediator.showScene(scene);
		game.Facade._directorMediator.currSceneMediator.showRoot();
	},
	//Push new scen into the stack
	pushScene:function (scene) {
		game.Facade._directorMediator.pushScene(scene);
		game.Facade._directorMediator.currSceneMediator.showRoot();
	},
	//Pop current scene out of the stack
	popScene:function () {
		game.Facade._directorMediator.popScene();
	},
	//Switch layer
	showLayer:function (layer, obj) {
		game.Facade._directorMediator.currSceneMediator.showLayer(layer, obj);
	},
	//Push new layer into the stack
	pushLayer:function (layer, obj) {
		game.Facade._directorMediator.currSceneMediator.pushLayer(layer, obj);
	},
	//Pop current scene out of the stack
	popLayer:function (obj) {
		game.Facade._directorMediator.currSceneMediator.popLayer(obj);
	},
	//private
	_pDispose:function () {
		var that = this;
		that.destroy();
		that.currView.removeFromParent(true);
		that.mask && this.mask.removeFromParent(true);
	},
	destroy:function () {
		throw new Error("SubClass must be overwrite destroy function and delete event in this function.");
	}
});

