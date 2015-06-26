/******************************************
 * The LayerMediator：
 * 		The layer's logic.
 * create by SunnyYue 2014-11-18
 ******************************************/
game.LayerMediator = game.IMediator.extend({
	currView:null,
	backBtn:null,
	mask:null,
	isRoot:true,
	ctor:function (view) {
		this.currView = view;
	},
	show:function (parent) {
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
	freshen:function () {
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

