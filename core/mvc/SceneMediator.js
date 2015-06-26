/******************************************
 * The SceneMediator：
 * 		Control the layer show or hide.
 * create by SunnyYue 2014-11-18
 ******************************************/
game.SceneMediator = game.IMediator.extend({
	currScene:null,		
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
	//Setting the root layer
	rootLayer:function (layer) {
		this.rootLayerMediator = layer;
	},
	showRoot:function () {
		this.show();
	},
	//Open the new layer and destroy previous  layer.
	showLayer:function (layer) {
		this.currLayerMediator = layer;
		this.layerMediatorList = new game.Stack();
		this.layerMediatorList.push(layer);
	},
	//Open the new layer and push the previous layer into stack.
	pushLayer:function (layer) {
		this.currLayerMediator = layer;
		this.layerMediatorList.push(layer);
		this.show();
	},
	//Pop the current layer to destroy then go to the previous layer.
	popLayer:function () {
		var layer = this.layerMediatorList.pop();
		layer && layer._pDispose();
		this.currLayerMediator = this.layerMediatorList.top();
		this.currLayerMediator && this.currLayerMediator.freshen();
	}
});


