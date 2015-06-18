
game.SceneMediator = game.IMediator.extend({
	currScene:null,		//当前场景
	currLayerMediator:null,
	rootLayerMediator:null,
	layerMediatorList:null,
	ctor:function (view) {
		this.currScene = view;
		this.layerMediatorList = new game.Stack();
	},
	show:function () {
		if (this.currLayerMediator == undefined || this.currLayerMediator == null ) {
			this.rootLayerMediator.init();
			this.rootLayerMediator.show(this.currScene);
		} else {
			this.currLayerMediator.init();
			this.currLayerMediator.isRoot = false;
			this.currLayerMediator.show(this.currScene);
		}
	},
	//设置根层
	rootLayer:function (layer) {
		this.rootLayerMediator = layer;
	},
	showRoot:function () {
		this.show();
	},
	//打开新layer，销毁上一个layer。
	showLayer:function (layer) {
		this.currLayerMediator = layer;
		this.layerMediatorList = new game.Stack();
		this.layerMediatorList.push(layer);
	},
	//打开新layer，将上一个layer入栈保存。
	pushLayer:function (layer) {
		this.currLayerMediator = layer;
		this.layerMediatorList.push(layer);
		this.show();
	},
	//弹出当前layer销毁，进入上一个保存的layer。
	popLayer:function () {
		var layer = this.layerMediatorList.pop();
		layer && layer._pDispose();
		this.currLayerMediator = this.layerMediatorList.top();
		this.currLayerMediator && this.currLayerMediator.freshen();
	}
});


