init.InitScene = game.IScene.extend({
	ctor:function (){
		this._super();
		game.log("init scene!!!!!!!!!");
	}
});

init.InitLayer = game.IView.extend({
	_tf:null,
	ctor:function () {
		this._super();

		this._tf = new cc.LabelTTF.create("Init....", "Arial", 20);
		this._tf.x = 300;
		this._tf.y = 300;
		this.addChild(this._tf);
//		GameControler.run();
		this.scheduleOnce(function() {
			this.send(common.NotifyType.TEST_NOTIFY_TYPE);
		}, 0.2);
		return true;
	}
});