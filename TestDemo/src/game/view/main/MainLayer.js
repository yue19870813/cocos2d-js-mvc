main.MainScene = game.IScene.extend({
	ctor:function (){
		this._super();

	}
});

main.MainLayer = game.IView.extend({
	_tf:null,
	uiHelper:null,
	ctor:function () {
		this._super();
		var size = cc.winSize;

		game.log(size.width + "=====" + size.height);



		var file = "res/ui/MainScene.json";

		this.uiHelper = new game.UIHelper();
		var node = this.uiHelper.doLayout(file);

//		var json = ccs.load(file);
//		game.log(json["Type"]);
//		var node = json.node;
		node.setAnchorPoint(cc.p(0.5,0.5));
        node.setPosition(this.getContentSize().width/2,this.getContentSize().height/2);
        node.setContentSize(size);
//        ccui.helper.doLayout(node);

		var btn = ccui.helper.seekWidgetByName(node, "Button_1");
		btn.addTouchEventListener(this.touchEvent,this);
		game.log(cc.textureCache.getCachedTextureInfo());
		this.addChild(node);

		return true;
	},
	touchEvent:function (sender, type) {
		if (type == ccui.Widget.TOUCH_ENDED) {
			game.log(cc.textureCache.getCachedTextureInfo());
			this.send(common.NotifyType.GO_TO_PLAY);
		}
	},
	onExit:function () {
		this.uiHelper.clearRes();
		this._super();
	}
});