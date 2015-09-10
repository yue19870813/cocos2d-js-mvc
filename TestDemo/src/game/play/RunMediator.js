play.RunSceneMediator = game.SceneMediator.extend({
	ctor:function (view) {
		this._super(view);
	}
});

play.RunLayerMediator = game.LayerMediator.extend({
    ctor:function (view) {
		this._super(view);
	},
	init:function () {

	},
	show:function (parent)
	{
		this._super(parent);
		parent.addChild(this.currView);
	},
	freshen:function (obj){

	},
	destroy:function () {

	}
});