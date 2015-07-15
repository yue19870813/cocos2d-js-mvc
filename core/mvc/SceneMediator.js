/********************************************************************************
  The SceneMediator
  @author ituuz 
  @date 2014-11-18
  
  Control the layer show or hide.
********************************************************************************/
game.SceneMediator = game.IMediator.extend({
	currScene:null,		
	currLayerMediator:null,
	rootLayerMediator:null,
	layerMediatorList:null,
	ctor:function (view) {
		this.currScene = view;
		this.layerMediatorList = new game.Stack();
	},
	show:function (obj) {
		if (this.currLayerMediator == undefined || this.currLayerMediator == null ) {
			this.rootLayerMediator.init();
			this.rootLayerMediator.show(this.currScene, obj);
		} else {
			this.currLayerMediator.init();
			this.currLayerMediator.isRoot = false;
			this.currLayerMediator.show(this.currScene, obj);
		}
	},
	//Setting the root layer
	rootLayer:function (layerMed) {
		this.rootLayerMediator = layerMed;
	},
	showRoot:function () {
		this.show();
	},
	//Open the new layer and destroy previous  layer.
	showLayer:function (layerMed, obj) {
		this.currLayerMediator = layerMed;
		this.layerMediatorList = new game.Stack();
		this.layerMediatorList.push(layerMed);
		this.show(obj);
	},
	//Open the new layer and push the previous layer into stack.
	pushLayer:function (layerMed, obj) {
		this.currLayerMediator = layerMed;
		this.layerMediatorList.push(layerMed);
		this.show(obj);
	},
	//Pop the current layer to destroy then go to the previous layer.
	popLayer:function (obj) {
		var layer = this.layerMediatorList.pop();
		layer && layer._pDispose();
		this.currLayerMediator = this.layerMediatorList.top();
		if (this.currLayerMediator) {
			this.currLayerMediator.freshen(obj);
		} else {
			this.rootLayerMediator.freshen(obj);
		}
	}
});


