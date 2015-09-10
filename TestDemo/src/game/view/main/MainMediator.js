main.MainSceneMediator = game.SceneMediator.extend({
	ctor:function (view) {
		this._super(view);
	}
});

main.MainLayerMediator = game.LayerMediator.extend({
    ctor:function (view) {
		this._super(view);
	},
	init:function () {
		this.subscrib(common.NotifyType.GO_TO_PLAY, this.gotoPlay, this);
	},
	show:function (parent)
	{
		this._super(parent);
		parent.addChild(this.currView);
	},
	freshen:function (obj){

	},
	gotoPlay:function (obj, target) {
		var runSceneMediator = new play.RunSceneMediator(new main.MainScene());
		runSceneMediator.rootLayer(new play.RunLayerMediator(new play.RunLayer()));
		target.showScene(runSceneMediator);
	},
	destroy:function () {
		this.unsubscrib(common.NotifyType.GO_TO_PLAY, this.gotoPlay);
	}
});