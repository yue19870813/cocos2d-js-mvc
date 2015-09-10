init.InitSceneMediator = game.SceneMediator.extend({
	ctor:function (view) {
		this._super(view);
	}
});

init.InitLayerMediator = game.LayerMediator.extend({
    ctor:function (view) {
		this._super(view);
	},
	init:function () {
		this.subscrib(common.NotifyType.TEST_NOTIFY_TYPE, this.gotoMain, this);
	},
	show:function (parent)
	{
		this._super(parent);
		parent.addChild(this.currView);
	},
	freshen:function (obj){

	},
	gotoMain:function (obj, target) {
		game.SocketManager.init("", null);
		game.StaticDataUtil.init();
		GameControler.registModel();
		var arr = new Array();
		var list = game.dataArray;
		for (var i = 0; i < list.length; i++) {
			var item = new game.LoaderItem(list[i].type, list[i].url, list[i].key);
			arr.push(item);
		}

		var count = 0;
		var that = target;
		var loader = new game.LoaderManager();
		loader.load(arr, function(str, key) {
			game.StaticDataUtil.add(key, str);
			count++;
			if (count >= list.length) {
				setTimeout(function() {
					var mainSceneMediator = new main.MainSceneMediator(new main.MainScene());
					mainSceneMediator.rootLayer(new main.MainLayerMediator(new main.MainLayer()));
					that.showScene(mainSceneMediator);
				}, 1);
			}
		});
	},
	test:function () {
		game.log("dsfsdfasdf");
	},
	destroy:function () {
		this.unsubscrib(common.NotifyType.TEST_NOTIFY_TYPE, this.gotoMain);
	}
});